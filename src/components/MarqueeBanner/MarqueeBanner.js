import { Box, Heading } from "@chakra-ui/react"
import { motion } from "framer-motion"
import React from "react"

const banner = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
};

const letterAni = {
    initial: { y: 400 },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
};

const marqueeVariants = {
    animate: {
      x: [0, -1035],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 5,
          ease: "linear",
        },
      },
    },
  };

const MarqueeBanner = ({ title, playMarquee }) => {
    return(
        <div>
        <div className="marquee">
          <motion.div
            className="track"
            variants={marqueeVariants}
            animate="animate"
          >
            <h1 id="clients">
              Let's Work Together. Let's Work Together. Let's Work Together. Let's
              Work Together. Let's Work Together. Let's Work Together. Let's Work
              Together
            </h1>
          </motion.div>
        </div>
      </div>
    )
}

export default MarqueeBanner