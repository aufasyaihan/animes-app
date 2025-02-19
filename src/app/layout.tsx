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
        <html lang="en" className="h-[100vh]">
            <body
                className={`${poppins.variable} ${roboto.variable} antialiased h-full flex flex-col`}
            >
                <header className="sticky top-0 z-50">
                    <Navbar />
                </header>
                <main className="flex-1">{children}</main>
                <footer className="flex gap-6 flex-wrap items-center justify-center px-4 py-2 bg-blue-900 text-white">
                    <p className="text-center">
                        © 2025 YourAnimeList{" "}
                        <span className="font-bold">Made By Aufa</span>
                    </p>
                </footer>
            </body>
        </html>
    );
}
