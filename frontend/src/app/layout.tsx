import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="ja">
        <body>{children}</body>
      </html>
    </QueryClientProvider>
  );
}
