import { Box, SimpleGrid, Text } from "@chakra-ui/react"
import React from "react"
import { FiInstagram, FiMail } from "react-icons/fi"
import { RiWhatsappLine } from "react-icons/ri"

const Footer = () => {
    const footer = [
        {
            icon: <FiMail />,
            label: "hola@housecolor.studio"
        },
        {
            icon: <RiWhatsappLine />,
            label: "+52 55 1265 6510"
        },
        {
            icon: <FiInstagram />,
            label: "housecolor.studio"
        }
    ]

    return(
        <Box w="100%" padding={["20px 4% 20px 4%", "20px 4% 20px 4%", "20px 4% 20px 4%", "30px 18% 30px 18%"]} display="flex" alignItems="center" justifyContent="center" flexDirection="column" >
            <SimpleGrid w="100%" columns={[1, 1, 3, 3]} spacing="20px" >
                {
                    footer.map((item, i) => {
                        return(
                            <Box key={item.label} display="flex" alignItems="center" justifyContent={["flex-start", "flex-start", "center", "center"]} flexDirection="row" _hover={{ opacity: .8 }} >
                                {item.icon}
                                <Text pl="5px" variant="XSMEDIUM" cursor="pointer">
                                    {item.label}
                                </Text>
                            </Box>
                        )
                    })
                }
            </SimpleGrid>
            <Box w="100%" display="flex" justifyContent={["flex-start", "flex-start", "center", "center"]} flexDirection="row" >
                <Text pt="20px" variant="XSMEDIUM">
                    © MMXXII, housecolor
                </Text>
            </Box>
        </Box>
    )
}

export default Footer