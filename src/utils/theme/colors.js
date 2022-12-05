export const getColors = ({ colors }) => {
    const colorsNames = Object.keys(colors)
    const colorsFormat = {}
    colorsNames.forEach((colorName) => {
      colorsFormat[colorName] = colors[colorName]?.value
    })
    return colorsFormat
  }
  