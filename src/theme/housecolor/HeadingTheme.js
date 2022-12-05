import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system'

const baseThemeMode = {
    color: 'black',
    _dark: {
      color: 'white'
    }
}

const baseH1Styles = {
  fontFamily: 'Satoshi',
  fontSize: '120px',
  ...baseThemeMode,
}

const baseH2Styles = {
  fontFamily: 'Satoshi',
  fontSize: '100px',
  ...baseThemeMode,
}

const baseH3Styles = {
  fontFamily: 'Satoshi',
  fontSize: '80px',
  ...baseThemeMode,
}

const baseH4Styles = {
  fontFamily: 'Satoshi',
  fontSize: '70px',
  ...baseThemeMode,
}

const baseH5Styles = {
  fontFamily: 'Satoshi',
  fontSize: '50px',
  ...baseThemeMode,
}

const baseH6Styles = {
  fontFamily: 'Satoshi',
  fontSize: '40px',
  ...baseThemeMode,
}

/* H1 VARIANTS */
const H1REGULAR = defineStyle({
  ...baseH1Styles,
  fontWeight: 400,
})

const H1MEDIUM = defineStyle({
  ...baseH1Styles,
  fontWeight: 500,
})

const H1BOLD = defineStyle({
  ...baseH1Styles,
  fontWeight: 700,
})

/* H2 VARIANTS */
const H2REGULAR = defineStyle({
  ...baseH2Styles,
  fontWeight: 400,
})

const H2MEDIUM = defineStyle({
  ...baseH2Styles,
  fontWeight: 500,
})

const H2BOLD = defineStyle({
  ...baseH2Styles,
  fontWeight: 700,
})

/* H3 VARIANTS */
const H3REGULAR = defineStyle({
  ...baseH3Styles,
  fontWeight: 400,
})

const H3MEDIUM = defineStyle({
  ...baseH3Styles,
  fontWeight: 500,
})

const H3BOLD = defineStyle({
  ...baseH3Styles,
  fontWeight: 700,
})

/* H4 VARIANTS */
const H4REGULAR = defineStyle({
  ...baseH4Styles,
  fontWeight: 400,
})

const H4MEDIUM = defineStyle({
  ...baseH4Styles,
  fontWeight: 500,
})

const H4BOLD = defineStyle({
  ...baseH4Styles,
  fontWeight: 700,
})

/* H5 VARIANTS */
const H5REGULAR = defineStyle({
  ...baseH5Styles,
  fontWeight: 400,
})

const H5MEDIUM = defineStyle({
  ...baseH5Styles,
  fontWeight: 500,
})

const H5BOLD = defineStyle({
  ...baseH5Styles,
  fontWeight: 700,
})

/* H6 VARIANTS */
const H6REGULAR = defineStyle({
  ...baseH6Styles,
  fontWeight: 400,
})
  
const H6MEDIUM = defineStyle({
  ...baseH6Styles,
  fontWeight: 500,
})
  
const H6BOLD = defineStyle({
  ...baseH6Styles,
  fontWeight: 700,
})

export const HeadingTheme = defineStyleConfig({
  variants: {
    H1REGULAR,
    H1MEDIUM,
    H1BOLD,
    H2REGULAR,
    H2MEDIUM,
    H2BOLD,
    H3REGULAR,
    H3MEDIUM,
    H3BOLD,
    H4REGULAR,
    H4MEDIUM,
    H4BOLD,
    H5REGULAR,
    H5MEDIUM,
    H5BOLD,
    H6REGULAR,
    H6MEDIUM,
    H6BOLD,
  },
})
