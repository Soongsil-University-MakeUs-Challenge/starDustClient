import ContextStore from "../Context/contextApi";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ContextStore>
      <Component {...pageProps} />
    </ContextStore>
  );
}

export default MyApp;
