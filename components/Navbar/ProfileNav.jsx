import Image from "next/image";
import React from "react";

const ProfileNav = () => {
   return (
      <div
         className={`bg-white shadow-lg sticky transition-all duration-500 ease-in top-10 z-10 md:top-14`}
      >
         <div className="px-7 md:px-0 md:w-[75%] mx-auto p-2 flex items-center">
            <div className="flex items-center space-x-3">
               <Image
                  src="/assets/photo.jpeg"
                  height="30px"
                  width="30px"
                  alt="profile"
                  className="rounded-full object-contain bg-darkOverlay"
               />
               <div className="flex flex-col">
                  <span className="text-sm font-bold">Keshav Saini</span>
                  <span className="text-sm">
                     Frontend / Mobile App Developer
                  </span>
               </div>
            </div>
            <div></div>
         </div>
      </div>
   );
};

export default ProfileNav;
