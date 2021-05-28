import React from 'react'
import Hamburger from "../components/Hamburger"

const Hero = ({isOpen, setIsOpen, isMobile}) => {
    return (
        <div className=" bg-hero-pattern h-screen bg-no-repeat bg-cover ">
        <div className="grid grid-cols-5 col-span-5">
          {isMobile ? <Hamburger className="col-start-4 col-end-5"  isOpen={isOpen} setIsOpen={setIsOpen} isMobile={isMobile}/> : null}
        </div>
          <div className="ml-5 md:ml-8 grid grid-cols-10 px-4 md:px-16">
            <h2 className=" col-span-10 text-white text-4xl">Michael Bergerson</h2>
            <h2 className="col-span-9 md:col-span-7 lg:col-span-9 font-varela text-5xl sm:text-6xl md:text-6xl lg:text-9xl font-bold text-grad p-0 m-0 ">Web Developer</h2>
            <h2 className="col-span-6 md:col-span-5 text-white text-3xl">test</h2>
          <div className="col-span-3"></div>
        </div>
     
          
      </div>
    )
}

export default Hero
