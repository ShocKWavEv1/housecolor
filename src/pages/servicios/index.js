import { Box, useColorMode } from "@chakra-ui/react"
import Hero from "components/Hero/Hero";
import Sketch from "components/Sketch/Sketch";
import { SmoothScrollProvider } from "context/SmoothScroll";
import React from "react"
import { smoothScrollOptions } from "utils/smoothScrollOptions";

const Services = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return(
        <SmoothScrollProvider options={smoothScrollOptions}>
            <Box w="100%" bg={colorMode === 'dark' ? 'black' : 'secondaryWhite'} h="auto" minH="100vh" display="flex" alignItems="flex-start" justifyContent="flex-start" flexDirection="column">
                <Sketch gradientGL="14ec6a,14ec6a,22228b,0e003f,fd0200" />
                <Hero />
            </Box>
        </SmoothScrollProvider>
    )
} 

export default Services