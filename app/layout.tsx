import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mamun's blog",
  description: "Blog about daily software engineering tech debt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
