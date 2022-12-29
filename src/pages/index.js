import { Box, Button, Heading, Wrap } from '@chakra-ui/react'
import Hero from 'components/Hero/Hero'
import ServicesGrid from 'components/ServicesGrid/ServicesGrid'
import Sketch from 'components/Sketch/Sketch'
import dynamic from 'next/dynamic'

const Manifesto = dynamic(() => import('../components/Manifesto/Manifesto.js'), {
  ssr: false,
})

export default function Home() {
  return (
    <Box data-scroll w="100%" h="auto" display="flex" alignItems="flex-start" justifyContent="flex-start" flexDirection="column">
      <Sketch gradientGL={"4820f2,22228b,DB286A,DB286A,0e003f"} />
      <Hero />
      <ServicesGrid />
      <ServicesGrid />
      <Wrap data-scroll >
            {[...Array(10).keys()].map((idx) => (
              <Box w="520px" h="320px" p="20px" key={idx} data-scroll data-scroll-speed="4" data-scroll-delay={idx / 100}>
                <h2>data-scroll-delay</h2>
                <code>{`<div data-scroll data-scroll-speed="1" data-scroll-delay="${idx / 100}"></div>`}</code>
              </Box>
            ))}
      </Wrap>
    </Box>
  )
}