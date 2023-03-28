import { Box, useColorMode } from "@chakra-ui/react"
import Hero from "components/Hero/Hero";
import Sketch from "components/Sketch/Sketch";
import { SmoothScrollProvider } from "context/SmoothScroll";
import React from "react"
import { smoothScrollOptions } from "utils/smoothScrollOptions";

const Portafolio = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return(
        <Box w="100%" bg={colorMode === 'dark' ? 'black' : 'secondaryWhite'} h="auto" minH="100vh" display="flex" alignItems="flex-start" justifyContent="flex-start" flexDirection="column">
            <Sketch gradientGL="22228b,fd0200,22228b,0e003f,14ec6a" />
            <Hero />
        </Box>
    )
} 

export default Portafolio