import { Carousel } from "flowbite-react";

const About = () => {
  const images = [
    {
      src: "gdsc-sticdo-speaker.jpg",
      alt: "test",
    },
    {
      src: "campus-experts-2.jpg",
      alt: "test",
    },
    {
      src: "gdsc-sticdo.jpg",
      alt: "test",
    },
    {
      src: "test1.jpg",
      alt: "speaking",
    },
  ];
  return (
    <>
      <section
        className="dark:bg-secondary dark:text-white text-black bg-slate-200 pb-24"
        id="about"
      >
        <div className="container mx-auto py-4 md:py-14 px-10 md:px-40">
          <div className="mb-12"></div>

          <div className="grid grid-rows-1 md:grid-cols-2">
            <div className="text-container self-center pr-36">
              <div className="mb-10">
                <h1 className="text-xl">About</h1>
                <hr className="w-14 bg-gray-100 border-1 rounded dark:bg-gray-700"></hr>
              </div>
              <p className="text-1xl text-justify leading-relaxed">
                My breakthrough began as a student community leader at a tech
                organization called GDSC STI CDO and GitHub Campus Expert, where
                I continuously aimed to increase technological awareness in the
                student community. Yet, I realized there is a need to provide
                web services to businesses and professionals using my nurtured
                and continuous learning in web development.
              </p>
            </div>

            {/* 
            this is a padding-top trick to make the carousel responsive
            */}
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
              <Carousel slideInterval={3000}>
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={`/img/community/${image.src}`}
                    alt={image.alt}
                    className="object-cover w-full h-full"
                  />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
