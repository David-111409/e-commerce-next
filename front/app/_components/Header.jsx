import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { ShoppingCart } from "lucide-react";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
const links = [
  { name: "Home", href: "/" },
  { name: "Explore", href: "/explore" },
  { name: "Projects", href: "/projects" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];
const Header = () => {
  const cartItemsCount = 3;
  return (
    <header className="z-10 bg-white shadow-md">
      <div className="mx-auto  max-w-7xl flex h-16 items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={30} height={30} />
          <span className="sr-only">Home</span>
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Show when="signed-out">
                <SignInButton mode="modal">
                  <button className="block cursor-pointer rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-500">
                    Login
                  </button>
                </SignInButton>

                <SignUpButton mode="modal">
                  <button className="hidden cursor-pointer rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-500/75 sm:block">
                    Register
                  </button>
                </SignUpButton>
              </Show>

              <Show when="signed-in">
                <div className="flex items-center gap-4">
                  <Link
                    href="/cart"
                    className="relative flex items-center justify-center"
                  >
                    <ShoppingCart className="h-6 w-6 text-gray-700 transition hover:text-primary" />

                    {cartItemsCount > 0 && (
                      <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                        {cartItemsCount}
                      </span>
                    )}
                  </Link>
                  <UserButton />
                </div>
              </Show>
            </div>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
