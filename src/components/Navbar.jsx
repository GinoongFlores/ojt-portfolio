import { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu, AiFillUpCircle } from "react-icons/ai";
import Switcher from "../components/Switcher";

const Navs = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const navLinks = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Skills",
      link: "skills",
    },
    {
      name: "Project",
      link: "project",
    },
    {
      name: "Contact",
      link: "contact",
    },
  ];

  const navLinksResponsive = [
    {
      name: "Home",
      link: "home",
    },
    {
      name: "About",
      link: "about",
    },
    {
      name: "Skills",
      link: "skills",
    },
    {
      name: "Project",
      link: "project",
    },
    {
      name: "Contact",
      link: "contact",
    },
  ];
  return (
    <>
      <header
        className="dark:bg-primary dark:text-white text-black bg-lightPrimary"
        id="home"
      >
        <nav className="sticky container mx-auto z-20 px-4 top-0 flex justify-between items-center h-24">
          <div className="flex items-center justify-center gap-4">
            <div>
              <Switcher />
            </div>
            <div>
              <h1 className="w-full text-sm md:text-md lg:text-xl font-bold">
                <a href="">@ginoongflores</a>
              </h1>
            </div>
            <div className="text-gray-400 before:content-['|'] m-4 invisible md:visible"></div>
            <h2 className="invisible md:visible">
              <Link to="About">Home</Link>
            </h2>
          </div>

          <ul className="hidden md:flex">
            {navLinks.map((navLink, index) => (
              <li key={index} className="ml-10 cursor-pointer">
                <Link to={navLink.link} smooth={true} duration={500}>
                  {navLink.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* mobile toggle */}
          <div onClick={toggleMenu} className="block md:hidden z-10">
            {showMenu ? (
              <AiOutlineClose size={20} className="text-white" />
            ) : (
              <AiOutlineMenu size={20} />
            )}
          </div>

          {/* mobile menu */}
          <div
            className={
              showMenu
                ? "fixed left-0 top-0 w-full h-full border-r border-r-gray-900 duration-500 bg-black bg-opacity-90"
                : "ease-in-out duration-500 fixed left-[100%]"
            }
          >
            {/* <h1 className="w-full text-2xl font-bold text-center">
              <a href="">@ginoongflores</a>
            </h1> */}
            <ul className="flex flex-col items-center">
              {navLinksResponsive.map((navLink, index) => (
                <li key={index} className="p-6 cursor-pointer">
                  <Link to={navLink.link} smooth={true}>
                    {navLink.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navs;
