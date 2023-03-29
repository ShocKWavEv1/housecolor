import { Box, Button, Center, Heading, Text, Wrap, WrapItem } from "@chakra-ui/react"
import MarqueeBanner from "components/MarqueeBanner/MarqueeBanner";
import { motion } from "framer-motion"
import { useRouter } from "next/router";
import React from "react"
import { FiArrowRight } from "react-icons/fi";

const variants = {
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    }
}

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 200,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [.6, .01, -.05, .95],
            duration: 1.4,
        }
    },
    exit: {
        opacity: 0,
        y: -200,
        transition: {
            ease: 'easeInOut',
            duration: .8
        }
    }
}

const Clientes = () => {
    const router = useRouter()

    const listClient = [
        { title: "Calvin Klein" },
        { title: "Acueducto" },
        { title: "Manuel Medrano" },
        { title: "Locomotive" },
        { title: "Playboy" },
        { title: "Reform Collective" },
        { title: "Olumo" },
        { title: "Eleanor" },
        { title: "Coca Cola" },
        { title: "AFIRME" }
    ]

    return(
        <Box as="section" padding={["20px 6% 70px 6%", "20px 6% 70px 6%", "20px 6% 70px 6%", "70px 6% 100px 6%"]} w="100%" display="flex" alignItems="flex-start" justifyContent="flex-start" flexDirection="column">
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
                    For businesses looking to innovate
                </Heading>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    ease: "easeInOut",
                    duration: 1
                 }}
            >
                <Text variant="MDMEDIUM" w="90%" mt="20px" >
                    Te ayudamos a ejecutar proyectos que pueden transformar tu organización en una con mejores operaciones, una arquitectura escalable y una experiencia de cliente de primer nivel.
                </Text>
            </motion.div>
            <Box w="100%" mt="50px" display="flex" alignItems="center" justifyContent="center" position="relative">
                <Box w="70%" display="flex" alignItems="center" justifyContent="center">
                    <motion.div 
                        variants={variants}
                        initial="hidden"
                        whileInView="show"
                        exit="exit"
                        viewport={{ once: true, amount: "some" }}
                    >
                        <Wrap spacing='20px' justify='center'>
                            {
                                listClient.map((item, i) => {
                                    return(
                                        <motion.div
                                            key={i}
                                            variants={itemVariants}
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ duration: 0.3}}
                                        >
                                            <WrapItem shadow="xl">
                                                <Center borderRadius="2px" p="10px 50px" bg='white'>
                                                    <Text color="black">
                                                        {item.title}
                                                    </Text>
                                                </Center>
                                            </WrapItem>
                                        </motion.div>
                                    )
                                })
                            }
                        </Wrap>
                    </motion.div>
                </Box>
            </Box>
            <Box w="100%" mt="50px" display="flex" alignItems="center" justifyContent="center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.8 }}
                    viewport={{ once: true }}
                    transition={{ ease: "easeInOut", duration: .5, delay: 1.4 }}
                >
                    <Button colorScheme="primary" size="md" onClick={() => router.push("/portafolio")} rightIcon={<FiArrowRight />} >
                        ve nuestro trabajo
                    </Button>
                </motion.div>
            </Box>
        </Box>
    )
}

export default Clientes