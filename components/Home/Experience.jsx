import Image from "next/image";
import React from "react";
import { experience } from "../../utils/constants";
import { HiOutlineExternalLink } from "react-icons/hi";

const Experience = () => {
   return (
      <div className="w-[100%] shadow-md p-5 mt-10 bg-white rounded-md">
         <h1 className="text-lg font-semibold mb-4">Experience</h1>
         {experience.map((exp, index) => (
            <div key={exp.id} className="flex space-x-3 mb-4">
               <div className="w-[10%]">
                  <Image
                     src={exp.logo}
                     height="40px"
                     width="40px"
                     alt={exp.companyName}
                  />
               </div>
               <div className="w-[90%]">
                  <div className="flex flex-col">
                     <div className="flex items-center">
                        <span className="text-[1.1rem] font-bold mr-2">
                           {exp.companyName}
                        </span>
                        <a href={exp.link} target="blank">
                           <HiOutlineExternalLink className="cursor-pointer" />
                        </a>
                     </div>
                  </div>
                  <div
                     className={`mt-4 flex flex-col ${
                        index + 1 !== experience.length && "border-b-[1px]"
                     } pb-2`}
                  >
                     <span className="font-bold">{exp.jobTilte}</span>
                     <span className="text-sm">{exp.empType}</span>
                     <span className="text-sm text-darkOverlay">
                        {exp.duration}
                     </span>
                     <span className="text-sm mt-4">{exp.description}</span>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
};

export default Experience;
