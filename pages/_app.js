import "../styles/globals.css";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32_fingerprint.png"
        />
        {/* https://github.com/facebook/react/issues/20829 */}
        <script>
          {" "}
          if (!crossOriginIsolated) SharedArrayBuffer = ArrayBuffer{" "}
        </script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
