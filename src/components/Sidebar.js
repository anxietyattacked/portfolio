import React, {useState} from 'react'
import Hamburger from './Hamburger';
import Image from "next/image"



const Sidebar = () => {




    return (
        <nav className="flex md:flex-col md:fixed md:overscroll-x-none md:h-full w-full md:w-1/5 z-10 px-4 md:bg-gray-600">
           

            <h1 className="mt-4 font-varela md:text-2xl text-center text-white">Michael</h1>
            <h1 className="font-varela md:text-2xl text-center text-white">Bergerson</h1>
            <div className="grid place-content-center">
            <Image className="" src="/images/Frame2.svg" width="200" height="200"></Image>
            </div>
         <a href="#home" className="font-varela sm:text-2xl md:text-2xl lg:text-4xl text-white mt-1 lg:ml-2 xl:ml-4 md:ml-1">Home</a>
          <a href="/data/MichaelBergerson-Resume.pdf" className="font-varela sm:text-2xl md:text-2xl lg:text-4xl text-white llg:ml-2 xl:ml-4  md:ml-1">Resume</a>
          <a href="#about"  className="font-varela sm:text-2xl md:text-2xl lg:text-4xl text-white lg:ml-2 xl:ml-4 md:ml-1">About</a>
          <a href="#skills"  className="font-varela sm:text-2xl md:text-2xl lg:text-4xl text-white lg:ml-2 xl:ml-4 md:ml-1">Skills</a>
          <a href="#projects"  className="font-varela sm:text-2xl md:text-2xl lg:text-4xl text-white lg:ml-2 xl:ml-4 md:ml-1">Projects</a>
          <a href="#contact"  className="font-varela sm:text-2xl md:text-2xl lg:text-4xl text-white lg:ml-2 xl:ml-4 md:ml-1">Contact</a>
          <div className="flex justify-center spacing-x-8 lg:ml-2 md:mt-4 lg:mt-5">
          <a href="https://www.linkedin.com/in/michaelbergerson"><span className="iconify md:mr-2 lg:mr-2  sm:text-2xl md:text-2xl lg:text-4xl text-white" data-icon="brandico-linkedin-rect" data-inline="false"></span></a>
          <a href="https://github.com/anxietyattacked"><span className="iconify md:mr-2 lg:mr-2 sm:text-2xl md:text-2xl lg:text-4xl text-white" data-icon="akar-icons:github-fill" data-inline="false"></span></a>
          <a href="mailto:michaelbergerson@gmail.com"><span className="iconify lg:text-4xl md:text-2xl sm:text-2xl text-white" data-icon="ant-design:mail-outlined" data-inline="false"></span></a>
     
          </div>
        </nav>
    )
}

export default Sidebar
