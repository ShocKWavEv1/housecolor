import { Box, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Text } from "@chakra-ui/react"
import React, { useState } from "react"
import { FiPlay } from "react-icons/fi"
import { motion } from 'framer-motion'
import ReactPlayer from "react-player"

const Reel = ({ handleReel }) => {
    const [isReel, setReel] = useState(false)

    return(
        <Box as="section" padding={["70px 6% 70px 6%", "70px 6% 70px 6%", "70px 6% 70px 6%", "0px 6% 100px 6%"]} w="100%" display="flex" alignItems="flex-start" justifyContent="flex-start" flexDirection="column">
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    ease: "easeInOut",
                    duration: 1
                 }}
                style={{ width: "100%" }}
            >
                <Box mt="0px" w="100%" h="90vh" bg="#4F26E9" shadow="xl" borderRadius="2px" display="flex" alignItems="center" justifyContent="center" >
                    <motion.div
                        whileHover={{ scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Box onClick={() => setReel(true)} cursor="pointer" display="flex" alignItems="center" justifyContent="center" flexDirection="row">
                            <Box mx="20px" bg="white" shadow="xl" fontSize="32px" w="120px" h="120px" borderRadius="55em" display="flex" alignItems="center" justifyContent="center" >
                                <FiPlay color="#4F26E9" />
                            </Box>
                        </Box>
                    </motion.div>
                </Box>
            </motion.div>
            <Drawer placement="bottom" size="full" onClose={setReel} isOpen={isReel}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerBody p="0" m="0" >
                        <Box w="100%" h="100%" bg="#4F26E9" display="flex" flexDirection="column" >
                            <Box p="30px 30px 0px 30px" w="100%" h="auto" display="flex" alignItems="center" justifyContent="flex-end" >
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ ease: "easeInOut", duration: .5, delay: 1.5 }}
                                >
                                    <Box onClick={() => setReel(false)} w="100%" display="flex" alignItems="flex-end" justifyContent="flex-end" >
                                        <Box cursor="pointer" w="50px" h="100%" display="flex" alignItems="flex-end" justifyContent="flex-end" flexDirection="column" >
                                            <Box w="100%" display="flex" alignItems="center" justifyContent="center">
                                                <Text variant="XSREGULAR" >
                                                    close
                                                </Text>
                                            </Box>
                                            <Box mt="3px" w='100%' h="2px" bg="white" />
                                        </Box>
                                    </Box>
                                </motion.div>
                            </Box>
                            <Box p="30px 20px" w="100%" h="100%" display="flex" alignItems="center" justifyContent="center" >
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.8 }}
                                    transition={{ ease: "easeInOut", duration: .5, delay: 1 }}
                                    style={{ width: "80%", height: "100%" }}
                                >
                                    <ReactPlayer width="100%" height="100%" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                                </motion.div>
                            </Box>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}

export default Reel