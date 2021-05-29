export default function Hero() {
  return (
    <div className="h-screen flex items-center text-white " style={{ backgroundColor: "#111111" }}>
      <div className="flex flex-col animate-fadeIn pl-32">
        <h1
          //   data-scroll
          //   data-scroll-speed="5"
          className="text-3xl uppercase tracking-widest leading-tight -mb-8 text-gray-300"
        >
          Adam Kjäll
        </h1>
        <br />
        <h1
          //   data-scroll
          //   data-scroll-speed="6"
          className="text-7xl tracking-wider"
        >
          new WebDeveloper()
        </h1>
      </div>
    </div>
  );
}
