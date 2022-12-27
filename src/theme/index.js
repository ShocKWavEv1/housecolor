import { extendTheme } from '@chakra-ui/react'
import { getColors } from 'utils/theme/colors'
import colorsToken from 'src/theme/colors.json'

// HOUSECOLOR COMPONENTS
import { ButtonTheme as Button } from './housecolor/ButtonTheme'
import { HeadingTheme as Heading } from './housecolor/HeadingTheme'
import { TextTheme as Text } from './housecolor/TextTheme'

const colors = getColors({ colors: colorsToken.color })

const breakpoints = {
  sm: '320px',
  md: '868px',
  lg: '1160px',
  xl: '1200px',
  '2xl': '1536px',
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const theme = extendTheme({
  breakpoints,
  config,
  colors,
  components: {
    Button,
    Heading,
    Text,
  }
})

export default theme
