import React from "react";
import Navbar from "../components/Navbar";
import ProfileNav from "../components/Navbar/ProfileNav";
import Experienc from "../components/Home/Experience";

const Experience = () => {
   return (
      <div>
         <Navbar />
         <ProfileNav />
         <div className="w-[60%] mx-auto">
            <Experienc />
         </div>
      </div>
   );
};

export default Experience;
