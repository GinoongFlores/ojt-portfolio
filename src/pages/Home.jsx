import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Pic from "/img/pic.png";

const Home = () => {
  return (
    <>
      <section
        className="dark:bg-primary dark:text-white text-black bg-lightPrimary "
        id="home"
      >
        <div className="container mx-auto py-14">
          <div className="grid z-20 grid-rows-1 md:grid-cols-2 gap-8">
            <div className="self-center leading-relaxed">
              <h1 className="text-xl">Hello I'm</h1>
              <h2 className="text-3xl">Christian Paul Flores</h2>
              <br />
              <p>A web Developer</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 md:gap-0">
              <div className="max-w-[450px] w-full h-auto ">
                <img
                  src={Pic}
                  alt="my pic"
                  className="rounded-full border-solid border-2 dark:border-white border-black object-contain w-full h-auto"
                />
              </div>
              <div className="socials pt-11">
                <ul className="flex gap-4">
                  <li>
                    <a href="#">
                      <FaLinkedin className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-5 h-5" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaGithub className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-5 h-5" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
