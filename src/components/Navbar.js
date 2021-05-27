import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const { pathname } = useRouter();

  return (
    <nav className="w-14 h-screen flex flex-col justify-center items-center space-y-20 uppercase sticky top-0 z-50 bg-gray-900 text-white text-xl">
      <Link href="/">
        <a
          className={
            (pathname === "/" ? "text-pink-400" : "", "transform rotate-90")
          }
        >
          Home
        </a>
      </Link>
      <Link href="/projects/">
        <a
          className={
            (pathname === "/projects" ? "text-pink-400" : "",
            "transform rotate-90")
          }
        >
          Projects
        </a>
      </Link>
      <Link href="/blog/">
        <a
          className={
            (pathname === "/blog" ? "text-pink-400" : "", "transform rotate-90")
          }
        >
          Blog
        </a>
      </Link>
    </nav>
  );
}
