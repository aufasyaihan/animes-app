"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const path = usePathname();
    return (
        <Link href={href} className="px-4 py-4 rounded-md relative group">
            {children}
            <span
                className={`bg-white h-1 ${
                    path == href ? "w-full" : "w-0"
                } group-hover:w-full transition-all absolute bottom-0 left-0`}
            ></span>
        </Link>
    );
}
