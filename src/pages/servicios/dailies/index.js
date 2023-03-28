import { Box, Heading } from "@chakra-ui/react"
import ServicesGrid from "components/ServicesGrid/ServicesGrid"
import React from "react"

const Dailies = () => {
    return(
        <Box>
            <Box w="100%" h="100vh" display="flex" alignItems="center" justifyContent="center" >
                <Heading variant="H5MEDIUM" >
                    Hi Dailies
                </Heading>
            </Box>
            <ServicesGrid />
        </Box>
    )
} 

export default Dailies