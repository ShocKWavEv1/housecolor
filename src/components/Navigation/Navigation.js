import { Box, Heading, Show, Slide, Stack, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useState } from "react"

const Navigation = () => {
    const [isOpen, setOpen] = useState(false)

    const router = useRouter()

    const navLink = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Nosotros",
            path: "/design"
        },
        {
            title: "Servicios",
            path: "/servicios"
        },
        {
            title: "Portafolio",
            path: "/portafolio"
        },
        {
            title: "Contacto",
            path: "/contacto"
        },
    ]

    const renderNavbar = () => {
        return(
            <Box w="100%" padding={["30px 6% 0 6%", "30px 6% 0 6%", "30px 4% 0 4%", "0 6% 0 6%"]}>
                <Box w="100%" display="flex" flexDirection="row" >
                    <Box w="50%" display="flex" alignItems="flex-end" justifyContent="flex-start">
                        <Box w="40px" h="18px" bg="white" mb="9px" />
                        <Text pl="7px" variant="LGBOLD" >
                            housecolor
                        </Text>
                    </Box>
                    <Box onClick={() => setOpen(false)} w="50%" display="flex" alignItems="flex-end" justifyContent="flex-end" >
                        <Box cursor="pointer" w="50px" h="100%" display="flex" alignItems="flex-end" justifyContent="flex-end" flexDirection="column" >
                            <Box w="100%" display="flex" alignItems="center" justifyContent="center">
                                <Text variant="XSREGULAR" >
                                    close
                                </Text>
                            </Box>
                            <Box mt="3px" w='100%' h="2px" bg="white" />
                        </Box>
                    </Box>
                </Box>
            </Box>
        )
    }

    return(
        <Box w="100%" display="flex" flexDirection="row" >
            <Box w={["70%", "70%", "50%", "30%"]} display="flex" alignItems="flex-end" justifyContent="flex-start">
                <Box onClick={() => router.push("/")} cursor="pointer" display="flex" alignItems="flex-end" justifyContent="flex-start" flexDirection="row" >
                    <Box w="40px" h="18px" bg="white" mb="9px" />
                    <Text pl="4px" variant="LGBOLD" >
                        housecolor
                    </Text>
                </Box>
            </Box>
            <Box w={["30%", "30%", "50%", "70%"]} display="flex" alignItems="flex-end" justifyContent="flex-end">
                <Show above="lg" >
                    <Box w="100%" display="flex" alignItems="center" justifyContent="flex-end" >
                        <Stack spacing={10} direction="row" >
                            {
                                navLink.map((item, i) => {
                                    return(
                                        <Box className="navLink" key={i} cursor="pointer" onClick={() => router.push(item.path)}>
                                            <Text variant="SMMEDIUM" opacity={router.pathname === item.path ? 1 : 0.6} _hover={{ opacity: 1 }} >
                                                {item.title}
                                            </Text>
                                        </Box>
                                    )
                                })
                            }
                            <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row" >
                                <Text cursor="pointer" variant="XSBOLD" opacity={1} _hover={{ opacity: 1 }}>
                                    ES
                                </Text>
                                <Text variant="XSBOLD" opacity={0.6} _hover={{ opacity: 1 }}>
                                    /
                                </Text>
                                <Text cursor="pointer" variant="XSBOLD" opacity={0.6} _hover={{ opacity: 1 }}>
                                    EN
                                </Text>
                            </Box>
                        </Stack>
                    </Box>
                </Show>
                <Show below="lg" >
                    <Box cursor="pointer" onClick={() => setOpen(true)} w="50px" h="100%" display="flex" alignItems="flex-end" justifyContent="flex-end" flexDirection="column" >
                        <Box w="100%" h="2px" bg="white" />
                        <Box m="10px 0px" w='100%' h="2px" bg="white" />
                    </Box>
                </Show>
            </Box>
            <Slide direction='top' in={isOpen} style={{ zIndex: 10 }}>
                <Box color='white' bg='black' w="100%" h="100vh" shadow='md' display="flex" flexDirection="column" >
                    {renderNavbar()}
                    <Box padding={["0% 4% 0 4%", "0% 4% 0 4%", "0% 4% 0 4%", "0px 3% 0 3%"]} w="100%" h="100%" display="flex" alignItems="center" justifyContent="center" flexDirection="column" >
                        <Stack spacing={8} direction="column" >
                            {
                                navLink.map((item, i) => {
                                    return(
                                        <Heading onClick={() => {setOpen(false);router.push(item.path)}} key={i} cursor="pointer" textAlign="center" variant={["H6MEDIUM", "H6MEDIUM", "H6MEDIUM", "H6MEDIUM"]} _hover={{ letterSpacing: '2px' }} >
                                            {item.title}
                                        </Heading>
                                    )
                                })
                            }
                        </Stack>
                    </Box>
                </Box>
            </Slide>
        </Box>
    )
}

export default Navigation