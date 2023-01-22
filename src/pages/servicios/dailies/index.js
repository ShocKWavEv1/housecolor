import { Box, Heading } from "@chakra-ui/react"
import ServicesGrid from "components/ServicesGrid/ServicesGrid"
import { SmoothScrollProvider } from "context/SmoothScroll"
import React from "react"
import { smoothScrollOptions } from "utils/smoothScrollOptions"

const Dailies = () => {
    return(
        <SmoothScrollProvider options={smoothScrollOptions}>
            <Box w="100%" h="100vh" display="flex" alignItems="center" justifyContent="center" >
                <Heading variant="H5MEDIUM" >
                    Hi Dailies
                </Heading>
            </Box>
            <ServicesGrid />
        </SmoothScrollProvider>
    )
} 

export default Dailies