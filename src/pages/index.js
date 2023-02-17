import { Box, Text, Wrap } from '@chakra-ui/react'
import Clientes from 'components/Clientes/Clientes'
import Hero from 'components/Hero/Hero'
import Manifesto from 'components/Manifesto/Manifesto'
import Reel from 'components/Reel/Reel'
import ServicesGrid from 'components/ServicesGrid/ServicesGrid'
import Sketch from 'components/Sketch/Sketch'
import { SmoothScrollProvider } from 'context/SmoothScroll.js'
import { smoothScrollOptions } from 'utils/smoothScrollOptions'

export default function Home() {
  return (
    <SmoothScrollProvider options={smoothScrollOptions}>
      <Box data-scroll-container w="100%" h="auto" display="flex" alignItems="flex-start" justifyContent="flex-start" flexDirection="column">
        <Sketch gradientGL={"4820f2,22228b,DB286A,DB286A,0e003f"} />
        <Hero />
        <ServicesGrid />
        <Reel />
        <Manifesto />
        <Clientes />
      </Box>
    </SmoothScrollProvider>
  )
}