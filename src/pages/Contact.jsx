import { Label, TextInput, Textarea } from "flowbite-react";

const Contact = () => {
  return (
    <>
      <section
        className="dark:bg-primary dark:text-white text-black bg-lightPrimary py-20"
        id="contact"
      >
        <div className="container mx-auto py-14 px-4 md:px-40">
          <div className="mb-12">
            <h1 className="text-xl">Contact</h1>
            <hr className="w-14 border-1 rounded border-accent dark:border-lightPrimary"></hr>
          </div>
          <form
            action="https://formsubmit.co/florespaul161@gmail.com"
            method="post"
            className="flex flex-col lg:grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {/* name */}
            <div className="name&email">
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
                  required
                />
              </div>
            </div>

            {/* message */}
            <div className="textArea flex flex-col gap-4 items-center justify-center">
              <Textarea
                id="message"
                placeholder="your message..."
                name="message"
                required
                className="w-full md:w-[460px]"
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
