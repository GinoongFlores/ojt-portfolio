import { Label, TextInput, Textarea } from "flowbite-react";
import { Button } from "flowbite-react";

const Contact = () => {
  return (
    <>
      <section
        className="dark:bg-primary dark:text-white text-black bg-lightPrimary"
        id="contact"
      >
        <div className="container mx-auto py-14 px-4 md:px-40">
          <div className="mb-12">
            <h1 className="text-xl">Contact</h1>
            <hr className="w-14 bg-gray-100 border-1 rounded dark:bg-gray-700"></hr>
          </div>
          <form
            action="https://formsubmit.co/florespaul161@gmail.com"
            method="post"
            className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-28 items-center md:items-start"
          >
            {/* name */}
            <div className="input-wrapper flex flex-col gap-4">
              <div className="mb-2 block">
                <Label
                  htmlFor="name"
                  value="Name"
                  className="text-xl text-1xl"
                ></Label>

                <TextInput
                  id="email"
                  type="text"
                  placeholder="Juan Doe"
                  sizing="md"
                  className="w-full"
                  required
                />
              </div>
              {/* email */}
              <div className="mb-2 block">
                <Label
                  htmlFor="email"
                  value="Email"
                  className="text-xl text-1xl"
                ></Label>
                <TextInput
                  id="email"
                  type="email"
                  name="email"
                  placeholder="doe@gmail.com"
                  sizing="md"
                  size={8}
                  className="w-full"
                  required
                />
              </div>
            </div>
            {/* message */}
            <div className="wrapper flex flex-col items-center gap-4 ">
              <Textarea
                id="message"
                placeholder="your message..."
                name="message"
                required
                className="w-full"
                rows={8}
              />
              <button
                className="dark:bg-accent dark:hover:bg-primary dark:text-white rounded-md bg-lightAccent  text-black p-3"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
