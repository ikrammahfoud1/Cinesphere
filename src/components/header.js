import React, { useState, useContext } from "react";
import logo from "../assets/logo.png";
import profil from "../assets/profil.png";
import { Link, useLocation } from "react-router";
import WishList from "../context/wishlist";

const routes = [
  {
    title: "Home",
    href: "/home",
  },
  { title: "Poupular", href: "/popular" },
  { title: "Top Rated", href: "/toprated" },
  { title: "Upcoming", href: "/upcoming" },
];
const Header = () => {
  // State to manage mobile menu visibility and active navigation item
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  // Close the mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Function to handle setting active link
  const handleLinkClick = () => {
    closeMobileMenu(); // Close the mobile menu on item click
  };
  const { wishList } = useContext(WishList);

  return (
    <>
      <header className="bg-black text-white py-4 px-6 border-b-2 border-[#7D5260] sticky  z-50 top-0 left-0">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto">
          {/* Left - Logo as an Image */}
          <Link to="/home">
            <div className="flex items-center">
              <img
                src={logo} // Replace with your logo image URL
                alt="Logo"
                className="h-12" // Adjust size as needed
              />
            </div>
          </Link>

          {/* Center - Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            {routes.map(({ title, href }) => (
              <a
                key={title}
                href={href}
                onClick={() => handleLinkClick()}
                className={`hover:text-[#B3261E] font-extrabold ${
                  href === pathname ? "text-[#B3261E] underline" : ""
                }`}
              >
                {title}
              </a>
            ))}
          </nav>

          {/* Right - Profile Photo */}
          <div className="hidden md:flex items-baseline  space-x-3">
            <Link to={`/newsletter`}>
              <img
                src={"https://cdn-icons-png.flaticon.com/512/5893/5893924.png"} // Replace with your profile image URL
                alt="Profile"
                className="w-10 h-10  object-cover"
              />
            </Link>
            <Link to={`/wishlist`}>
              <div className="relative inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                  class="fill-red-500"
                >
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    fill="red"
                  />
                </svg>

                <span className="absolute top-0 right-0 inline-block w-5 h-5 bg-white text-red-500 rounded-full text-xs flex items-center justify-center font-bold">
                  {wishList.length}
                </span>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black text-white px-6 py-4 space-y-4 absolute top-16 left-0 right-0 z-50">
            {routes.map(({ title, href }) => (
              <a
                key={title}
                href={href}
                onClick={() => handleLinkClick()}
                className={`block hover:text-[#B3261E] font-extrabold ${
                  href === pathname ? "text-[#B3261E] underline" : ""
                }`}
              >
                {title}
              </a>
            ))}
            <a
              href={"/newsletter"}
              onClick={() => handleLinkClick()}
              className={`block hover:text-[#B3261E] font-extrabold ${
                "/newsletter" === pathname ? "text-[#B3261E] underline" : ""
              }`}
            >
              News Letter
            </a>
            <a
              href={"/wishlist"}
              onClick={() => handleLinkClick()}
              className={`block hover:text-[#B3261E] font-extrabold ${
                "/wishlist" === pathname ? "text-[#B3261E] underline" : ""
              }`}
            >
              Wishlist
            </a>
          </div>
        )}
      </header>

      {/* Mobile Menu (Visible when isMobileMenuOpen is true) */}
    </>
  );
};

export default Header;
