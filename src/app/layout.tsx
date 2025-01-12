import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  display: "swap",
});
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: "400", 
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Anime List",
  description: "Anime list for weebs and otakus around the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${roboto.variable} antialiased`}
      >
        <header className="sticky top-0">
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
