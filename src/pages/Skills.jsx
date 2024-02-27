import { Progress } from "flowbite-react";
import { Card } from "flowbite-react";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaFigma,
  FaBootstrap,
  FaGitAlt,
  FaReact,
  FaLaravel,
} from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const cardDeets = [
    {
      name: "HTML",
      status: "Proficiency",
      progress: 80,
      icon: <FaHtml5 className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />,
    },
    {
      name: "CSS",
      status: "Proficiency ",

      progress: 60,
      icon: <FaCss3Alt className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />,
    },
    {
      name: "JavaScript",
      status: "Proficiency ",

      progress: 60,
      icon: (
        <IoLogoJavascript className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
      ),
    },
    {
      name: "Sass",
      status: "Proficiency",

      progress: 30,
      icon: <FaSass className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />,
    },
    {
      name: "Figma",
      status: "Proficiency ",

      progress: 30,
      icon: <FaFigma className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />,
    },
    {
      name: "Bootstrap",
      status: "Proficiency",

      progress: 50,
      icon: <FaBootstrap className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />,
    },
    {
      name: "Git",
      status: "Proficiency",

      progress: 75,
      icon: <FaGitAlt className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />,
    },
    {
      name: "ReactJS",
      status: "Proficiency ",
      progress: 50,
      icon: <FaReact className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />,
    },
    {
      name: "TailwindCSS",
      status: "Proficiency ",
      progress: 40,
      icon: (
        <SiTailwindcss className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
      ),
    },
    {
      name: "Firebase",
      status: "Proficiency",
      progress: 50,
      icon: (
        <IoLogoFirebase className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
      ),
    },
    {
      name: "Laravel",
      status: "Proficiency",
      progress: 25,
      icon: <FaLaravel className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />,
    },
  ];
  return (
    <>
      <section
        className="dark:bg-accent2 dark:text-white text-black bg-lightAccent rounded-t-[50px] -mt-24 z-10 "
        id="skills"
      >
        <div className="container mx-auto py-4 md:py-14 px-10 md:px-40">
          <div className="text mb-12">
            <h1 className="text-xl">Skills</h1>
            <hr className="w-12 border-1 rounded border-accent dark:border-lightPrimary"></hr>
          </div>

          <div className="card-container flex flex-wrap gap-4 md:grid sm:grid-cols-2 lg:grid-cols-4 justify-center items-center">
            {cardDeets.map((data, index) => (
              <Card
                key={index}
                className="max-w-sm dark:bg-accent dark:text-white text-black bg-lightAccent border-none h-full"
              >
                <div className="flex flex-col md:flex-row justify-evenly items-center flex-shrink-0 gap-4">
                  <div>{data.icon}</div>
                  <div className="flex flex-col text-sm md:text-sm:text-left">
                    <h2 className="font-semibold">{data.name}</h2>
                    <p className="text-sm">{data.status}</p>
                    <Progress
                      progress={data.progress}
                      progressLabelPosition="inside"
                      textLabelPosition="outside"
                      size="lg"
                      labelProgress
                      className="bg-slate-500"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
