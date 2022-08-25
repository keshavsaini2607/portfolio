import { useLayoutEffect, useState, useEffect } from "react";

export function useWindowSize() {
   const [size, setSize] = useState([0, 0]);
   useLayoutEffect(() => {
      function updateSize() {
         setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
   }, []);
   return size;
}

export function useWindowScroll() {
   const [scrollPosition, setScrollPosition] = useState(0);
   const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
   };

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);
   return scrollPosition;
}
