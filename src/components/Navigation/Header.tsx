"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="text-gray-200 bg-gray-800">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <Link
          href="/"
          className="flex items-center mb-4 font-medium title-font md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 p-2 text-white bg-red-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">tailstore</span>
        </Link>
        <nav className="flex flex-wrap items-center justify-center space-x-4 text-base md:ml-auto">
          <Link
            href="/"
            className={`transition ${
              pathname === "/" ? "font-black" : "hover:text-red-500"
            }`}
          >
            Store
          </Link>
          <Link
            href="/contact"
            className={
              pathname === "/contact" ? "font-black" : "hover:text-red-500"
            }
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
