import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import NavBar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Bouzonville Handball Club",
  description: "Site officiel du Bouzonville Handball Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen antialiased">
        <Header />
        <NavBar />
        <main className="flex-grow">{children}</main>
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
