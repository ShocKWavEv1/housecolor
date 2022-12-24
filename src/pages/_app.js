import { ChakraProvider } from '@chakra-ui/react'
import { Loader } from 'components/Loader/Loader';
import Layout from 'container/Layout';
import LoadingBar from "react-top-loading-bar";
import { useEffect, useRef, useState } from 'react';
import Fonts from 'theme/fonts'
import Meta from 'utils/Meta';
import theme from '../theme'

function MyApp({ Component, pageProps, router }) {
  const [isLoading, setIsLoading] = useState(true);
  const LoadingBarRef = useRef(null);

  const handleTransitionEnd = () => {
    console.log("animation end!");
    const root = document.getElementById("__next");
    const loader = document.getElementById("loader");
    root?.removeChild(loader);
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
    // router event listeners for loadingBar
    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteComplete);
    router.events.on("routeChangeError", handleRouteError);
  
    return () => {
      // remove loadingBar event listeners
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteComplete);
      router.events.off("routeChangeError", handleRouteError);
    };
  }, []);

  const handleRouteComplete = (url) => {
    setTimeout(function () {
      LoadingBarRef.current.complete();
    }, 300);
  };

  const handleRouteStart = (url) => {
    LoadingBarRef.current.continuousStart();
  };

  const handleRouteError = (err, url) => {
    setTimeout(function () {
      if (err.cancelled) {
        // console.log(`${err} on route to ${url}`);
      }
      LoadingBarRef.current.complete();
    }, 300);
  };

  return (
    <ChakraProvider theme={theme} >
      <Fonts />
      <Meta title={"Housecolor | Construimos experiencias y productos digitales"} />
      <LoadingBar
          ref={LoadingBarRef}
          height={8}
          color="#4F26E9"
        />
      <Loader onTransitionEnd={handleTransitionEnd} isLoading={isLoading} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
