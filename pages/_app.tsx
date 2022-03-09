//import { useEffect } from "react";
import { AppProps } from "next/app";
//import { useRouter } from "next/router";
import "../styles/globals.css";
import { Header } from "../components/layout/header/header";

let gtag: any;
const App = ({ Component, pageProps }: AppProps) => {
  /*const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);*/

  return <>
    <Header/>
    <Component {...pageProps} />;
  </>
};

export default App;
