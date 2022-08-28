import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { TiHome } from "react-icons/ti";
import { MdWeb, MdAlternateEmail } from "react-icons/md";
import { BsBriefcaseFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Navbar = () => {
   let Links = [
      { name: "Home", link: "/" },
      // { name: "Connect", link: "/connect", Icon: TiHome },
      { name: "Projects", link: "/projects" },
      { name: "Experience", link: "/experience" },
   ];
   let [open, setOpen] = useState(false);
   const router = useRouter();

   const icon = (name) => {
      if (name == "Home") {
         return <TiHome size="25px" />;
      } else if (name == "Connect") return <MdAlternateEmail size="25px" />;
      else if (name == "Projects") return <MdWeb size="25px" />;
      else if (name == "Experience") return <BsBriefcaseFill size="25px" />;
   };

   const isActiveNav = (name) => {
      let path = router.pathname;
      console.log(path.slice(1,))
      if(path === "/") return "home";
      else return path.slice(1,);
   }

   return (
      <div className="shadow-md w-full sticky top-0 left-0 z-20  bg-white">
         <div className="md:flex items-center justify-between md:w-[75%] md:mx-auto py-2 px-7 md:px-0">
            <div
               className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
            >
               <span className="text-3xl text-indigo-600 mr-1 pt-2">
                  <ion-icon name="logo-ionic"></ion-icon>
               </span>
               Portfolio
            </div>

            <div
               onClick={() => setOpen(!open)}
               className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden"
            >
               {open ? (
                  <AiOutlineClose size="25px" className="cursor-pointer" />
               ) : (
                  <HiMenuAlt3 size="25px" className="cursor-pointer" />
               )}
            </div>

            <ul
               className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white z-50 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                  open ? "top-10 " : "top-[-490px]" 
               }`}
            >
               {Links.map((link) => (
                  <Link key={link.name} href={link.link}>
                     <li
                        className={`md:ml-8 text-xs md:my-0 my-7 cursor-pointer flex space-x-5 md:items-center md:space-x-0  md:flex-col items-center  hover:text-gray-900 ${
                           isActiveNav(link.name) === link.name.toLocaleLowerCase()
                              ? "text-gray-900"
                              : "text-gray-500"
                        } duration-500`}
                     >
                        {icon(link.name)}
                        <p className=" ">{link.name}</p>
                     </li>
                  </Link>
               ))}
            </ul>
         </div>
      </div>
   );
};

export default Navbar;
