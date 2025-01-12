"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full bg-blue-900 py-4 px-6 font-[family-name:var(--font-poppins)]">
            <div className="flex gap-4 items-center justify-between w-full">
                <Link href="/">
                    <h1 className="text-xl font-bold">YourAnimeList</h1>
                </Link>
                <ul className="flex gap-2">
                    <li>
                        <Link href="/animes" className="hover:bg-blue-700 px-4 py-2 rounded-md">Animes</Link>
                    </li>
                    <li>
                        <Link href="/animes/share" className="hover:bg-blue-700 px-4 py-2 rounded-md">Share Animes</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
