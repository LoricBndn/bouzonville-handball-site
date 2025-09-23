import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import NavBar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Bouzonville Handball Club",
  description: "Bouzonville Handball Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen">
        <Header></Header>
        <NavBar></NavBar>
        <main className="flex-grow">{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
