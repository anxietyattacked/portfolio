import React from 'react'

const About = () => {
    return (
      
        <section id="about" className="pb-20 bg-gray-100 py-8 px-8 md:px-16 py-4 grid md:grid-cols-2">
          <h1 className="text-4xl font-bold font-varela mb-6 md:col-span-2">About</h1>
          <div className="md:col-span-2 mb-4">
            <p className="text-xl border-grad bg-black text-white py-8 px-4 md:px-8 lg:px-16 rounded-2xl">My name is Michael Bergerson. I am a frontend web developer with a passion for learning from Olympia, WA. I graduated from Oregon State University with a B.S. in Economics.  My programing journey started after college while I was a family caregiver to my grandmother. Programing became a creative outlet for me. If you can think it, you can build it.Im a frontend developer with a  passion for learning. My programing journey started after college while I was a family caregiver to my grandmother. Programing became a creative outlet for me. If you can think it, you can build it. That’s what I love about programing.   </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-3 place-content-center mt-8">
            <h1 className="font-varela text-4xl font-bold col-span-3 mb-8">Hobbies</h1>
            <div className="grid place-content-center">
            <span className="iconify text-center text-4xl md:text-6xl ml-7 md:ml-4 mb-1 text-pink-400" data-icon="fa-solid:brain" data-inline="false"></span>
            <p className="text-center">Neuroscience</p>
            </div>
            <div className="grid place-content-center">
            <span className="iconify text-center text-4xl md:text-6xl ml-3 md:ml-1 text-yellow-300" data-icon="fluent:emoji-laugh-16-filled" data-inline="false"></span>
            <p className="text-center">Comedy</p>
            </div>
            <div className="grid place-content-center">
            <span className="iconify text-center text-4xl md:text-6xl text-red-500" data-icon="map:art-gallery" data-inline="false"></span>
            <p className="text-center">Art</p>
            </div>
            
           
          </div>
        </section>
    )
}

export default About
