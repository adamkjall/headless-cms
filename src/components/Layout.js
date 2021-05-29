import Head from "next/head";
import Navbar from "@components/Navbar";
import Footer from "@components/footer/Footer";
import BackgroundEffect from "@components/backgroundEffect";

import { SmoothScrollProvider } from "@contexts/SmoothScroll.context";

export default function Layout({ children }) {
  return (
    // old bg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
    <div className="relative flex flex-col min-h-screen w-full ">
      <Head>
        <title>Adam Kjäll - portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex" id="container">
        <Navbar />
        <main data-scroll-container className="flex-grow">
          <SmoothScrollProvider options={{ smooth: true }}>
            <BackgroundEffect />
            <div className="mx-auto mb-auto pb-32 z-10">
              {children}
            </div>
            <Footer />
          </SmoothScrollProvider>
        </main>
      </div>
    </div>
  );
}
