import { Box, useColorMode } from "@chakra-ui/react"
import Hero from "components/Hero/Hero";
import Sketch from "components/Sketch/Sketch";
import React from "react"

const Services = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return(
        <Box w="100%" bg={colorMode === 'dark' ? 'black' : 'secondaryWhite'} h="auto" minH="100vh" display="flex" alignItems="flex-start" justifyContent="flex-start" flexDirection="column">
            <Sketch gradientGL="14ec6a,14ec6a,22228b,0e003f,fd0200" />
            <Hero />
        </Box>
    )
} 

export default Services