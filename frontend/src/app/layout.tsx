import { ClientProvider } from "@/lib/clientProvider";

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
      <ClientProvider>
        <body>{children}</body>
      </ClientProvider>
    </html>
  );
}
