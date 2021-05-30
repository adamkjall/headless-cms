export default function Hero() {
  return (
    <div className="h-screen mb-4 flex items-center text-white " style={{ backgroundColor: "#111111" }}>
      <div className="flex flex-col animate-fadeIn pl-8 lg:pl-32 ">
        <h1
          //   data-scroll
          //   data-scroll-speed="5"
          className="text-2xl lg:text-4xl uppercase tracking-widest leading-tight -mb-8 text-gray-300"
        >
          Adam Kjäll
        </h1>
        <br />
        <h1
          //   data-scroll
          //   data-scroll-speed="6"
          className="text-4xl lg:text-7xl tracking-wider"
        >
          new WebDeveloper()
        </h1>
      </div>
    </div>
  );
}
