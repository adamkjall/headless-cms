import { useEffect, useRef } from "react";
// import LocomotiveScroll from "locomotive-scroll";
import { SmoothScrollProvider } from "@contexts/SmoothScroll.context";
import Head from "next/head";
import Navbar from "@components/Navbar";
import Footer from "@components/footer/Footer";
import BackgroundEffect from "@components/backgroundEffect";

//import Prism from "Prismjs";

export default function Layout({ children }) {
  // const scrollRef = useRef();

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //   });
  // }, []);
  // useEffect(() => {
  //   // Prism.highlightAll();
  // }, []);

  return (
    // old bg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
    <div className="relative flex flex-col min-h-screen w-full ">
      <Head>
        <title>Adam Kjäll - portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackgroundEffect />
      <div className="flex">
        <Navbar />
        <main className="flex-grow" data-scroll-container>
          <SmoothScrollProvider options={{ smooth: true }}>
            <div className="max-w-screen-lg mx-auto mb-auto pt-12 pb-32 px-4 z-10">
              {children}
            </div>
          </SmoothScrollProvider>
        </main>
      </div>
      <Footer />
    </div>
  );
}
