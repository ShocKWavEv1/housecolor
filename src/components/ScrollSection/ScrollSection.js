import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MANIFESTO } from "components/Manifesto/consts";
import { Box, Grid, GridItem, Heading, Show, Text } from "@chakra-ui/react";
import { motion } from "framer-motion"
import Manifesto from "components/Manifesto/Manifesto";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-400vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {/* A return function for killing the animation on component unmount */ }
      pin.kill();
    };
  }, []);

  return (
    <>
        <section className="scroll-section-outer">
            <div className="manifesto-mobile" >
                <Manifesto />
            </div>
            <div ref={triggerRef}>
                <div className="scroll-manifesto-title" >
                    <Manifesto />
                </div>
                <Box ref={sectionRef} className="scroll-section-inner">
                    {
                        MANIFESTO.map((item, i) => {
                            return(
                                <div key={i} className="scroll-section">
                                    <Box p={["0px 6%", "0px 6%", "0px 6%", "0px 80px"]} w="100%" h="auto">
                                        <Grid w="100%" h="100%" templateColumns='repeat(12, 2fr)' gap={4} >
                                            <GridItem w="100%" colSpan={[12, 12, 12, 6]} h='100%' bg="red" display="flex" alignItems="flex-start" justifyContent="flex-start">
                                                <Box w="100%" h="100%" display="flex" alignItems={["flex-start", "flex-start", "center", "center"]} justifyContent="center">
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 80 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{
                                                            ease: "easeInOut",
                                                            duration: 0.5,
                                                        }}
                                                        style={{ width: "100%" }}
                                                    >
                                                        <Box w="100%" h={["300px", "300px", "400px", "500px"]} bg="white">
                                                            h
                                                        </Box>
                                                    </motion.div>
                                                </Box>
                                            </GridItem>
                                            <GridItem colSpan={[12, 12, 12, 6]} h='100%'>
                                                <Box w="100%" h="100%" p="40px" display="flex" alignItems="flex-start" justifyContent="center" flexDirection="column">
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 80 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{
                                                            ease: "easeInOut",
                                                            duration: 1,
                                                        }}
                                                    >
                                                        <Heading variant={["H6BOLD", "H6BOLD", "H5BOLD", "H5BOLD"]}>
                                                            {item.title}
                                                        </Heading>
                                                    </motion.div>
                                                    <Box pt="20px">
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 80 }}
                                                            whileInView={{ opacity: 1, y: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{
                                                                ease: "easeInOut",
                                                                duration: 1.2,
                                                            }}
                                                        >
                                                            <Text variant={["SMMEDIUM", "SMMEDIUM", "MDMEDIUM", "MDMEDIUM"]}>
                                                                {item.desc}
                                                            </Text>
                                                        </motion.div>
                                                    </Box>
                                                </Box>
                                            </GridItem>
                                        </Grid>
                                    </Box>
                                </div>
                            )
                        })
                    }
                </Box>
            </div>
        </section>
    </>
  );
}

export default ScrollSection;