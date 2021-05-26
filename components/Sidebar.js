import React, {useState} from 'react'
import Link from "next/link"
import Hamburger from './Hamburger';



const Sidebar = () => {




    return (
        <nav className="flex md:flex-col md:fixed md:overscroll-x-none md:h-full w-full md:w-1/6 z-10 px-4 md:bg-black">
          <Link href="/"><a className="font-varela sm:text-2xl md:text-3xl lg:text-4xl text-white lg:ml-4 md:ml-1">Home</a></Link>
          <Link href="/"><a className="font-varela sm:text-2xl md:text-3xl lg:text-4xl text-white lg:ml-4 md:ml-1">Resume</a></Link>
          <Link href="/"><a className="font-varela sm:text-2xl md:text-3xl lg:text-4xl text-white lg:ml-4 md:ml-1">Contact</a></Link>
          <div className="flex justify-center spacing-x-8 lg:ml-2 md:mt-4 lg:mt-5">
          <a href="https://www.linkedin.com/in/michael-bergerson-375036108/"><span className="iconify md:mr-2 lg:mr-2  sm:text-2xl md:text-2xl lg:text-4xl text-white" data-icon="brandico-linkedin-rect" data-inline="false"></span></a>
          <a href="https://github.com/anxietyattacked"><span className="iconify md:mr-2 lg:mr-2 sm:text-2xl md:text-2xl lg:text-4xl text-white" data-icon="akar-icons:github-fill" data-inline="false"></span></a>
          <button>
          <span className="iconify  lg:text-4xl md:text-2xl sm:text-2xl text-white" data-icon="ant-design:mail-outlined" data-inline="false"></span>
          </button>
          </div>
        </nav>
    )
}

export default Sidebar
