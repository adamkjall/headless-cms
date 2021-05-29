import styles from "./Footer.module.css";

import Clouds from "../../../public/cloudy.svg";

{
  /* <div className>
              <BackgroundEffect />
            </div> */
}

export default function Footer() {
  return (
    <footer
      className={`${styles.footer} relative text-white flex w-full`}
    >
      <Clouds
        className="absolute bottom-0 left-0 w-full z-0 pointer-events-none"
      />
      <div className="flex z-10">
        Made with{" "}
        <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} />{" "}
        for you
      </div>
    </footer>
  );
}
