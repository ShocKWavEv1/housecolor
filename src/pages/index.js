import { Box } from '@chakra-ui/react'
import Clientes from 'components/Clientes/Clientes'
import Hero from 'components/Hero/Hero'
import Manifesto from 'components/Manifesto/Manifesto'
import Reel from 'components/Reel/Reel'
import ScrollSection from 'components/ScrollSection/ScrollSection'
import ServicesGrid from 'components/ServicesGrid/ServicesGrid'
import Sketch from 'components/Sketch/Sketch'
import { SmoothScrollProvider } from 'context/SmoothScroll.js'
import { smoothScrollOptions } from 'utils/smoothScrollOptions'

export default function Home() {
  return (
    <Box data-scroll-container w="100%" h="auto" display="flex" flexDirection="column">
      <Sketch gradientGL={"08037f,e77300,9c1a13,9c1a13,0e003f"} />
      <Hero />
      <ServicesGrid />
      <Reel />
      <Manifesto />
      <Clientes />
      <ScrollSection />
    </Box>
  )
}