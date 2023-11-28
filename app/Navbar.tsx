import { HelpLogo } from "@/assets/icons/HelpLogo";
import Link from "next/link";

export default function Navbar() {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Tickets", href: "/tickets" },
  ];

  return (
    <nav className="w-full flex justify-start items-center border-b p-4">
      <Link
        className="flex justify-start items-center font-black tracking-tighter text-lg gap-1"
        href="/"
      >
        <HelpLogo className="text-2xl text-indigo-600" />
        <span>HelpDesk</span>
      </Link>

      <ul className="ms-auto flex justify-start items-center gap-1">
        {links.map(({ label, href }: { label: string; href: string }) => {
          return (
            <li key={label}>
              <Link
                className="font-medium text-slate-500 rounded-lg px-4 py-3 hover:bg-slate-950 hover:text-slate-100 transition-all duration-200 ease-in-out"
                href={href}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
