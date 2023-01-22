import { Box, Heading, Menu, MenuButton, MenuItem, MenuList, Portal, Show, Slide, Stack, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useState } from "react"
import { FiChevronDown } from "react-icons/fi"

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
            icon: <FiChevronDown />,
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

    const servicesLink = [
        {
            title: "Dailies",
            path: "/servicios/dailies"
        },
        {
            title: "Color Grading",
            path: "/servicios/grading"
        },
        {
            title: "VFX",
            path: "/servicios/vfx"
        },
        {
            title: "Creative Editorial",
            path: "/servicios/editorial"
        },
        {
            title: "Suite Rentals",
            path: "/servicios/suites"
        },
        {
            title: "Mastering Deliverables",
            path: "/servicios/deliverables"
        }
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

    const renderDropdown = (item) => {
        return(
            <Menu>
                <MenuButton>
                    <Box display="flex" >
                        <Text variant="SMMEDIUM" opacity={router.pathname === item.path ? 1 : 0.6} _hover={{ opacity: 1 }} >
                            {item.title}
                        </Text>
                        <Box pl="5px" display="flex" alignItems="center" justifyContent="center" >
                            <Text variant="MDMEDIUM" opacity={router.pathname === item.path ? 1 : 0.6} _hover={{ opacity: 1 }} >
                                {item.icon}
                            </Text>
                        </Box>
                    </Box>
                </MenuButton>
                <Portal>
                    <MenuList p="10px" border="none" bg="#080C0C" >
                        {
                            servicesLink.map((item, i) => {
                                return(
                                    <MenuItem onClick={() => router.push(item.path)} bg="#080C0C" p="10px" key={i} >
                                        <Text variant="XSREGULAR" className="navLink" >
                                            {item.title}
                                        </Text>
                                    </MenuItem>
                                )
                            })
                        }
                    </MenuList>
                </Portal>
            </Menu>
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
                                        <Box w="auto" display="flex" flexDirection="row" className="navLink" key={i} cursor="pointer" onClick={() => item.path === "/servicios" ? null : router.push(item.path)}>
                                            {
                                                item.path === "/servicios" ? 
                                                    renderDropdown(item) :
                                                    <Text variant="SMMEDIUM" opacity={router.pathname === item.path ? 1 : 0.6} _hover={{ opacity: 1 }} >
                                                        {item.title}
                                                    </Text>
                                            }
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