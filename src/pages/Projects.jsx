import { Button } from "flowbite-react";
// import CustomTabs from "../components/CustomTabs";
// import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import Fade from "@mui/material/Fade";
import { useState } from "react";

const Projects = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const schoolImg = [
    {
      src: "qr-code-attendance.png",
      title: "STI CDO CSG QR Code Attendance",
      alt: "STI CDO CSG QR Code Attendance",
      link: "https://csg-attendance-viewonly.web.app/",
    },
    {
      src: "dscsticdo-website.png",
      title: "GDSC STI CDO Website",
      alt: "GDSC STI CDO Website",
      link: "https://dscsticdo.github.io/",
    },
    {
      src: "panaghiusa-website.png",
      title: "Panaghiusa Website",
      alt: "Panaghiusa Website",
      link: "https://panaghiusa.netlify.app/",
    },
    {
      src: "ok1.png",
      title: "CLENRO CDO OK App Dashboard",
      alt: "CLENRO CDO OK App Dashboard",
    },
  ];

  const personalImg = [
    {
      src: "coffe-sample.png",
      title: "Hello Coffee Website",
      alt: "Hello Coffee",
    },
    {
      src: "old-portfolio.png",
      title: "Portfolio website v1",
      alt: "Old Portfolio Website",
    },
    {
      src: "scoreboard-scrimba.png",
      title: "Scoreboard Scrimba Project",
      alt: "Scrimba Scoreboard Project",
    },
    {
      src: "unitConverter-website.png",
      title: "Unit Converter Scrimba Project",
      alt: "Unit Converter Scrimba Project",
    },
  ];

  const openSourceImg = [
    {
      src: "candyCrush-website.png",
      title: "Candy Crush Game",
      alt: "test",
    },
    {
      src: "dscsticdo-website.png",
      title: "GDSC STI CDO Website",
      alt: "test",
    },
    {
      src: "panaghiusa-website.png",
      title: "Panaghiusa Website",
      alt: "test",
    },
    {
      src: "passwordGenerator-website.png",
      title: "Password Generator",
      alt: "Password Generator Website",
    },
  ];

  const schoolProjects = (
    <div
      className={`p-0 m-0 flex flex-col md:grid grid-cols-4 items-center transition-opacity duration-500`}
    >
      {schoolImg.map((image, index) => (
        <div className="h-fit group" key={index}>
          <div className="relative overflow-hidden">
            <img
              src={`/img/projects/${image.src}`}
              className="h-full max-w-full object-contain"
              key={index}
            />
            <div className="absolute h-full w-full bg-primary/80 flex flex-col gap-4 items-center justify-center -bottom-10 translate-y-8 group-hover:bottom-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <h1 className="text-white">{image.title}</h1>
              <Button className="bg-primary hover:bg-slate-600">
                <a
                  href={image.link ? image.link : "#"}
                  target={image.link ? "_blank" : "_self"} // if link is available, open in new tab, else open in same tab
                  rel="noreferrer"
                >
                  {image.link ? "View" : "Unavailable"}
                </a>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const personalProjects = (
    <div className="p-0 m-0 flex flex-col md:grid grid-cols-4 items-center">
      {personalImg.map((image, index) => (
        <div className="h-fit group" key={index}>
          <div className="relative overflow-hidden">
            <img
              src={`/img/projects/${image.src}`}
              className="h-auto max-w-full"
              key={index}
            />
            <div className="absolute h-full w-full bg-primary/80 flex flex-col gap-4 items-center justify-center -bottom-10 translate-y-8 group-hover:bottom-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <h1 className="text-white">{image.title}</h1>
              <Button className="bg-primary">View</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const openSourceProjects = (
    <div className="p-0 m-0 flex flex-col md:grid grid-cols-4 items-center">
      {openSourceImg.map((image, index) => (
        <div className="h-fit group" key={index}>
          <div className="relative overflow-hidden">
            <img
              src={`/img/projects/${image.src}`}
              className="h-auto max-w-full"
              key={index}
            />
            <div className="absolute h-full w-full bg-primary/80 flex flex-col gap-4 items-center justify-center -bottom-10 translate-y-8 group-hover:bottom-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <h1 className="text-white">{image?.title}</h1>
              <Button className="bg-primary">View</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <section
        className="dark:bg-accent2 dark:text-white text-black bg-lightAccent"
        id="projects"
      >
        {/* <div className="flex items-center justify-center h-[320px]">
          <a className="relative block w-1/4 bg-gray-900 group" href="#">
            <img
              className="absolute inset-0 object-cover w-full h-full group-hover:opacity-50"
              src="https://cdn.pixabay.com/photo/2021/10/30/08/07/desert-6753729__340.jpg"
              alt=""
            />
            <div className="relative p-2">
              <div className="mt-40">
                <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                  <div className="p-2">
                    <p className="text-sm text-white">
                      image hover in text using tailwind css
                    </p>
                    <button className="px-4 py-2 text-sm text-white bg-indigo-600">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div> */}
        <div className="container mb-12 mx-auto pt-14 px-40">
          <h1 className="text-xl">Projects</h1>
          <hr className="w-20 border-1 rounded border-accent dark:border-lightPrimary"></hr>
        </div>

        <div className="tabs">
          <TabContext value={String(value)}>
            <Tabs
              value={String(value)}
              onChange={handleChange}
              textColor="inherit"
              sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}
              centered
            >
              <Tab label="College" value={"0"} />
              <Tab label="Personal" value={"1"} />
              <Tab label="Open Source" value={"2"} />
            </Tabs>
            <TabPanel value="0" index={0} sx={{ padding: 0 }}>
              <Fade in={value === "0"} timeout={500}>
                <div>{schoolProjects}</div>
              </Fade>
            </TabPanel>
            <TabPanel value="1" index={1} sx={{ padding: 0 }}>
              <Fade in={value === "1"} timeout={500}>
                <div>{personalProjects}</div>
              </Fade>
            </TabPanel>
            <TabPanel value="2" index={2} sx={{ padding: 0 }}>
              <Fade in={value === "2"} timeout={500}>
                <div>{openSourceProjects}</div>
              </Fade>
            </TabPanel>
          </TabContext>
        </div>
      </section>
    </>
  );
};

export default Projects;
