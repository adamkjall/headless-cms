import { useEffect } from "react";
import Head from "next/head";
import Navbar from "@components/Navbar";
import Footer from "@components/footer/Footer";
import BackgroundEffect from "@components/backgroundEffect";

//import Prism from "Prismjs";

export default function Layout({ children }) {
  useEffect(() => {
    // Prism.highlightAll();
  }, []);

  return (
    // old bg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
    <div className="relative flex flex-col min-h-screen w-full ">
      <Head>
        <title>Adam Kjäll - portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackgroundEffect />
      <Navbar />
      <main className="max-w-screen-md mx-auto mb-auto pt-12 pb-32 px-4 z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
