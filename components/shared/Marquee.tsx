import { cn } from "@/lib/utils"

export function Marquee({
  children,
  className,
  direction = "left",
  speed = 25,
}: {
  children: React.ReactNode
  className?: string
  direction?: "left" | "right"
  speed?: number
}) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden whitespace-nowrap border-y-2 border-border",
        className,
      )}
    >
      <div
        className={cn(
          "animate-marquee flex shrink-0 items-center gap-8",
          direction === "right" && "[animation-direction:reverse]",
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
        {children}
        {children}
        {children}
      </div>
    </div>
  )
}
