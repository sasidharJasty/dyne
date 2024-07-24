import { useState, useEffect } from "react";
import logo from "../assets/Images/Logo.png";
import "./Nav.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 1025);
    }
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="left-0 w-full z-50 fixed top-0 pb-2 pt-14 bg-black/25 backdrop-blur-md">
      <div className="w-screen flex flex-wrap items-center justify-between mx-auto py-4 px-20 relative">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://i.ibb.co/pfW6CJL/full-logo.png"
            className=" w-[7vw] h-fit mt-0"
            alt="Dyne Logo"
          />
        </a>
        <div className={` ${isSmallScreen ? "w-1/12 " : "hidden"}`}></div>
        <div className={"flex absolute bottom-0 right-20"}>
          <button
            onClick={toggleMenu}
            type="button"
            className={`inline-flex pop-btn items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600  ${
              isSmallScreen ? "" : ""
            }`}
            aria-controls="navbar-default"
            aria-expanded={menuOpen}
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
          <div className="flex mt-1">
            <div
              className={` ${
                (menuOpen && isSmallScreen) || !isSmallScreen
                  ? "!block"
                  : "hidden"
              }`}
              id="navbar-default"
            >
              <ul className=" popup !font-normal text-[0.9vw] flex flex-col p-4 lg:p-0 mt-4 border lg:pt-10 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700" >
                <li>
                  <a
                    href="/"
                    className="block py-2 px-3 !font-normal uppercase text-[0.9vw] text-white md:hover:text-blue-700 rounded bg-transparent md:text-white-700 md:p-0 dark:text-white md:dark:text-white-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/#mission"
                    className="block py-2 px-3 text-gray-900 rounded uppercase !font-normal text-[0.9vw]  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500  dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Mission
                  </a>
                </li>
                <li>
                  <a
                    href="/#news"
                    className="block py-2 px-3 text-gray-900 rounded uppercase !font-normal text-[0.9vw] md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500  dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="/#projects"
                    className="block py-2 px-3 text-gray-900 rounded uppercase !font-normal text-[0.9vw] md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500  dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="/#sponsor"
                    className="block py-2 px-3 text-gray-900 rounded uppercase !font-normal text-[0.9vw] md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500  dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Sponsor
                  </a>
                </li>
              </ul>
            </div>
            <div className={` ${isSmallScreen ? "w-1/12 " : "hidden"}`}></div>
            <a
              href="https://tally.so/r/mV8WpE"
              className={` w-fit mx-auto text-white ml-20 rounded-md text-[0.9vw] font-thin text-center justify-center border border-white py-[0.4vw] px-[1vw] hover:scale-110 transition-all ease-in-out tracking-wide ${
                isSmallScreen ? "hidden md:inline-block" : "md:inline-block"
              }`}
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
