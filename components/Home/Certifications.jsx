import Image from "next/image";
import React from "react";
import { certifications } from "../../utils/constants";
import { HiOutlineExternalLink } from "react-icons/hi";

const Certifications = () => {
   return (
      <div className="w-[100%] shadow-md p-5 mt-10 bg-white rounded-md" id="certifications">
         <h1 className="font-semibold text-lg mb-4">Certifications</h1>
         {certifications.map((cert) => (
            <div key={cert.id} className="flex space-x-4 mb-5">
               <div>
                  <Image
                     src="/assets/lco.png"
                     width="40px"
                     height="40px"
                     alt="learn_code_online"
                  />
               </div>
               <div className="flex flex-col">
                  <span>{cert.title}</span>
                  <span className="text-sm text-darkOverlay">
                     {cert.organization}
                  </span>
                  <span className="text-sm text-darkOverlay">
                     Issued {cert.issued}
                  </span>
                  <span className="text-sm text-darkOverlay">
                     Credential Id {cert.credId}
                  </span>
                  <a
                     href={cert.credUrl}
                     target="blank"
                     className="px-3 py-1 border-[1px] border-darkOverlay rounded-full w-max mt-4 flex items-center hover:bg-overlay"
                  >
                     <p className="mr-2"> Show Credential</p>
                     <HiOutlineExternalLink />
                  </a>
               </div>
            </div>
         ))}
      </div>
   );
};

export default Certifications;
