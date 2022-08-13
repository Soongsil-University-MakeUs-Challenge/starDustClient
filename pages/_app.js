import ContextStore from "../Contexts/contextApi";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ContextStore>
      <Component {...pageProps} />
    </ContextStore>
  );
}

export default MyApp;
