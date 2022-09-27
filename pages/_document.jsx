import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/dist/client/script";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
  render() {
    const kakaoMapKey = process.env.NEXT_PUBLIC_KAKAO_MAP_KEY;
    return (
      <Html lang="ko">
        <Head />
        <script
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=1664a34e52ea5802af4d289cbdeef3ed&libraries=services&autoload=false`}
          defer
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
