export const sizeUnits = Object.freeze([
  'cm',
  'mm',
  'q',
  'in',
  'pc',
  'pt',
  'px',
  'em',
  'ex',
  'ch',
  'rem',
  'lh',
  'vw',
  'vh',
  'vmin',
  'vmax',
  '%',
])

export const validateSize = (val) => {
  // number
  if (typeof val === 'number' && val - val === 0) {
    return true
  }
  // string
  else if (
    val &&
    new RegExp('^\\d+\\.?\\d+(' + sizeUnits.join('|') + ')$', 'g').test(val)
  ) {
    return true
  }
  // error
  else {
    return false
  }
}
