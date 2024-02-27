import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import Pic from "/img/pic.png";

const Home = () => {
  return (
    <>
      <section
        className="dark:bg-primary dark:text-white text-black bg-lightPrimary "
        id="home"
      >
        <div className="container mx-auto py-20">
          <div className="grid z-20 grid-rows-1 md:grid-cols-2 gap-8">
            <div className="self-center justify-self-center">
              <h1 className="text-2xl pb-5">Hello I'm</h1>
              <h2 className="text-2xl md:text-3xl xl:text-5xl">
                Christian Paul <span className="inline md:block"> Flores </span>
              </h2>
              <br />
              <p className="text-sm md:text-1xl lg:text-2xl">
                A
                <span className="inline-block pl-2">
                  <Typewriter
                    options={{
                      strings: ["Web Developer", "Student Community Leader"],
                      loop: true,
                      delay: 50,
                      autoStart: true,
                    }}
                  />
                </span>
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 md:gap-0">
              <div className="max-w-[450px] md:max-w-[350px] sm:max-w-[200px] w-full h-auto">
                <img
                  src={Pic}
                  alt="my pic"
                  className="rounded-full border-solid border-2 dark:border-white border-black object-contain w-full h-auto"
                />
              </div>
              <div className="socials pt-11">
                <ul className="flex gap-4">
                  <li className="dark:hover:text-accent2">
                    <a href="#">
                      <FaLinkedin className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6" />
                    </a>
                  </li>
                  <li className="dark:hover:text-accent2">
                    <a href="#">
                      <FaGithub className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6" />
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
