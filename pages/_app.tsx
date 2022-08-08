import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "./redux";
import { Header } from "./components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="container-header">
        <Header />
      </div>
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default wrapper.withRedux(MyApp);
