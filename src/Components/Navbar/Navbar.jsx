import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navPadding, setNavPadding] = useState("py-9");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavPadding("py-5");
    } else {
      setNavPadding("py-9");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`bg-[#2c3e50] fixed top-0 left-0 right-0 px-14 z-40 max-sm:px-10 transition-all duration-300 ${navPadding}`}
      >
        <div className="max-w-screen-2xl flex items-center justify-between">
          <Link to="/">
            <span className="text-white text-4xl uppercase font-bold max-sm:text-3xl">
              start framework
            </span>
          </Link>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            id="navbar-default"
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row md:items-center absolute md:relative top-20 left-0 md:top-0 w-full md:w-auto py-6 md:py-0 bg-[#2c3e50] md:bg-transparent`}
          >
            <ul className="flex flex-col md:flex-row md:items-center md:space-x-4 px-10 md:px-0">
              <li>
                <NavLink
                  to="/about"
                  className="block p-2 text-white text-lg font-bold uppercase w-fit"
                  aria-current="page"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className="block p-2 text-white text-lg font-bold uppercase w-fit"
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="block p-2 text-white text-lg font-bold uppercase w-fit"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
