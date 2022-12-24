import { Box } from "@chakra-ui/react"
import React from "react"
import PropTypes from "prop-types";

const Sketch = ({ gradientGL }) => {
    return(
        <Box w="100%" h="100vh" position="relative" zIndex={0}>
            <iframe src={`https://gradient-gl.vercel.app/?gl=${gradientGL}`} width="100%" height="100%" loading="lazy" />
        </Box>
    )
}

export default Sketch

Sketch.PropTypes = {
    gradientGL: PropTypes.string.isRequired,
};