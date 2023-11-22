import Container from "@/app/_components/_container/Container";
import HeadingSubheading from "@/app/_components/_headingSubHeading/HeadingSubheading";
import React from "react";

const Contact = () => {
  return (
    <div>
      <Container>
        <div className="flex justify-center text-center mt-10 w-full">
          <HeadingSubheading
            heading={"Feel free to contact"}
            sebHeading={"contact us"}
          />
        </div>
        <div className="py-[50px]">
          <form className="max-w-md mx-auto">
            {/* Name input */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-main-ash"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name..."
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-main-green"
              />
            </div>

            {/* Email input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-main-ash"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email..."
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-main-green"
              />
            </div>

            {/* Message textarea */}
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-main-ash"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message..."
                name="message"
                rows="4"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-main-green"
              ></textarea>
            </div>

            {/* Submit button */}
            <div className="mb-6">
              <button
                type="submit"
                className="py-2 px-4 bg-main-green text-white rounded-md focus:outline-none hover:bg-opacity-80"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
