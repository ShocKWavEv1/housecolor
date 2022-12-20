import { Box, Button, Heading, useColorMode } from '@chakra-ui/react'

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box w="100%" bg={colorMode === 'dark' ? 'black' : 'secondaryWhite'} h="auto" minH="100vh" display="flex" alignItems="flex-start" justifyContent="flex-start" flexDirection="column">
      <Box w="100%" h="100vh" position="relative" zIndex={0}>
        <iframe src='https://gradient-gl.vercel.app' width="100%" height="100%" />
      </Box>
      <Box bg="transparent" w="100%" h="100vh" position="absolute" zIndex={1} display="flex" alignItems="center" justifyContent="center">
        <Heading variant={["H6MEDIUM", "H5MEDIUM", "H2MEDIUM", "H2MEDIUM"]} textAlign="center">
          Welcome to housecolor
        </Heading>
      </Box>
      <Box p="2rem" w="100%" bg={colorMode === 'dark' ? 'black' : 'secondaryWhite'} h="auto" minH="100vh" display="flex" alignItems="flex-start" justifyContent="flex-start" flexDirection="column">
        <Button onClick={toggleColorMode} colorScheme="success" size={["xs", "xs", "xs", "xs"]}>
          welcome to housecolor.studio
        </Button>
        <Button mt="20px" colorScheme="info" size={["sm", "sm", "sm", "sm"]}>
          welcome to housecolor.studio
        </Button>
        <Button my="20px" colorScheme="accent" size={["sm", "sm", "md", "md"]}>
          welcome to housecolor.studio
        </Button>
        <Button colorScheme="primary" size={["sm", "sm", "md", "lg"]} >
          welcome to housecolor.studio
        </Button>
        <Button mt="20px" variant="outline" disabled colorScheme="primary" size={["sm", "sm", "md", "sm"]} >
          welcome to housecolor.studio
        </Button>
      </Box>
    </Box>
  )
}