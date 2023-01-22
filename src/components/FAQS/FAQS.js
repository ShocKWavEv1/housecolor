import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import React, { useState } from "react"

const FAQS = () => {
    const [expanded, setExpanded] = useState(false);

    const accordionIds = [0, 1, 2, 3];

    return(
        <Box as="section" padding={["70px 6% 70px 6%", "70px 6% 70px 6%", "70px 6% 70px 6%", "100px 6% 100px 6%"]} w="100%" display="flex" alignItems="flex-start" justifyContent="flex-start" flexDirection="column">
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
                    Frequently Asked Questions
                </Heading>
            </motion.div>
            <Box w="100%" mt="50px">
                <Grid w="100%" h="100%" templateColumns='repeat(12, 2fr)'>
                    <GridItem colSpan={[12, 12, 6, 6]} h='100%'>
                        <Box w="100%" h="100%" bg="red" >

                        </Box>
                    </GridItem>
                    <GridItem colSpan={[12, 12, 6, 6]} h='100%'>
                        <Box w="100%" h="auto">
                            <Accordion allowToggle>
                                <AccordionItem>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            <Text variant="LGMEDIUM" >
                                                01. ¿Qué tipo de proyectos pueden hacer?
                                            </Text>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Box>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    )
}

export default FAQS