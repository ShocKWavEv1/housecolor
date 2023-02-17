import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system'
import { mode } from '@chakra-ui/theme-tools'

const baseThemeMode = {
    color: mode('white', 'black'),
}

const baseLargeStyles = {
    fontFamily: 'Satoshi',
    fontSize: '24px',
    wordBreak: 'break-word',
    ...baseThemeMode,
  }

const baseMediumStyles = {
  fontFamily: 'Satoshi',
  fontSize: '20px',
  wordBreak: 'break-word',
  ...baseThemeMode,
}

const baseSmallStyles = {
  fontFamily: 'Satoshi',
  fontSize: '18px',
  wordBreak: 'break-word',
  ...baseThemeMode,
}

const baseExtraSmallStyles = {
  fontFamily: 'Satoshi',
  fontSize: '16px',
  wordBreak: 'break-word',
  ...baseThemeMode,
}

/* LARGE VARIANTS */
const LGREGULAR = defineStyle({
    ...baseLargeStyles,
    fontWeight: 400,
  })
  
  const LGMEDIUM = defineStyle({
    ...baseLargeStyles,
    fontWeight: 500,
  })
  
  const LGBOLD = defineStyle({
    ...baseLargeStyles,
    fontWeight: 700,
  })

/* BODY VARIANTS */
const MDREGULAR = defineStyle({
  ...baseMediumStyles,
  fontWeight: 400,
})

const MDMEDIUM = defineStyle({
  ...baseMediumStyles,
  fontWeight: 500,
})

const MDBOLD = defineStyle({
  ...baseMediumStyles,
  fontWeight: 700,
})

/* SMALL VARIANT */
const SMREGULAR = defineStyle({
  ...baseSmallStyles,
  fontWeight: 400,
})

const SMMEDIUM = defineStyle({
  ...baseSmallStyles,
  fontWeight: 500,
})

const SMBOLD = defineStyle({
  ...baseSmallStyles,
  fontWeight: 700,
})

/* EXTRA SMALL VARIANT */
const XSREGULAR = defineStyle({
  ...baseExtraSmallStyles,
  fontWeight: 400,
})

const XSMEDIUM = defineStyle({
  ...baseExtraSmallStyles,
  fontWeight: 500,
})

const XSBOLD = defineStyle({
  ...baseExtraSmallStyles,
  fontWeight: 700,
})

export const TextTheme = defineStyleConfig({
  variants: {
    LGREGULAR,
    LGMEDIUM,
    LGBOLD,
    MDREGULAR,
    MDMEDIUM,
    MDBOLD,
    SMREGULAR,
    SMMEDIUM,
    SMBOLD,
    XSREGULAR,
    XSMEDIUM,
    XSBOLD,
  },
})
