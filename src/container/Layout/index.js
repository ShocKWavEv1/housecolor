import React from "react";
import { Box, useColorMode } from '@chakra-ui/react';
import Navigation from "components/Navigation/Navigation";
import Footer from "components/Footer/Footer";
import ContactBanner from "components/ContactBanner/ContactBanner";

const Layout = ({children}) => {
    const { colorMode, toggleColorMode } = useColorMode()

    return(
        <Box w="100%" h="auto" bg={colorMode === 'dark' ? 'black' : 'secondaryWhite'} position="relative" zIndex={0}>
            <Box position="absolute" w="100%" zIndex={2} padding={["5% 4% 0 4%", "5% 4% 0 4%", "3% 4% 0 4%", "30px 3% 0 3%"]}>
                <Navigation />
            </Box>
            <Box w="100%" h="auto">
                {children}
            </Box>
            <ContactBanner />
            <Footer />
        </Box>
    )
}

export default Layout;
