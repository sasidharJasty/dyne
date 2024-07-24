import logo from "../assets/Images/Logo.png";
import "../Styles/Home.css";

export default function Footer() {
  return (
    <div className="w-screen  h-fit bg-[#0f0f0f] relative overflow-hidden">

      <div className="w-screen  h-fit pb-[5vh] flex mobile-flex">
      <div className="md:w-1/3   mx-auto ">
          <ul className="  my-auto h-fit ml-[5vw]  mx-auto md:flex hidden !font-normal w-fit  p-4 lg:p-0 border-0 lg:pt-10 rounded-lg flex-row md:space-x-8 rtl:space-x-reverse mt-[8vh] md:border-0 dark:border-gray-700">
          <li>
                  <a
                    href="/"
                    className="block py-2 px-3 !font-normal uppercase text-[1.1vw] text-white md:hover:text-blue-700 rounded bg-transparent md:text-white-700 md:p-0 dark:text-white md:dark:text-white-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/#mission"
                    className="block py-2 px-3 text-gray-900 rounded uppercase !font-normal text-[1.1vw]  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500  dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Mission
                  </a>
                </li>
                <li>
                  <a
                    href="/#news"
                    className="block py-2 px-3 text-gray-900 rounded uppercase !font-normal text-[1.1vw] md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500  dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="/#projects"
                    className="block py-2 px-3 text-gray-900 rounded uppercase !font-normal text-[1.1vw] md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500  dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="/#sponsor"
                    className="block py-2 px-3 text-gray-900 rounded uppercase !font-normal text-[1.1vw] md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500  dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Sponsor
                  </a>
                </li>
          </ul>
        </div>
        
        <div className="md:w-1/3 mx-auto  w-screen">
          <img
            src={logo}
            className=" md:w-[3vw] mx-auto w-[5.5vh] h-[5.5vh] md:h-fit  md:mt-[8vh] mt-[5vh] brightness-75  "
            alt="Dyne Logo"
          />
        </div>
        <div className="w-1/3 text-gray-100 h-fit my-auto mt-[6vh] mobile-width mx-auto font-thin">Copyright © Dyne Research 2024.<br className="md:hidden relative font-thin" /> All rights reserved.<br className=""/><span className="mobile font-thin"> Unauthorized replication prohibited.</span>
        </div>
        
      </div>
    </div>
  );
}