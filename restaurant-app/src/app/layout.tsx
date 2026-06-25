import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CartSidebar from "@/components/CartSidebar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import FloatingCTA from "@/components/FloatingCTA";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Saqib Restaurant Swat | Fine Dining in Matta Valley",
  description: "Experience exquisite mountain resort cuisine and traditional KPK hospitality in Matta, Swat. Reserve a table or order online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <CartProvider>
          <Navbar />
          <main className="flex-grow">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <CartSidebar />
          <FloatingCTA />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
