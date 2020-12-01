import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center space-x-10 p-4 uppercase sticky top-0 z-50 bg-gray-900 text-white">
      <Link href="/">Home</Link>
      <Link href="/projects/">Projects</Link>
      <Link href="/blog/">Blog</Link>
    </nav>
  );
}
