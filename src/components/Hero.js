import React from "react";
import Hamburger from "../components/Hamburger";
import { Link } from "next/link";

const Hero = ({ isOpen, setIsOpen, isMobile }) => {
  return (
    <section
      id="home"
      className="bg-hero-pattern h-screen w-full bg-bottom bg-no-repeat"
    >
      <div className="grid grid-cols-5 place-content-end">
        {isMobile ? (
          <Hamburger
            className=""
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isMobile={isMobile}
          />
        ) : null}
      </div>

      <div className="mt-24 ml-5  md:ml-8 grid place-content-center px-8 md:px-16">
        <h2 className="font-roboto col-span-10 text-white text-2xl md:text-3xl">
          Hello, I am{" "}
        </h2>
        <h2 className="font-roboto col-span-10 mb-3 text-white text-3xl md:text-4xl">
          Michael Bergerson
        </h2>
        <h2 className="col-span-10  font-varela text-5xl  lg:text-6xl font-bold text-grad p-0 m-0 ">
          Full Stack
        </h2>
        <h2 className="col-span-10  font-varela text-5xl  lg:text-6xl  font-bold text-grad p-0 m-0 ">
          Web Developer
        </h2>
        {/* <h2 className="font-roboto col-span-6 md:col-span-5 text-white text-3xl">test</h2> */}

        <a
          href="#projects"
          className="col-span-10 sm:col-span-5 lg:col-span-4 xl:col-span-4 md:ml-8 lg:ml-12 mt-8 px-6 py-3 bg-black font-varela text-center text-white border-grad text-xl md:text-2xl w-full"
        >
          View Projects
        </a>

        <div className="col-span-3"></div>
      </div>
    </section>
  );
};

export default Hero;
