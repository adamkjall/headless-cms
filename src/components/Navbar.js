import Link from "next/link";
import { useRouter } from "next/router";

import Logo from "../../public/fox-icon.svg";

export default function Navbar() {
  const { pathname } = useRouter();

  return (
    <nav
      data-scroll
      data-scroll-sticky
      data-scroll-target="#container"
      className="h-screen flex flex-col justify-center items-center space-y-20 uppercase sticky top-0 z-50 bg-gray-900 text-xl hidden lg:flex"
    >
      <Link href="/">
        <a
          className={`
            ${
              pathname === "/" ? "text-pink-400" : "text-white"
            } transform rotate-90 
          `}
        >
          {/* <Logo width="42" /> */}
          Home
        </a>
      </Link>
      <Link href="/projects">
        <a
          className={`
          ${
            pathname === "/projects" ? "text-pink-400" : "text-white"
          } transform rotate-90
        `}
        >
          Projects
        </a>
      </Link>
      <Link href="/blog">
        <a
          className={`
          ${
            pathname === "/blog" ? "text-pink-400" : "text-white"
          } transform rotate-90
        `}
        >
          Blog
        </a>
      </Link>
    </nav>
  );
}
