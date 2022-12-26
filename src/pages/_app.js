import { ChakraProvider } from '@chakra-ui/react'
import '../../styles/globals.css'
import { Loader } from 'components/Loader/Loader';
import Layout from 'container/Layout';
import LoadingBar from "react-top-loading-bar";
import { useEffect, useRef, useState } from 'react';
import Fonts from 'theme/fonts'
import Meta from 'utils/Meta';
import { motion } from 'framer-motion';
import theme from '../theme'

const variants = {
  hidden: { opacity: 0, x: -10, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -10 },
}

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
        <motion.main
          key={router.route}
          variants={variants} // Pass the variant object into Framer Motion 
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ type: 'linear' }} // Set the transition to linear
          className=""
        >
          <Component {...pageProps}  />
        </motion.main>
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
