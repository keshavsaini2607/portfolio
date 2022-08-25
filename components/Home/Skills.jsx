import React from "react";
import { skills } from "../../utils/constants";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const Skills = () => {
   return (
      <div className="w-[100%] shadow-md p-5 mt-10 bg-white rounded-md">
         <h1 className="text-lg font-semibold mb-4">Skills</h1>
         {skills.slice(0, 4).map((skill) => (
            <div
               key={skill}
               className="w-[100%] p-2 border-b-2 border-b-overlay"
            >
               <span className="text-lg font-semibold pb-2  w-[100%] text-darkOverlay">
                  {skill}
               </span>
            </div>
         ))}
         <Link href="/skills">
            <p className="mt-3 font-bold text-darkOverlay cursor-pointer flex items-center justify-center">
               <span className="mr-2">Show all {skills.length} skills</span>
               <BsArrowRight />
            </p>
         </Link>
      </div>
   );
};

export default Skills;
