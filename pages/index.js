import Head from "next/head";
import AboutMe from "../components/Home/AboutMe";
import Certifications from "../components/Home/Certifications";
import Education from "../components/Home/Education";
import Experience from "../components/Home/Experience";
import ProfileView from "../components/Home/ProfileView";
import Skills from "../components/Home/Skills";
import Navbar from "../components/Navbar";
import ProfileNav from "../components/Navbar/ProfileNav";
import Sidebar from "../components/Sidebar";
import { useWindowScroll } from "../utils/hooks";
import Laguages from "../components/Home/Languages";

export default function Home() {
   const windowScroll = useWindowScroll();

   return (
      <div>
         <Head>
            <title>Portfolio: Keshav Saini</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main>
            <Navbar />
            {windowScroll > 600 && <ProfileNav />}
            <div className="main__home flex flex-col justify-center items-center mt-10 lg:flex-row lg:justify-between lg:items-start lg:w-[75%] lg:mx-auto">
               <div className="home__left w-[90%] lg:w-[70%]">
                  <ProfileView />
                  <AboutMe />
                  <Experience />
                  <Education />
                  <Certifications />
                  <Skills />
                  <Laguages />
               </div>
               <div
                  className={`hidden home__right w-[27%] h-[70vh] sticky lg:block  ${
                     windowScroll > 35 ? "top-32" : "top-10"
                  }`}
               >
                  <Sidebar />
               </div>
            </div>
         </main>
      </div>
   );
}
