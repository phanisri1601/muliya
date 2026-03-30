import type { Metadata } from "next";
import "./globals.css";

import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { Toaster } from "@/app/components/ui/sonner";
import { ParallaxWrapper } from "@/app/components/ParallaxWrapper";

export const metadata: Metadata = {
  title: "Muliya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ParallaxWrapper>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster position="top-right" />
        </ParallaxWrapper>
      </body>
    </html>
  );
}
