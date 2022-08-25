import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
import { TiHome } from "react-icons/ti";
import { MdWeb, MdAlternateEmail } from "react-icons/md";
import { BsBriefcaseFill } from "react-icons/bs";
import { useWindowScroll } from "../../utils/hooks";
import { useRouter } from "next/router";
import Link from "next/link";
import { searchTabs } from "../../utils/constants";

const Navbar = () => {
   const windowScroll = useWindowScroll();
   const router = useRouter();
   const [search, setSearch] = useState("");

   const scroll2El = (elID) => {
      window.scrollTo({
         top: document.getElementById(elID).offsetTop - 60,
         behavior: "smooth",
      });
   };

   useEffect(() => {
      let attach = true;
      if (attach) {
         if (search.match("certifications")) {
            scroll2El("certifications");
         }
      }
   }, [search]);

   return (
      <nav
         className={`bg-white ${
            windowScroll < 600 && "shadow-md"
         } sticky top-0 z-20 border-b-[1px] border-b-overlay`}
      >
         <div className="p-2 bg-white w-[75%] mx-auto flex items-center justify-between">
            <div className="flex items-center w-1/2">
               <Image
                  src="/assets/linkedin_icon.png"
                  width="35px"
                  height="35px"
                  alt="main__icon"
               />
               <div className="bg-overlay flex p-2 rounded-md mx-5 items-center w-[55%] relative">
                  <GoSearch />
                  <input
                     type="text"
                     placeholder="Search"
                     className="bg-transparent outline-none mx-2"
                  />
                  
               </div>
            </div>
            <div>
               <ul className="flex space-x-10 text-darkOverlay">
                  <Link href="/">
                     <li
                        className={`navbar__list__item ${
                           router.pathname === "/" && "text-black"
                        }`}
                     >
                        <TiHome size="25px" />
                        <span>Home</span>
                     </li>
                  </Link>
                  <Link href="/connect">
                     <li
                        className={`navbar__list__item ${
                           router.pathname === "/connect" && "text-black"
                        }`}
                     >
                        <MdAlternateEmail size="25px" />
                        <span>Connect</span>
                     </li>
                  </Link>
                  <Link href="/projects">
                     <li
                        className={`navbar__list__item ${
                           router.pathname === "/projects" && "text-black"
                        }`}
                     >
                        <MdWeb size="25px" />
                        <span>Projects</span>
                     </li>
                  </Link>
                  <Link href="/experience">
                     <li
                        className={`navbar__list__item ${
                           router.pathname === "/experience" && "text-black"
                        }`}
                     >
                        <BsBriefcaseFill size="25px" />
                        <span>Experience</span>
                     </li>
                  </Link>
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
