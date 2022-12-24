import { Box, Button, Heading, SimpleGrid, Stack, Text, typography, useColorMode } from '@chakra-ui/react'
import Hero from 'components/Hero/Hero'
import Sketch from 'components/Sketch/Sketch'

export default function Design() {
  const { colorMode, toggleColorMode } = useColorMode()

  const typo = [
    {
      variant: ["H2REGULAR", "H1REGULAR", "H2REGULAR", "H1BOLD"],
      text: "Satoshi"
    },
    {
      variant: ["H2MEDIUM", "H1MEDIUM", "H2MEDIUM", "H1MEDIUM"],
      text: "Satoshi"
    },
    {
      variant: "H1REGULAR",
      text: "Satoshi"
    },
    {
      variant: "H2BOLD",
      text: "Satoshi"
    },
    {
      variant: "H2MEDIUM",
      text: "Satoshi"
    },
    {
      variant: "H2REGULAR",
      text: "Satoshi"
    },
    {
      variant: "H3BOLD",
      text: "Satoshi"
    },
    {
      variant: "H3MEDIUM",
      text: "Satoshi"
    },
    {
      variant: "H3REGULAR",
      text: "Satoshi"
    },
    {
      variant: "H4BOLD",
      text: "Satoshi"
    },
    {
      variant: "H4MEDIUM",
      text: "Satoshi"
    },
    {
      variant: "H4REGULAR",
      text: "Satoshi"
    },
    {
      variant: "H5BOLD",
      text: "Satoshi"
    },
    {
      variant: "H5MEDIUM",
      text: "Satoshi"
    },
    {
      variant: "H5REGULAR",
      text: "Satoshi"
    },
    {
      variant: "H6BOLD",
      text: "Satoshi"
    },
    {
      variant: "H6MEDIUM",
      text: "Satoshi"
    },
    {
      variant: "H6REGULAR",
      text: "Satoshi"
    }
  ]

  const body = [
    {
      variant: "LGBOLD",
    },
    {
      variant: "LGMEDIUM",
    },
    {
      variant: "LGREGULAR",
    },
    {
      variant: "MDBOLD",
    },
    {
      variant: "MDMEDIUM",
    },
    {
      variant: "MDREGULAR",
    },
    {
      variant: "SMBOLD",
    },
    {
      variant: "SMMEDIUM",
    },
    {
      variant: "SMREGULAR",
    },
    {
      variant: "XSBOLD",
    },
    {
      variant: "XSMEDIUM",
    },
    {
      variant: "XSREGULAR",
    },
  ]

  return (
    <Box w="100%" bg={colorMode === 'dark' ? 'black' : 'secondaryWhite'} h="auto" minH="100vh" display="flex" alignItems="flex-start" justifyContent="flex-start" flexDirection="column">
      <Sketch gradientGL="14ec6a,4820f2,22228b,0e003f,14ec6a" />
      <Hero />
      <Button onClick={toggleColorMode} colorScheme="success" size={["xs", "xs", "xs", "xs"]}>
        welcome to housecolor.studio
      </Button>
      <Button mt="20px" colorScheme="info" size={["sm", "sm", "sm", "sm"]}>
        welcome to housecolor.studio
      </Button>
      <Button my="20px" colorScheme="accent" size={["sm", "sm", "md", "md"]}>
        welcome to housecolor.studio
      </Button>
      <Button colorScheme="primary" disabled size={["sm", "sm", "md", "lg"]} >
        welcome to housecolor.studio
      </Button>
      <Button mt="20px" variant="outline" disabled colorScheme="primary" size={["sm", "sm", "md", "sm"]} >
        welcome to housecolor.studio
      </Button>
      <Box mt="20px" w="100%">
        <SimpleGrid columns={[1, 1, 2, 3, 3]} spacing="20px">
          {
            typo.map((item, i) => {
              return(
                <Box w="100%" display="flex" alignItems="center" justifyContent="center">
                  <Heading key={i} variant={item.variant}>
                    Satoshi
                  </Heading>
                </Box>
              )
            })
          }
        </SimpleGrid>
      </Box> 
      <Box mt="4rem" w="100%">
        <SimpleGrid columns={[1, 1, 2, 3, 3]} spacing="20px">
          {
            body.map((item, i) => {
              return(
                <Box w="100%" display="flex" alignItems="center" justifyContent="center">
                  <Text key={i} variant={item.variant} align="center">
                    The quick brown fox jumps over the lazy dog
                  </Text>
                </Box>
              )
            })
          }
        </SimpleGrid>
      </Box>
    </Box>
  )
}
