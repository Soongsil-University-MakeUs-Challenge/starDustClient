import ContextStore from "../Contexts/contextApi";
import Script from 'next/script'
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ContextStore>
      <Component {...pageProps} />
    </ContextStore>
  );
}

export default MyApp;

