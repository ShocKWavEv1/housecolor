import { Box, Button, Heading } from '@chakra-ui/react'
import Hero from 'components/Hero/Hero'
import Sketch from 'components/Sketch/Sketch'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <Box w="100%" h="auto"  display="flex" alignItems="flex-start" justifyContent="flex-start" flexDirection="column">
      <Sketch gradientGL={"4820f2,22228b,DB286A,DB286A,0e003f"} />
      <Hero />
      <Box padding={["70px 6% 70px 6%", "70px 6% 70px 6%", "70px 6% 70px 6%", "70px 6% 70px 6%"]} w="100%" display="flex" alignItems="flex-start" justifyContent="flex-start" flexDirection="column">
        <Heading variant={["H4MEDIUM", "H5MEDIUM", "H4MEDIUM", "H5BOLD"]}>
          Con increíbles
        </Heading>
        <Heading variant={["H4MEDIUM", "H5MEDIUM", "H4MEDIUM", "H5BOLD"]}>
          Productos digitales
        </Heading>
        <Button mt="20px" onClick={() => router.push("/design")} >
          Hi Route
        </Button>
      </Box>
    </Box>
  )
}