import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react"
import React from "react"
import { FiMail } from "react-icons/fi"

const ContactBanner = () => {
    const bg = useColorModeValue("primary.500", "primary.500")

    return(
        <Box w="100%" bg={bg} padding={["70px 6% 70px 6%", "70px 6% 70px 6%", "70px 6% 70px 6%", "70px 6% 70px 6%"]}>
            <Heading variant={["H4MEDIUM", "H5MEDIUM", "H4MEDIUM", "H5BOLD"]}>
                Asociémonos,
            </Heading>
            <Heading variant={["H4MEDIUM", "H5MEDIUM", "H4MEDIUM", "H5BOLD"]}>
                Elevemos tu negocio
            </Heading>
            <Text my="10px" variant="MDMEDIUM" >
                ¿Somos los indicados para acompañarte en tu próximo proyecto?
            </Text>
            <Box cursor="pointer" display="flex" alignItems="center" justifyContent="flex-start" _hover={{ opacity: .8 }} >
                <FiMail fontSize="18px" color="white" />
                <Text pl="5px" variant="MDMEDIUM">
                    hola@housecolor.studio
                </Text>
            </Box>
        </Box>
    )
}

export default ContactBanner