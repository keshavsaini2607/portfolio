import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
   return (
      <div className="bg-overlay pb-10">
         <Component {...pageProps} />
      </div>
   );
}

export default MyApp;
