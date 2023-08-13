import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mamun's blog",
  description: "Blog about daily software engineering tech debt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <Image
          src="/logo192.png"
          width={40}
          height={40}
          className="mx-auto"
          alt={"logo"}
        />
        <Link href="/">
          <h1 className="text-2xl text-white font-bold mt-4">
            Mamun&apos;s Blog
          </h1>
        </Link>
        <p className="text-slate-300">🤟 Welcome to my tech blog. 💻</p>
      </div>
    </header>
  );

  const footer = (
    <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
      <h3>Designed by Pixegami</h3>
    </div>
  );

  return (
    <html lang="en">
      <body>
        <div className="mx-auto  max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
