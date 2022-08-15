import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "./redux";
import { Header } from "./components/Header";
import "./font/stylesheet.css";
import "./font/playfairDisplay/stylesheet.css";
import Footer from "./components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="container-header">
        <Header />
      </div>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default wrapper.withRedux(MyApp);
