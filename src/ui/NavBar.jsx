import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="grid grid-cols-4 gap-3">
      <Link to="/">
        <div className="text-pink-50 uppercase font-semibold text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer hover:bg-pink-700 rounded-md py-1 flex justify-center items-center">
          Home
        </div>
      </Link>
      <Link to="/about">
        <div className="text-pink-50 uppercase font-semibold text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer hover:bg-pink-700 rounded-md py-1 flex justify-center items-center">
          About
        </div>
      </Link>
      <Link to="/services">
        <div className="text-pink-50 uppercase font-semibold text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer hover:bg-pink-700 rounded-md py-1 flex justify-center items-center">
          Services
        </div>
      </Link>
      <Link to="/booking">
        <div className="text-pink-50 uppercase font-semibold text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer hover:bg-pink-700 rounded-md py-1 flex justify-center items-center">
          Booking
        </div>
      </Link>
    </nav>
  );
}

export default NavBar;
