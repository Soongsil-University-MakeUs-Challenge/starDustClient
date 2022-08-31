import ContextStore from "../Contexts/contextApi";
import Script from 'next/script'
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ContextStore>
      <Script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=1664a34e52ea5802af4d289cbdeef3ed&libraries=services,clusterer&autoload=false"
    strategy="beforeInteractive"/>
      <Component {...pageProps} />
    </ContextStore>
  );
}

export default MyApp;
