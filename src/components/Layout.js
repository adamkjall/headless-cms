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
      <div className="flex" data-scroll-container>
        <Navbar />
        <main className="flex-grow" data-scroll-section>
          <SmoothScrollProvider options={{ smooth: true }}>
            <BackgroundEffect />
            <div
              data-scroll
              data-scroll-speed="1"
              className="max-w-screen-lg mx-auto mb-auto pt-12 pb-32 px-4 z-10"
            >
              {children}
            </div>
          </SmoothScrollProvider>
        </main>
      </div>
      <Footer />
    </div>
  );
}
