import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Todo App",
  description: "Nest.js and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  user: React.ReactNode;
  todo: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
