import Image from "next/image";
import React from "react";
import { GoSearch } from "react-icons/go";
import {TiHome} from "react-icons/ti";
import {MdWeb, MdAlternateEmail} from "react-icons/md";
import {BsBriefcaseFill} from "react-icons/bs";
import { useWindowScroll } from "../../utils/hooks";

const Navbar = () => {
   const windowScroll = useWindowScroll();

   return (
      <nav className={`bg-white ${windowScroll < 600 && 'shadow-md'} sticky top-0 z-20 border-b-[1px] border-b-overlay`}>
         <div className="p-2 bg-white w-[75%] mx-auto flex items-center justify-between">
            <div className="flex items-center w-1/2">
               <Image
                  src="/assets/linkedin_icon.png"
                  width="35px"
                  height="35px"
                  alt="main__icon"
               />
               <div className="bg-overlay flex p-2 rounded-md mx-5 items-center w-[55%]">
                  <GoSearch />
                  <input type="text" placeholder="Search" className="bg-transparent outline-none mx-2" />
               </div>
            </div>
            <div>
                <ul className="flex space-x-10 text-darkOverlay">
                    <li className="navbar__list__item">
                        <TiHome size="25px" />
                        <span>Home</span>
                    </li>
                    <li className="navbar__list__item">
                        <MdAlternateEmail size="25px" />
                        <span>Connect</span>
                    </li>
                    <li className="navbar__list__item">
                        <MdWeb size="25px" />
                        <span>Projects</span>
                    </li>
                    <li className="navbar__list__item">
                        <BsBriefcaseFill size="25px" />
                        <span>Experience</span>
                    </li>
                </ul>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
