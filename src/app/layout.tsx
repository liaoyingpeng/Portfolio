import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "廖盈芃｜學生作品集",
  description: "準備進入職場的前端學生作品集，包含作品、關於我與聯絡資訊。",
};

const navItems = [
  { href: "/", label: "首頁" },
  { href: "/works", label: "作品" },
  { href: "/about", label: "關於我" },
  { href: "/contact", label: "聯絡資訊" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <header className="sticky top-0 z-20 border-b border-line/80 bg-paper/90 backdrop-blur">
          <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
            <Link href="/" className="font-mono text-sm tracking-[0.18em]">
              YING PENG
            </Link>
            <div className="flex items-center gap-1 text-sm text-muted sm:gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-2 transition hover:bg-zinc-900 hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-line">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p>© 2026 廖盈芃</p>
            <p>Front-end student portfolio built with Next.js and Tailwind CSS.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
