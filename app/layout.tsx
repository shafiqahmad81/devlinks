import Header from "@/components/sectoins/Header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Link sharing app",
  description: "This is a fully-functional link-sharing app for developers!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased p-6`}>
        <Header />
        <main className="flex gap-6 items-stretch pt-6 min-h-[calc(100vh-120px)]">
          {children}
        </main>
      </body>
    </html>
  );
}
