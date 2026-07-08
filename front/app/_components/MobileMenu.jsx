"use client";

import { useState } from "react";
import Link from "next/link";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  const links = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "Projects", href: "/projects" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <div className="md:hidden">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-md bg-gray-100 p-2.5 text-gray-600 hover:bg-gray-200 transition cursor-pointer"
      >
        <span className="sr-only">Toggle menu</span>

        {isOpen ? (
          <svg
            className="size-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="size-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 top-16 w-full bg-white shadow-lg border-t">
          <nav className="flex flex-col p-6 gap-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-gray-700 hover:text-primary transition"
              >
                {link.name}
              </Link>
            ))}

            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="/login"
                className="rounded-md bg-primary py-2 text-center text-white hover:opacity-90 transition"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-md border border-primary py-2 text-center text-primary hover:bg-primary hover:text-white transition"
              >
                Register
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
