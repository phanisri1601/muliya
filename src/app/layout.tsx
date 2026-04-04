import type { Metadata } from "next";
import "./globals.css";

import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { Toaster } from "@/app/components/ui/sonner";
import { ParallaxWrapper } from "@/app/components/ParallaxWrapper";
import { CartProvider } from "@/app/context/CartContext";
import { AuthProvider } from "@/app/context/AuthContext";

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
        <AuthProvider>
          <CartProvider>
            <ParallaxWrapper>
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
              <Toaster position="top-right" />
            </ParallaxWrapper>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
