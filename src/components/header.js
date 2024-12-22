import React, { useState } from "react";
import logo from "../assets/logo.png";
import profil from "../assets/profil.png";

const Header = () => {
  // State to manage mobile menu visibility and active navigation item
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  // Close the mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Function to handle setting active link
  const handleLinkClick = (link) => {
    setActiveLink(link);
    closeMobileMenu(); // Close the mobile menu on item click
  };

  return (
    <>
      <header className="bg-black text-white py-4 px-6 border-b-2 border-[#7D5260]">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto">
          {/* Left - Logo as an Image */}
          <div className="flex items-center">
            <img
              src={logo} // Replace with your logo image URL
              alt="Logo"
              className="h-12" // Adjust size as needed
            />
          </div>

          {/* Center - Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              onClick={() => handleLinkClick("home")}
              className={`hover:text-[#B3261E] font-extrabold ${
                activeLink === "home" ? "text-[#B3261E] underline" : ""
              }`}
            >
              Home
            </a>
            <a
              href="#"
              onClick={() => handleLinkClick("popular")}
              className={`hover:text-[#B3261E] font-extrabold ${
                activeLink === "popular" ? "text-[#B3261E] underline" : ""
              }`}
            >
              Popular
            </a>
            <a
              href="#"
              onClick={() => handleLinkClick("topRated")}
              className={`hover:text-[#B3261E] font-extrabold ${
                activeLink === "topRated" ? "text-[#B3261E] underline" : ""
              }`}
            >
              Top Rated
            </a>
            <a
              href="#"
              onClick={() => handleLinkClick("upcoming")}
              className={`hover:text-[#B3261E] font-extrabold ${
                activeLink === "upcoming" ? "text-[#B3261E] underline" : ""
              }`}
            >
              Upcoming
            </a>
          </nav>

          {/* Right - Profile Photo */}
          <div className="hidden md:flex items-center space-x-3">
            <img
              src={profil} // Replace with your profile image URL
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
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
      </header>

      {/* Mobile Menu (Visible when isMobileMenuOpen is true) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black text-white px-6 py-4 space-y-4 absolute top-16 left-0 right-0 z-50">
          <a
            href="#"
            onClick={() => handleLinkClick("home")}
            className={`block hover:text-[#B3261E] font-extrabold ${
              activeLink === "home" ? "text-[#B3261E] underline" : ""
            }`}
          >
            Home
          </a>
          <a
            href="#"
            onClick={() => handleLinkClick("popular")}
            className={`block hover:text-[#B3261E] font-extrabold ${
              activeLink === "popular" ? "text-[#B3261E] underline" : ""
            }`}
          >
            Popular
          </a>
          <a
            href="#"
            onClick={() => handleLinkClick("topRated")}
            className={`block hover:text-[#B3261E] font-extrabold ${
              activeLink === "topRated" ? "text-[#B3261E] underline" : ""
            }`}
          >
            Top Rated
          </a>
          <a
            href="#"
            onClick={() => handleLinkClick("upcoming")}
            className={`block hover:text-[#B3261E] font-extrabold ${
              activeLink === "upcoming" ? "text-[#B3261E] underline" : ""
            }`}
          >
            Upcoming
          </a>
        </div>
      )}
    </>
  );
};

export default Header;
