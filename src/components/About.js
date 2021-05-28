import React from 'react'

const About = () => {
    return (
      
        <div className="pb-20 bg-gray-100 py-8 px-8 md:px-16 py-4 grid md:grid-cols-2">
          <h1 className="text-4xl font-bold font-varela mb-6 md:col-span-2">About</h1>
          <div className="md:col-span-2 mb-4">
            <p className="text-xl border-grad bg-black text-white py-8 px-16 rounded-2xl">My name is Michael Bergerson. I am a frontend web developer from Olympia, WA. I graduated from Oregon State University with a B.S. in economics. My coding journey began with python but I saw a few things like D3 that made me want to pick up javascript.  </p>
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
        </div>
    )
}

export default About
