import Clouds from "../../../public/cloudy.svg";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer
      className={`relative flex justify-center items-center text-white w-full pb-20 -mt-4`} style={{ backgroundColor: "#111111" }}
    >
      <Clouds
        className="absolute bottom-full left-0 w-full z-0 pointer-events-none"
      />
      <div className="flex z-10">
        Made with{" "}
        <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} />{" "}
        for you
      </div>
    </footer>
  );
}
