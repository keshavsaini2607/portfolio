import Image from "next/image";
import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import Navbar from "../components/Navbar";
import ProfileNav from "../components/Navbar/ProfileNav";
import { projects } from "../utils/constants";

const Projects = () => {
   return (
      <div>
         <Navbar />
         <ProfileNav />
         <div className="w-[70%] mx-auto bg-white p-4 mt-10 rounded">
            <h1 className="text-xl font-bold">Projects</h1>
            {projects.map((project) => (
               <div key={project.id} className="mt-10">
                  <div className=" w-[100%]">
                     <Image
                        src={project.image}
                        height="200px"
                        width="400px"
                        alt="project_1"
                        className="border-[2px] shadow-md border-darkOverlay rounded-sm"
                     />
                  </div>
                  <div>
                     <div className="flex items-center">
                        <h1 className="text-lg font-semibold mr-2">
                           {project.title}
                        </h1>
                        <a href={project.link} target="blank">
                           <HiOutlineExternalLink className="cursor-pointer" />
                        </a>
                     </div>
                     <p className="text-sm text-darkOverlay">
                        {project.description}
                     </p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Projects;
