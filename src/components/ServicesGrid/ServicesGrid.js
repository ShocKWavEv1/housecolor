import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useRouter } from "next/router"
import React from "react"

const variants = {
    show: {
        transition: {
            staggerChildren: 0.35,
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
            duration: 1.6,
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

const ServicesGrid = () => {
    const services = [
        {
            title: 'Dailies',
            desc: 'Deliver pristine dailies in any format that your production needs.',
            path: '/servicios/dailies',
            gradient: 'linear-gradient(45deg, hsl(357deg 100% 48%) 0%, hsl(349deg 100% 46%) 11%, hsl(342deg 100% 44%) 22%, hsl(334deg 100% 42%) 33%, hsl(326deg 100% 40%) 44%, hsl(319deg 100% 38%) 56%, hsl(311deg 100% 36%) 67%, hsl(304deg 100% 34%) 78%, hsl(296deg 100% 32%) 89%, hsl(288deg 100% 29%) 100%)',
        },
        {
            title: 'Color Grading',
            desc: 'We can aid in your creative endeavor towards a great on-screen product.',
            path: '/servicios/grading',
            gradient: 'linear-gradient(235deg, hsl(212deg 84% 27%) 0%, hsl(218deg 86% 31%) 21%, hsl(225deg 87% 36%) 30%, hsl(231deg 89% 40%) 39%, hsl(237deg 91% 45%) 46%, hsl(244deg 93% 50%) 54%, hsl(250deg 95% 54%) 61%, hsl(256deg 96% 59%) 69%, hsl(263deg 98% 63%) 79%, hsl(269deg 100% 68%) 100%)'
        },
        {
            title: 'VFX',
            desc: 'Visual effects & productions services.',
            path: '/servicios/vfx',
            gradient: 'linear-gradient(345deg, hsl(144deg 85% 50%) 0%, hsl(199deg 93% 31%) 50%, hsl(253deg 100% 12%) 100%)'

        },
        {
            title: 'Creative Editorial',
            desc: 'We specialize in start-to-finish editorial.',
            path: '/servicios/editorial',
            gradient: 'linear-gradient(342deg, hsl(182deg 85% 50%) 0%, hsl(199deg 93% 31%) 50%, hsl(253deg 100% 12%) 100%)'
        },
        {
            title: 'Suite Rentals',
            desc: 'We have a variety of editorial suites and offices to fit your needs.',
            path: '/servicios/suites',
            gradient: 'linear-gradient(225deg, hsl(287deg 100% 48%) 0%, hsl(329deg 100% 46%) 11%, hsl(322deg 100% 44%) 22%, hsl(314deg 100% 42%) 33%, hsl(306deg 100% 40%) 44%, hsl(299deg 100% 38%) 56%, hsl(291deg 100% 36%) 67%, hsl(304deg 100% 34%) 78%, hsl(296deg 100% 32%) 89%, hsl(288deg 100% 29%) 100%)'
            
        },
        {
            title: 'Mastering Deliverables',
            desc: 'Distribute efficiently and with the highest quality possible.',
            path: '/servicios/deliverables',
            gradient: 'linear-gradient(235deg, hsl(212deg 84% 27%) 0%, hsl(218deg 86% 31%) 21%, hsl(225deg 87% 36%) 30%, hsl(231deg 89% 40%) 39%, hsl(237deg 91% 45%) 46%, hsl(244deg 93% 50%) 54%, hsl(250deg 95% 54%) 61%, hsl(256deg 96% 59%) 69%, hsl(263deg 98% 63%) 79%, hsl(269deg 100% 68%) 100%)'
        }
    ]

    const router = useRouter()

    return(
        <Box padding={["70px 6% 70px 6%", "70px 6% 70px 6%", "70px 6% 70px 6%", "100px 6% 100px 6%"]} w="100%" display="flex" alignItems="flex-start" justifyContent="flex-start" flexDirection="column">
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    ease: "easeInOut",
                    duration: 1
                 }}
            >
                <Heading variant={["H4MEDIUM", "H5MEDIUM", "H4MEDIUM", "H5BOLD"]}>
                    Our post production services
                </Heading>
            </motion.div>
            <motion.div 
                variants={variants}
                initial="hidden"
                whileInView="show"
                exit="exit"
                viewport={{ once: true }}
            >
                <SimpleGrid pt="50px" w="100%" columns={[1, 1, 2, 3, 4]} spacing="30px" >
                    {
                        services.map((item, i) => {
                            return(
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.3}}
                                >
                                    <Box cursor="pointer" onClick={() => router.push(item.path)} shadow="2xl" borderRadius="2px" key={i} w="100%" h="45vh" bg="primary" bgGradient={item.gradient} >
                                        <Box p="20px" w="100%" display="flex" alignItems="flex-start" justifyContent="flex-start" flexDirection="column">
                                            <Text variant="XSREGULAR" opacity={0.8}>
                                                {item.title}
                                            </Text>
                                            <Text pt="10px" variant="XSMEDIUM" >
                                                {item.desc}
                                            </Text>
                                        </Box>
                                    </Box>
                                </motion.div>
                            )
                        })
                    }
                </SimpleGrid>
            </motion.div>
        </Box>
    )
}

export default ServicesGrid