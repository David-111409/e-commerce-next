"use client";

import { useState } from "react";
import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  Show,
  useUser,
} from "@clerk/nextjs";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();

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

            <div className="flex flex-col gap-3">
              <Show when="signed-out">
                <SignInButton mode="modal">
                  <button className="rounded-md bg-primary py-2 text-center text-white hover:bg-teal-500 transition cursor-pointer">
                    Login
                  </button>
                </SignInButton>

                <SignUpButton mode="modal">
                  <button className="rounded-md border border-primary py-2 text-center text-primary hover:bg-primary hover:text-white transition cursor-pointer">
                    Register
                  </button>
                </SignUpButton>
              </Show>
            </div>

            {/* User Info */}
            <Show when="signed-in">
              <div>
                <p className="font-semibold text-gray-800">
                  {user?.firstName} {user?.lastName}
                </p>

                <p className="text-sm text-gray-500">
                  {user?.primaryEmailAddress?.emailAddress}
                </p>
              </div>
            </Show>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
