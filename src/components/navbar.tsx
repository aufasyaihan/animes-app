"use client";

import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="w-full bg-blue-900 py-2 px-6 font-[family-name:var(--font-poppins)]">
            <div className="flex gap-4 items-center justify-between w-full">
                <Link href="/" className="flex gap-4 items-center">
                    <Image
                        src={logo.src}
                        alt="Logo"
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                    <h1 className="text-xl font-bold">YourAnimeList</h1>
                </Link>
                <ul className="flex gap-8">
                    <li>
                        <Link href="/animes">Animes</Link>
                    </li>
                    <li>
                        <Link href="/animes/share">Share Animes</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
