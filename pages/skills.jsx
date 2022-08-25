import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";
import ProfileNav from "../components/Navbar/ProfileNav";
import { skills as skillset } from "../utils/constants";

const skills = () => {
   return (
      <div>
         <Navbar />
         <ProfileNav />
         <div className="w-[70%] bg-white mx-auto p-4 mt-5 rounded-md shadow-sm">
            <div className="flex items-center space-x-3">
               <Link href="/"><span className="text-2xl cursor-pointer"> {"<"} </span></Link>
               <h1 className="text-xl font-semibold">Skills</h1>
            </div>
            {skillset.map((skill) => (
               <div
                  key={skill}
                  className="w-[100%] px-5 py-4 border-b-2 border-b-overlay"
               >
                  <span className="text-lg font-semibold pb-2  w-[100%]">
                     {skill}
                  </span>
               </div>
            ))}
         </div>
      </div>
   );
};

export default skills;
