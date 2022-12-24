import { Box, Button, Heading, Text } from "@chakra-ui/react"
import React from "react"
import { TfiAngleDoubleDown } from "react-icons/tfi"

const Hero = () => {
    return(
        <Box padding={["5% 4% 0 4%", "5% 4% 0 4%", "0 4% 0 4%", "0 6% 0 6%"]} w="100%" h="100vh" position="absolute" zIndex={1} display="flex" alignItems="flex-start" justifyContent="center" flexDirection="column" >
            <Box w="100%" h="100%" display="flex" alignItems="flex-start" justifyContent="center" flexDirection="column">
                <Heading mt="100px" variant={["H4MEDIUM", "H5MEDIUM", "H4MEDIUM", "H4BOLD"]}>
                    We build digital products that drive business models and keep people engaged
                </Heading>
            </Box>
            <Box w="100%" pb="20px" display="flex" alignItems="center" justifyContent="center" >
                <Box cursor="pointer" >
                    <TfiAngleDoubleDown fontSize="40px" color="rgba(255, 255, 255, .3)" />
                </Box>
            </Box>
        </Box>
    )
}

export default Hero