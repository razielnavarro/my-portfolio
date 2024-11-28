'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";


const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-600 text-white py-4">
        <div className="container mx-auto flex items-center justify-between">
    
        {/* Title on navbar */}
        <div className="text-2xl">
          <Link href="/" prefetch={true}>
            <span className="text-white">Raziel</span>
            </Link>
        </div>

        {/* Navigation links */}
      <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 text-sm font-medium">
        <li>
          <Link className={`${pathname === '/' ? 'text-purple-600':'text-white hover:text-purple-600'}`} href={"/"}>
          Home
          </Link>
        </li>
        <li>
        <Link className={`${pathname === '/about' ? 'text-purple-600':'text-white hover:text-purple-600'}`} href={"/about"}>
          About
          </Link>
        </li>
        <li>
        <Link className={`${pathname === '/projects' ? 'text-purple-600':'text-white hover:text-purple-600'}`} href={"/projects"}>
          Projects
          </Link>
        </li>
      </ul>

      {/* GitHub icon */}
      <a href="#">
        <img className="w-7" src="assets\github-mark-white.svg"></img>
      </a>

      </div>
    </nav>
  );
};

export default Navbar;