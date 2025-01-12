import Link from "next/link";

export default function Card({ children, href }: { children: React.ReactNode, href?: string }) {
  return href ? (
    <Link className="flex flex-col w-48 h-fit bg-blue-900 text-white shadow-md rounded-md overflow-hidden group" href={href}>
      {children}
    </Link>
  ) : (
    <div className="flex flex-col w-48 h-fit text-white shadow-md rounded-md overflow-hidden group">
      {children}
    </div>
  );
}
