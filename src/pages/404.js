import { Box, Button, Heading, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
import React from "react"
import Meta from "utils/Meta"

const ErrorPage = () => {
    const router = useRouter()

    return(
        <Box w="100%" h="90vh" display="flex" alignItems="center" justifyContent="center" flexDirection="column">
            <Meta title="Housecolor | 404" />
            <Box padding={["110px 6% 70px 6%", "110px 6% 70px 6%", "110px 6% 70px 6%", "110px 12% 70px 12%"]} w="100%" display="flex" alignItems="center" justifyContent="center" flexDirection="column">
                <Heading textAlign="center" variant={["H6BOLD", "H6BOLD", "H5BOLD", "H4BOLD"]} color="primary" >
                    Página no encontrada
                </Heading>
                <Text pt="20px" variant={["MDMEDIUM", "MDMEDIUM", "LGMEDIUM", "LGREGULAR"]} textAlign="center" >
                    Esta página no existe, por favor confirma que el URL es correcto. Si crees que es un problema con nuestro sitio por favor contáctanos en 
                    <Text pl="7px" as="span" textDecoration="underline" >
                        soporte@housecolor.studio
                    </Text>
                </Text>
                <Button onClick={() => router.push("/") } mt="20px" colorScheme="primary" size={["sm", "sm", "md", "md"]} >
                    Regresar al inicio
                </Button>
            </Box>
        </Box>
    )
}

export default ErrorPage