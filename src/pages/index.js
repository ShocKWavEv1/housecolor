import { Box, Wrap } from '@chakra-ui/react'
import Hero from 'components/Hero/Hero'
import ServicesGrid from 'components/ServicesGrid/ServicesGrid'
import Sketch from 'components/Sketch/Sketch'
import { SmoothScrollProvider } from 'context/SmoothScroll.js'

export default function Home() {
  return (
    <SmoothScrollProvider options={{ smooth: true, multiplier: 1, smartphone: { smooth: true }, tablet: { smooth: true } }}>
      <Box data-scroll-container w="100%" h="auto" display="flex" alignItems="flex-start" justifyContent="flex-start" flexDirection="column">
        <Sketch gradientGL={"4820f2,22228b,DB286A,DB286A,0e003f"} />
        <Hero />
        <ServicesGrid />
        <Wrap data-scroll-container w="100%" >
              {[...Array(10).keys()].map((idx) => (
                <Box w="520px" h="320px" p="20px" key={idx} data-scroll data-scroll-speed="4" data-scroll-delay={idx / 100}>
                  <h2>data-scroll-delay</h2>
                  <code>{`data-scroll-delay="${idx / 100}"`}</code>
                </Box>
              ))}
        </Wrap>
      </Box>
    </SmoothScrollProvider>
  )
}