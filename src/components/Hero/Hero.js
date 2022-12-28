import { Box, Heading } from "@chakra-ui/react"
import React from "react"
import { TfiAngleDoubleDown } from "react-icons/tfi"

const Hero = () => {
    return(
        <Box padding={["0 6% 0 6%", "0px 6% 0 6%", "0 6% 0 6%", "0 6% 0 6%"]} w="100%" h="100vh" position="absolute" zIndex={1} display="flex" alignItems="flex-start" justifyContent="center" flexDirection="column" >
            <Box w="100%" h="100%" mt="20px" display="flex" alignItems="flex-start" justifyContent="center" flexDirection="column">
                <Heading mt={["60px", "60px", "100px", "100px"]} variant={["H6BOLD", "H6BOLD", "H5BOLD", "H4BOLD"]}>
                    We are a full post production studio for films, television, commercial and advertising.
                </Heading>
                <Heading variant={["H6BOLD", "H6BOLD", "H5BOLD", "H4BOLD"]}>
                    Located in México, CDMX.
                </Heading>
            </Box>
            <Box w="100%" pb="20px" display="flex" alignItems="center" justifyContent="center" >
                <Box className="bounce2" cursor="pointer" >
                    <TfiAngleDoubleDown fontSize="40px" color="rgba(255, 255, 255, .3)" />
                </Box>
            </Box>
        </Box>
    )
}

export default Hero