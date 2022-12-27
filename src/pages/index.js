import { Box, Button, Heading } from '@chakra-ui/react'
import Hero from 'components/Hero/Hero'
import ServicesGrid from 'components/ServicesGrid/ServicesGrid'
import Sketch from 'components/Sketch/Sketch'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <Box w="100%" h="auto"  display="flex" alignItems="flex-start" justifyContent="flex-start" flexDirection="column">
      <Sketch gradientGL={"4820f2,22228b,DB286A,DB286A,0e003f"} />
      <Hero />
      <ServicesGrid />
    </Box>
  )
}