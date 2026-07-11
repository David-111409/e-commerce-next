import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

const Header = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "Projects", href: "/projects" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];
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
              <SignInButton mode="modal">
                <button className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-500">
                  Login
                </button>
              </SignInButton>

              <SignUpButton mode="modal">
                <button className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-500/75 sm:block">
                  Register
                </button>
              </SignUpButton>
            </div>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
