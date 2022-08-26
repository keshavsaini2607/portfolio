import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ProfileNav from "../components/Navbar/ProfileNav";
import { IoSend } from "react-icons/io";
import Image from "next/image";
import Layout from "../components/Layout";

const Connect = () => {
   const [messages, setMessages] = useState([]);
   const [newMessage, setNewMessage] = useState("");

   const saveMessage = () => {
      setMessages([...messages, newMessage]);
      setNewMessage("");
   };

   return (
      <Layout className="h-[94vh]">
         <div className="w-[50%] mx-auto mt-10">
            <div className="shadow-md rounded-t-md p-4 bg-white border-b-[1px] border-b-overlay">
               <p className="font-semibold">{"Let's Connect "}😃</p>
            </div>
            <div className="bg-white w-[100%] h-[60vh] overflow-y-scroll">
               {messages.map((msg, index) => (
                  <div
                     key={index}
                     className={`flex items-center py-3 ${
                        index + 1 !== messages.length &&
                        "border-b-[1px] border-b-overlay "
                     }`}
                  >
                     <Image
                        src="/assets/user_icon.png"
                        height="40px"
                        width="40px"
                        alt="user_image"
                     />
                     <p>{msg}</p>
                  </div>
               ))}
            </div>
            <form onSubmit={saveMessage}>
               <div className="relative">
                  <input
                     value={newMessage}
                     onChange={(e) => setNewMessage(e.target.value)}
                     placeholder="New Message"
                     className="w-[100%] p-3 border-t-[1px] border-t-overlay outline-darkOverlay rounded-b-md"
                  />
                  <button
                     className={`absolute right-2 top-[18%] ${
                        newMessage.length > 0 ? "bg-primary" : "bg-overlay"
                     }
                  px-4 py-1 rounded-full ${
                     newMessage.length < 1 ? "text-darkOverlay" : "text-white"
                  }
                  `}
                     disabled={newMessage.length < 1}
                     onClick={saveMessage}
                  >
                     Send
                  </button>
               </div>
            </form>
         </div>
      </Layout>
   );
};

export default Connect;
