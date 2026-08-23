import type { Metadata } from "next";
import { Lora, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/shared/ThemeProvider";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tasty Temptations | Tentaciones horneadas frescas en Santo Domingo",
  description:
    "Tentaciones recién horneadas, con delivery o pickup en Santo Domingo. Cheesecakes, brownies, cinnamon rolls y más pecados deliciosos.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Tasty Temptations | Tentaciones horneadas frescas en Santo Domingo",
    description:
      "Tentaciones recién horneadas, con delivery o pickup en Santo Domingo. Cheesecakes, brownies, cinnamon rolls y más pecados deliciosos.",
    url: "https://tastytemptations.com.do",
    siteName: "Tasty Temptations",
    images: [
      {
        url: "https://tastytemptations.com.do/logo-horizontal.png",
        width: 1200,
        height: 630,
        alt: "Tasty Temptations",
      },
    ],
    locale: "es_DO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tasty Temptations | Tentaciones horneadas frescas en Santo Domingo",
    description:
      "Tentaciones recién horneadas, con delivery o pickup en Santo Domingo. Cheesecakes, brownies, cinnamon rolls y más pecados deliciosos.",
    images: ["https://tastytemptations.com.do/logo-horizontal.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={`${lora.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-background font-base antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
