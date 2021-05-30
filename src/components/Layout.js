import Head from "next/head";
import Navbar from "@components/Navbar";
import Footer from "@components/footer/Footer";
import BackgroundEffect from "@components/backgroundEffect";

import { SmoothScrollProvider } from "@contexts/SmoothScroll.context";

export default function Layout({ children }) {
  return (
    // old bg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
    <SmoothScrollProvider options={{ smooth: true }}>
      <div className="relative flex flex-col min-h-screen w-full ">
        <Head>
          <title>Adam Kjäll - portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div data-scroll-container className="flex" id="container">
          <Navbar />
          <main className="flex-grow">
            <BackgroundEffect />
            <div className="mx-auto mb-auto pb-32 z-10">
              {children}
            </div>
            <Footer />
          </main>
        </div>
      </div>
    </SmoothScrollProvider>
  );
}
