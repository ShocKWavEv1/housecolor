import { Box, useColorMode } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'

const DynamicHeader = dynamic(() => import('components/Sketches/Sketch/Sketch'), {
  ssr: false,
})

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box w="100%" bg={colorMode === 'dark' ? 'black' : 'secondaryWhite'} h="auto" minH="100vh" display="flex" alignItems="flex-start" justifyContent="flex-start" flexDirection="column">
      <Box id="container" w="100%" h="100vh" display="block">
        <DynamicHeader />
      </Box>
    </Box>
  )
}