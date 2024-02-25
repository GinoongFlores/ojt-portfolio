import { Link } from "react-scroll";
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

const navLinks = [
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
    name: "Projects",
    link: "projects",
  },
];

const socialLinks = [
  {
    icon: <FaXTwitter className="w-6 h-6" />,
    link: "https://twitter.com",
  },
  {
    icon: <FaInstagram className="w-6 h-6" />,
    link: "https://instagram.com",
  },
  {
    icon: <FaLinkedin className="w-6 h-6" />,
    link: "https://linkedin.com",
  },
  {
    icon: <CgMail className="w-7 h-7" />,
    link: "mailto:florespaul161@gmail.com",
  },
  {
    icon: <FaGithub className="w-6 h-6" />,
    link: "https://github.com/ginoongflores",
  },
];

const Footer = () => {
  return (
    <>
      <section className="dark:bg-primary dark:text-white text-black bg-lightPrimary">
        <hr className="w-full border-1 rounded dark:border-lightPrimary border-primary"></hr>
        <div className="mt-8 p-11 container mx-auto">
          <div className="flex flex-col md:grid grid-cols-2 gap-4 items-center text-center">
            <div className="flex flex-col justify-center items-center md:items-start ">
              <div>
                <h1 className="w-full text-sm md:text-md font-bold">
                  <a href="#">All Rights Reserved @ginoongflores 2024</a>
                </h1>
              </div>
              <div className="socials pt-2">
                <ul className="flex items-center gap-4">
                  {socialLinks.map((social, index) => (
                    <li key={index}>
                      <a href={social.link}>{social.icon}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <ul className="flex flex-col justify-center items-center sm:flex-row md:justify-self-end gap-4 sm:gap-0">
              {navLinks.map((navLink, index) => (
                <li key={index} className="ml-10 cursor-pointer">
                  <Link to={navLink.link} smooth={true} duration={500}>
                    {navLink.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
