import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BsBriefcaseFill } from "react-icons/bs";
import { MdAlternateEmail, MdWeb } from "react-icons/md";
import { TiHome } from "react-icons/ti";

const MobileSidebar = ({ show, setShow }) => {
   const router = useRouter();
   return (
      <div
         className={`top-0 right-0  bg-darkOverlay  p-10 pl-5 pr-32 text-white fixed h-full sm:w-[100%] md:w-[60vw] ${
            show ? "block": 'hidden'
         }`}
      >
         <div className="pt-10">
            <ul className="flex flex-col text-overlay">
               <Link href="/">
                  <li
                     className={`flex pt-4 ${
                        router.pathname === "/" && "text-black"
                     }`}
                  >
                     <TiHome size="25px" />
                     <span className="ml-4">Home</span>
                  </li>
               </Link>
               <Link href="/connect">
                  <li
                     className={`flex pt-4 ${
                        router.pathname === "/connect" && "text-black"
                     }`}
                  >
                     <MdAlternateEmail size="25px" />
                     <span className="ml-4">Connect</span>
                  </li>
               </Link>
               <Link href="/projects">
                  <li
                     className={`flex pt-4 ${
                        router.pathname === "/projects" && "text-black"
                     }`}
                  >
                     <MdWeb size="25px" />
                     <span className="ml-4">Projects</span>
                  </li>
               </Link>
               <Link href="/experience">
                  <li
                     className={`flex pt-4 ${
                        router.pathname === "/experience" && "text-black"
                     }`}
                  >
                     <BsBriefcaseFill size="25px" />
                     <span className="ml-4">Experience</span>
                  </li>
               </Link>
            </ul>
         </div>
      </div>
   );
};

export default MobileSidebar;
