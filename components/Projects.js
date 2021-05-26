import React from 'react'
import {projectData} from "../data/projectInfo"

const Projects = () => {
    return (
        <div className="grid gap-3 bg-gray-100 px-8 md:px-16 py-8">
        <h1 className="font-varela font-bold text-4xl mb-5">Projects</h1>
        {projectData.map(project => (
            <div key={project.name} className="grid md:grid-cols-5 justify-center mb-2">
         
            <h2 className="font-varela font-bold text-3xl mb-2 md:col-span-5">{project.name}</h2>
          <div className="relative overflow-hidden h-0 p3 col-span-1 md:col-span-5 lg:col-span-3">
                <img className="absolute top-0 left-0 w-full h-full" src={project.image} alt={`${project.name} screenshot`} />
            </div>
            <div className="md:col-span-5 lg:col-span-2 grid md:grid-cols-4 place-content-center">
            <p className="md:col-span-4 mx-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptate corrupti reiciendis sunt, corporis ipsam aut aspernatur soluta labore doloribus illum in! Iure animi nisi nemo, alias debitis tempore inventore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea libero ipsa debitis, 
            consectetur veniam quaerat perspiciatis itaque temporibus iure pariatur fugiat, culpa neque nobis nostrum earum cupiditate, nesciunt excepturi incidunt!</p>
            {project.name === "SneakerFlex" ? <p></p> : null}
            <div className="md:col-span-4 flex justify-center mt-8">
              <div className="">
              <a className="px-3 py-2 bg-hero rounded-full text-white text-center font-bold text-lg mr-4" href={project.Link}>Go to Website</a>
              </div>
              <div className="col-span-2">
              <a className="px-3 py-2 bg-hero-alt rounded-full text-white text-center font-bold text-lg" href={project.ghLink}>Go to Github</a>
              </div>
           </div>
           <div className="md:col-span-4 mt-8">
             <p className="text-center"><strong>Frontend: </strong>{project.tech}</p>
             {project.techB ? <p className="text-center"><strong>Backend: </strong>{project.techB}</p>: null}
           </div>
            </div>
          </div>
            ))}
        
      </div>

    )
}

export default Projects
