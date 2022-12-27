import { Box } from "@chakra-ui/react"
import React from "react"
import propTypes from "prop-types";

const Sketch = ({ gradientGL, serviceGrid }) => {
    return(
        <Box w="100%" h={serviceGrid === true ? "50vh" : "100vh"} position="relative" zIndex={0}>
            <iframe src={`https://gradient-gl.vercel.app/?gl=${gradientGL}`} width="100%" height="100%" loading="lazy" />
        </Box>
    )
}

export default Sketch

Sketch.propTypes = {
    gradientGL: propTypes.string.isRequired,
    serviceGrid: propTypes.bool
};