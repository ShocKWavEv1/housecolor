import { ChakraProvider } from '@chakra-ui/react'
import { Loader } from 'components/Loader/Loader';
import { useEffect, useLayoutEffect, useState } from 'react';
import Fonts from 'theme/fonts'
import theme from '../theme'

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleTransitionEnd = () => {
    console.log("animation end!");
    const root = document.getElementById("__next");
    const loader = document.getElementById("loader");
    root?.removeChild(loader);
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <ChakraProvider theme={theme} >
      <Fonts />
      <Loader onTransitionEnd={handleTransitionEnd} isLoading={isLoading} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
