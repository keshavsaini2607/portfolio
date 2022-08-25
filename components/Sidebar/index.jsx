import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
   return (
      <div className="bg-white w-[100%] h-[100%] rounded-md shadow-md p-4">
         <h1 className="font-semibold text-lg">My Projects</h1>
         <div>
            <div className=" w-[100%]">
               <Image
                  src="/assets/paytm.png"
                  height="200px"
                  width="400px"
                  alt="project_1"
                  className="border-[2px] shadow-md border-darkOverlay"
               />
            </div>
            <div>
               <h1 className="text-sm font-semibold">Paytm Ui Clone</h1>
               <p className="text-sm text-darkOverlay">
                  Fully responsive paytm website clone
               </p>
               <p className="text-sm text-darkOverlay">Tech Used:</p>
               <ul className="text-sm text-darkOverlay">
                  <li className="list-disc mx-10">Html</li>
                  <li className="list-disc mx-10">Tailwind</li>
               </ul>
            </div>
         </div>
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
