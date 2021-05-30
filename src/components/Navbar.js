import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const { pathname } = useRouter();

  return (
    <nav
      data-scroll
      data-scroll-sticky
      data-scroll-target="#container"
      className="h-screen hidden lg:flex flex-col justify-center items-center space-y-20 uppercase sticky top-0 z-50 bg-gray-900 text-xl"
    >
      <Link href="/">
        <a
          className={`
            ${
              pathname === "/" ? "text-pink-400" : "text-white"
            } transform rotate-90 
          `}
        >
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
