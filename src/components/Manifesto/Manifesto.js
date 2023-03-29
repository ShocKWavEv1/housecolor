import { Box, Heading, Show } from "@chakra-ui/react"
import { motion } from "framer-motion"
import React from "react"

const Manifesto = () => {
    return(
        <Box as="section" className="manifesto-mobile" padding={["70px 6% 50px 6%", "70px 6% 50px 6%", "70px 6% 50px 6%", "70px 6% 0px 6%"]} w="100%" display="flex" alignItems="flex-start" justifyContent="flex-start" flexDirection="column">
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    ease: "easeInOut",
                    duration: 1
                }}
            >
                <Heading variant={["H6BOLD", "H5BOLD", "H5BOLD", "H5BOLD"]}>
                    Meet the housecolor manifesto
                </Heading>
            </motion.div>
        </Box>
    )
}

export default Manifesto