import React, { useRef } from "react";
import { Box, useColorMode } from '@chakra-ui/react';
import Navigation from "components/Navigation/Navigation";
import Footer from "components/Footer/Footer";
import ContactBanner from "components/ContactBanner/ContactBanner";

import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useRouter } from "next/router";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

const Layout = ({children}) => {
    const { colorMode, toggleColorMode } = useColorMode()

    const containerRef = useRef(null);

    const { asPath } = useRouter();

    return(
        <LocomotiveScrollProvider
            options={{
                smooth: true,
                multiplier: 1
            // ... all available Locomotive Scroll instance options
            }}
            watch={
                [
                    asPath
                //..all the dependencies you want to watch to update the scroll.
                //  Basicaly, you would want to watch page/location changes
                //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
                ]
            }
            location={asPath}
            onLocationChange={(scroll) => {scroll.scrollTo(0, { duration: 0, disableLerp: true })}}
            containerRef={containerRef}
        >
            <div data-scroll-container ref={containerRef}>
                <Box w="100%" h="auto" bg={colorMode === 'dark' ? 'black' : 'secondaryWhite'} position="relative" zIndex={0}>
                    <Box position="absolute" w="100%" zIndex={2} padding={["30px 6% 0 6%", "30px 6% 0 6%", "30px 4% 0 4%", "30px 3% 0 3%"]}>
                        <Navigation />
                    </Box>
                    <Box w="100%" h="auto">
                        {children}
                    </Box>
                    <Box>
                        <ContactBanner />
                        <Footer />
                    </Box>
                </Box>
            </div>
        </LocomotiveScrollProvider>
    )
}

export default Layout;
