#!/usr/bin/env python3
"""Smart image compression: only replaces files when the output is smaller."""
import os
from pathlib import Path
from PIL import Image

ROOT = Path("public")

# Skip SVG, already-optimized tiny icons, and Next.js generated files
SKIP_NAMES = {"favicon.ico"}


def is_photo(path: Path) -> bool:
    """Heuristic: real photos usually live in real/, products/, custom-orders/."""
    parts = set(path.parts)
    return bool(parts & {"real", "products", "custom-orders"})


def compress_png(src: Path, dst: Path) -> bool:
    img = Image.open(src)
    orig_mode = img.mode
    has_alpha = orig_mode in ("RGBA", "LA") or (
        orig_mode == "P" and "transparency" in img.info
    )

    # Try palette mode first for illustrations (often shrinks PNGs with flat colors)
    if not has_alpha:
        try:
            p = img.convert("RGB").convert("P", palette=Image.ADAPTIVE, colors=256)
            p.save(dst, "PNG", optimize=True)
            if dst.stat().st_size < src.stat().st_size:
                return True
        except Exception:
            pass
    else:
        # For transparent PNGs, quantize with alpha support if colors are few
        try:
            rgba = img.convert("RGBA")
            # Only quantize if it looks like an illustration (not a photo)
            if not is_photo(src):
                q = rgba.quantize(colors=256, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE)
                # Restore alpha
                q2 = q.convert("RGBA")
                q2.save(dst, "PNG", optimize=True)
                if dst.stat().st_size < src.stat().st_size:
                    return True
        except Exception:
            pass

    # Fallback: RGB/RGBA with optimize
    try:
        if has_alpha:
            img.convert("RGBA").save(dst, "PNG", optimize=True)
        else:
            img.convert("RGB").save(dst, "PNG", optimize=True)
        return dst.stat().st_size < src.stat().st_size
    except Exception:
        return False


def compress_jpeg(src: Path, dst: Path) -> bool:
    img = Image.open(src)
    rgb = img.convert("RGB")
    # Use quality 82 for photos; keep a good balance
    rgb.save(dst, "JPEG", quality=82, optimize=True, progressive=True)
    return dst.stat().st_size < src.stat().st_size


def main():
    total_before = 0
    total_after = 0
    processed = 0
    skipped = 0
    errors = 0

    for path in sorted(ROOT.rglob("*")):
        if not path.is_file():
            continue
        ext = path.suffix.lower()
        if ext not in {".png", ".jpg", ".jpeg", ".webp"}:
            continue
        if path.name in SKIP_NAMES:
            continue

        before = path.stat().st_size
        total_before += before
        tmp = path.with_suffix(path.suffix + ".tmp")

        try:
            if ext == ".png":
                ok = compress_png(path, tmp)
            elif ext in {".jpg", ".jpeg"}:
                ok = compress_jpeg(path, tmp)
            elif ext == ".webp":
                # Keep webp as-is for now; re-encode would rarely help
                skipped += 1
                total_after += before
                continue
            else:
                skipped += 1
                total_after += before
                continue

            if ok and tmp.exists():
                after = tmp.stat().st_size
                saved = before - after
                pct = saved / before * 100
                os.replace(tmp, path)
                total_after += after
                processed += 1
                print(f"✓ {path}: {before/1024:.1f}KB -> {after/1024:.1f}KB (-{pct:.1f}%)")
            else:
                if tmp.exists():
                    tmp.unlink()
                total_after += before
                skipped += 1
        except Exception as e:
            if tmp.exists():
                tmp.unlink()
            total_after += before
            errors += 1
            print(f"✗ {path}: {e}")

    print(f"\nProcessed: {processed}, skipped: {skipped}, errors: {errors}")
    print(f"Total: {total_before/1024/1024:.2f}MB -> {total_after/1024/1024:.2f}MB")
    if total_before > total_after:
        print(f"Saved: {(total_before-total_after)/1024/1024:.2f}MB ({(total_before-total_after)/total_before*100:.1f}%)")


if __name__ == "__main__":
    main()
