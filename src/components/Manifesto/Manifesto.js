import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react"
import SmoothScroll from "components/SmoothScroll/SmoothScroll"
import { motion } from "framer-motion"
import React from "react"

const Manifesto = () => {

    const manifesto = [
        {
            title: '01. Challenge the ordinary',
            desc: 'We are creative people that dare to do things differently. We think critically about tech, the industries we work with, and our society, and look for uncharted paths to have a positive impact.'
        },
        {
            title: '02. Stay curious, stay ahead',
            desc: 'We are forward thinkers that like to experiment with current and emerging technologies. We explore what’s to come in business and tech and uncover what will stay relevant.'
        },
        {
            title: '03. Grow together',
            desc: 'Opportunities and challenges are both shared here, and when those arise, we tap on each others strengths to succeed through collaboration. We learn from each other and help each other learn.'
        },
        {
            title: '04. Lift each other’s voice',
            desc: 'We work daily on creating a space where we all feel listened to. We’ve adopted communication routines that encourage the team to share their feedback on projects, internal processes and operations, and anything else.'
        },
        {
            title: '05. Enjoy the ride',
            desc: 'We love to have fun with what we do! The office is where we get to share and follow our passion for tech, design, and for making great new products happen.'
        },
    ]

    return(
        <Box as="section" data-scroll-container data-bgcolor="#bcb8ad" padding={["70px 6% 70px 6%", "70px 6% 70px 6%", "70px 6% 70px 6%", "70px 6% 70px 6%"]} w="100%" display="flex" alignItems="flex-start" justifyContent="flex-start" flexDirection="column">
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
            <Box data-scroll-direction="horizontal" data-scroll-speed="6" >
                {
                    manifesto.map((item, i) => {
                        return(
                            <Box key={i} mt="100px" p="0px 80px" w="100%" h="auto">
                                <Grid w="100%" h="100%" templateColumns='repeat(12, 2fr)' gap={4} >
                                    <GridItem w="100%" colSpan={[12, 12, 4, 6]} h='100%'>
                                        <Box w="100%" h="100%" display="flex" alignItems="center" justifyContent="center">
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
                                                <Box w="100%" h="380px" bg="white">
                                                    h
                                                </Box>
                                            </motion.div>
                                        </Box>
                                    </GridItem>
                                    <GridItem colSpan={[12, 12, 8, 6]} h='100%'>
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
                                                <Heading variant="H6BOLD" data-scroll data-scroll-speed="1.5" >
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
                                                    <Text variant="SMMEDIUM" data-scroll data-scroll-speed="1">
                                                        {item.desc}
                                                    </Text>
                                                </motion.div>
                                            </Box>
                                        </Box>
                                    </GridItem>
                                </Grid>
                            </Box>
                        )
                    })
                }
            </Box>
        </Box>
    )
}

export default Manifesto