import { Box, Heading } from "@chakra-ui/react"
import { SmoothScrollProvider } from "context/SmoothScroll"
import React from "react"
import { smoothScrollOptions } from "utils/smoothScrollOptions"

const Grading = () => {
    return(
        <SmoothScrollProvider options={smoothScrollOptions}>
            <Box w="100%" h="100vh" display="flex" alignItems="center" justifyContent="center" >
                <Heading variant="H5MEDIUM" >
                    Hi Grading
                </Heading>
            </Box>
        </SmoothScrollProvider>
    )
} 

export default Grading