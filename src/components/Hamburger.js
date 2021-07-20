import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useRef} from "react";
import {useRouter} from "next/router"





const Hamburger = ({isOpen, setIsOpen}) => {
    const router = useRouter()
    const cancelButtonRef = useRef();

    function closeModal() {
      setIsOpen(false);
    }
  
    function openModal() {
      setIsOpen(true);
    }
  
    return (
      <>
      <div className="inset-0 col-start-5 col-end-5 place-self-end">
        <button
          aria-label="open menu"
          type="button"
          onClick={openModal}
          className="mr-16  py-2 text-xl"
        >
         <span className="iconify text-5xl text-white fixed  z-30" data-icon="cil-hamburger-menu" data-inline="false"></span>
        </button>
      </div>
        <Transition show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            initialFocus={cancelButtonRef}
            static
            open={isOpen}
            onClose={closeModal}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0" />
              </Transition.Child>
  
              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-start"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="absolute left-0 top-0 right-0 inline-block w-7/12 h-screen overflow-hidden text-left transition-all transform bg-gray-600 shadow-xl">
                  <div className="grid place-content-end">
                    <button
                      aria-label="close menu"
                      type="button"
                      className="inline-flex justify-end px-4 py-2  font-bold text-white bg-gray-600 border border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={() => {
                          closeModal()
                      }}
                    >
                    <span className="iconify text-4xl font-bold" data-icon="codicon-chrome-close" data-inline="false"></span>
                    </button>
                  </div>
                  <nav className="flex flex-col md:fixed md:overscroll-x-none md:h-full w-full md:w-1/6 z-10 px-4 md:bg-black">
                  <h1 className="mt-4 font-varela text-2xl text-center text-white">Michael</h1>
            <h1 className="font-varela text-2xl text-center text-white mb-3">Bergerson</h1>
          <a href="#home" className="font-varela text-3xl md:text-3xl lg:text-4xl text-white lg:ml-4 md:ml-1">Home</a>
          <a href="/data/MichaelBergerson-Resume.pdf" className="font-varela text-3xl md:text-3xl lg:text-4xl text-white lg:ml-4 md:ml-1">Resume</a>
          <a href="#about" className="font-varela text-3xl md:text-3xl lg:text-4xl text-white lg:ml-4 md:ml-1">About</a>
          <a href="#skills" className="font-varela text-3xl md:text-3xl lg:text-4xl text-white lg:ml-4 md:ml-1">Skills</a>
          <a href="#projects" className="font-varela text-3xl md:text-3xl lg:text-4xl text-white lg:ml-4 md:ml-1">Projects</a>
          <a href="#contact" className="font-varela text-3xl md:text-3xl lg:text-4xl text-white lg:ml-4 md:ml-1">Contact</a>
          <div className="flex mt-4 lg:ml-2 md:mt-4 lg:mt-5">
          <a href="https://www.linkedin.com/in/michaelbergerson/"><span className="iconify mr-3 md:mr-2 lg:mr-2  text-3xl md:text-2xl lg:text-4xl text-white" data-icon="brandico-linkedin-rect" data-inline="false"></span></a>
          <a href="https://github.com/anxietyattacked"><span className="iconify mr-3 md:mr-2 lg:mr-2 text-3xl text-white" data-icon="akar-icons:github-fill" data-inline="false"></span></a>
  
          <a href="mailto:michaelbergerson@gmail.com"><span class="iconify mr-3 text-3xl text-white" data-icon="ant-design:mail-outlined" data-inline="false"></span></a>
          </div>
        </nav>
                  
  
                  
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </>
    );
}
export default Hamburger