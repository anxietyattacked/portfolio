import React from 'react'

const Skills = () => {
    return (
        <div className=" grid grid-cols-5 bg-gray-200 py-4 px-8 md:px-16">
        <h1 className="col-span-5 font-varela font-bold text-4xl mb-8">Skills</h1>
        <div className="col-span-5 grid grid-cols-3 md:grid-cols-4 gap-8 place-content-center place-items-center border-grad py-8">
          <div className="">
          <span className="iconify text-5xl md:text-6xl ml-3 md:ml-2" data-icon="grommet-icons:js" data-inline="false"></span>
          <p>Javascript</p>
          </div>
          <div className="">
          <span className="iconify text-5xl md:text-6xl ml-3 md:ml-2" data-icon="logos:typescript-icon" data-inline="false"></span>
          <p>Typescript</p>
          </div>
          <div className="">
          <span className="iconify text-5xl md:text-6xl" data-icon="logos:react" data-inline="false"></span>
          <p className="ml-2 md:ml-3">React</p>
          </div>
          <div className="">
          <span className="iconify text-5xl md:text-6xl ml-1 md:ml-0" data-icon="logos:html-5" data-inline="false"></span>
          <p>HTML</p>
          </div>
          <div className="">
          <span className="iconify text-5xl md:text-6xl" data-icon="logos:css-3" data-inline="false"></span>
          <p className="md:ml-1">CSS</p>
          </div>
          <div className="">
          <span className="iconify text-5xl md:text-6xl ml-2" data-icon="vscode-icons:file-type-tailwind" data-inline="false"></span>
          <p>Tailwind</p>
          </div>
          <div className="">
          <span className="iconify text-5xl md:text-6xl" data-icon="logos:git-icon" data-inline="false"></span>
          <p className="ml-3 md:ml-5">Git</p>
          </div>
          <div className="">
          <span className="iconify text-5xl md:text-6xl" data-icon="logos:d3" data-inline="false"></span>
          <p className="ml-3 md:ml-5">D3</p>
          </div>
          <div className="">
          <span className="iconify text-5xl md:text-6xl" data-icon="logos:nodejs" data-inline="false"></span>
          <p className="ml-5 md:ml-7">node</p>
          </div>
          <div className="">
          <span className="iconify text-lg md:text-xl mb-8" data-icon="logos:express" data-inline="false"></span>
          <p>Express</p>
          </div>
          <div className="">
          <span className="iconify text-5xl md:text-6xl ml-2 md:ml-1" data-icon="logos:graphql" data-inline="false"></span>
          <p>Graphql</p>
          </div>
          <div className="">
          <span className="iconify text-5xl md:text-6xl ml-3 md:ml-2" data-icon="logos:postgresql" data-inline="false"></span>
          <p>Postgresql</p>
          </div>


        </div>
   
      </div>
    )
}

export default Skills
