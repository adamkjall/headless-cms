import Layout from "@components/Layout";
import "prismjs/themes/prism-tomorrow.css";

import "@styles/index.css";

function Application({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default Application;
