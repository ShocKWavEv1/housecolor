import React from 'react'
import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @import url('https://fonts.cdnfonts.com/css/satoshi?styles=135009,135005,135007,135002,135000');
    `}
  />
)

export default Fonts
