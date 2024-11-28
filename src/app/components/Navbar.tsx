const Navbar = () => {
  return (
    <nav className="bg-gray-600 text-white py-4">
        <div className="container mx-auto flex items-center justify-between">
        {/* Title on navbar */}
        <div className="text-2xl">
            <span className="text-white">Raziel</span>
        </div>

        {/* Navigation links */}
      <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 text-sm font-medium">
        <li>
          Home
        </li>
        <li>
          About
        </li>
        <li>
          Projects
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