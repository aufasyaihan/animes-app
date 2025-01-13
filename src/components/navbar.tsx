import Link from "next/link";
import NavLink from "./navlink";
export default function Navbar() {
    return (
        <nav className="w-full bg-blue-900 px-6 font-[family-name:var(--font-poppins)]">
            <div className="flex gap-4 items-center justify-between w-full">
                <Link href="/">
                    <h1 className="text-xl font-bold">YourAnimeList</h1>
                </Link>
                <ul className="flex gap-2 py-4">
                    <li>
                        <NavLink href="/animes">Animes</NavLink>
                    </li>
                    <li>
                        <NavLink href="/animes/share">Share Anime</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
