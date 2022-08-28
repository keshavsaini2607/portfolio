import Image from "next/image";
import Link from "next/link";
import React from "react";
import { projects } from "../../utils/constants";
import { HiOutlineExternalLink } from "react-icons/hi";

const Sidebar = () => {
   return (
      <div className="bg-white w-[100%] h-[100%] rounded-md shadow-md p-4">
         <h1 className="font-semibold text-lg mb-2">My Projects</h1>
         {projects.map((project) => (
            <div key={project.id}>
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
                     <h1 className="text-sm font-semibold mr-2">{project.title}</h1>
                     <a href={project.link} target="blank"><HiOutlineExternalLink className="cursor-pointer" /></a>
                  </div>
                  <p className="text-sm text-darkOverlay">
                     {project.description}
                  </p>
               </div>
            </div>
         ))}
         <Link href="/projects">
            <div className="absolute bottom-3 left-[19%] cursor-pointer">
               <p className="text-sm font-bold border-b-[1px] border-b-darkOverlay">
                  Explore all of my projects
               </p>
            </div>
         </Link>
      </div>
   );
};

export default Sidebar;
