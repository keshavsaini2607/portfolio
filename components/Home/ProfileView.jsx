import Image from "next/image";
import React from "react";
import ProfileImage from "./ProfileImage";
import { FiMail } from "react-icons/fi";
import { BiDownload } from "react-icons/bi";

const ProfileView = () => {
   return (
      <div className="w-[100%] shadow-md pb-5 bg-white">
         <div className="relative">
            <div className="w-[100%] h-1/4 bg-background p-20 rounded-t-lg" />
            <ProfileImage />
         </div>
         <div className="mt-20 px-5">
            <div>
               <span className="text-xl font-semibold">Keshav Saini</span>
            </div>
            <div>Frontend / Mobile App Developer</div>
            <div className="text-sm text-darkOverlay">
               Alwar, Rajasthan, India
               <a
                  href="https://www.linkedin.com/in/keshav-saini-07285b172/"
                  target="blank"
               >
                  <span className="text-primary cursor-pointer">
                     {" "}
                     . Connect with me on Linkedin
                  </span>
               </a>
            </div>
         </div>
         <div className="cta px-5 mt-4 flex space-x-4">
            <button className="bg-primary text-white px-4 py-1 rounded-full hover:bg-blue-900 flex items-center">
               <FiMail />
               <span className="ml-2 text-md">Ping Me</span>
            </button>
            <button className="border-2 border-primary text-primary px-4 py-1 rounded-full flex items-center hover:bg-primary hover:text-white">
               <BiDownload />
               <span className="ml-2 text-md">Download Portfolio</span>
            </button>
         </div>
         <div className="bg-[#E8E4DE] p-5 w-[95%] mx-auto rounded-md mt-7 flex-col">
            <span className="text-md font-bold">Open to work</span>
            <div>
               <span className="text-sm">
                  Open for Web frontend developer, React Native & Ionic React
                  mobile app developer roles
               </span>
            </div>
            <span className="text-sm">
               Highly interested in learning new techologies
            </span>
         </div>
      </div>
   );
};

export default ProfileView;
