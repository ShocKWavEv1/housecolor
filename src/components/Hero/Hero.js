import { Box, Heading } from "@chakra-ui/react"
import { motion } from "framer-motion"
import React from "react"
import { TfiAngleDoubleDown } from "react-icons/tfi"

const Hero = () => {
    return(
        <Box as="section" padding={["0 6% 0 6%", "0px 6% 0 6%", "0 6% 0 6%", "0 6% 0 6%"]} w="100%" h={["100vh", "100vh", "120vh", "100vh"]} position="absolute" zIndex={1} display="flex" alignItems="flex-start" justifyContent="center" flexDirection="column" >
            <Box w="100%" h="100%" mt="20px" display="flex" alignItems="flex-start" justifyContent="center" flexDirection="column">
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        ease: "easeInOut",
                        duration: 1,
                    }}
                >
                    <Heading data-scroll data-scroll-position="top" data-scroll-speed="4" mt={["60px", "120px", "100px", "110px"]} variant={["H6MEDIUM", "H5BOLD", "H4BOLD", "H3BOLD"]}>
                        We are a full post production studio for films, television, commercial and advertising.
                    </Heading>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        ease: "easeInOut",
                        duration: 1,
                    }}
                >
                    <Heading data-scroll data-scroll-position="top" data-scroll-speed="3" variant={["H6BOLD", "H5BOLD", "H4BOLD", "H3BOLD"]}>
                        Located in México, CDMX.
                    </Heading>
                </motion.div>
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