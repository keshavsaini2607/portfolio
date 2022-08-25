import React from "react";
import { education } from "../../utils/constants";
import { IoSchoolSharp } from "react-icons/io";

const Education = () => {
   return (
      <div className="w-[100%] shadow-md p-5 mt-10 bg-white rounded-md">
         <h1 className="text-lg font-semibold mb-4">Education</h1>
         {education.map((edu) => (
            <div key={edu.id} className="flex items-center space-x-3 mb-4">
               <div className="w-[40px] bg-darkOverlay h-[40px]">
                  
               </div>
               <div className="w-[90%] flex flex-col">
                  <span>{edu.instiName}</span>
                  <span className="text-sm text-darkOverlay">{edu.course}</span>
                  <span className="text-sm text-darkOverlay">
                     {edu.duration}
                  </span>
               </div>
            </div>
         ))}
      </div>
   );
};

export default Education;
