export const sizeUnits = [
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
] as const

export const validateSize = (val: string) => {
  if (typeof val === 'number' && val - val === 0) {
    return true
  } else if (
    val &&
    new RegExp('^\\d+\\.?\\d+(' + sizeUnits.join('|') + ')$', 'g').test(val)
  ) {
    return true
  } else {
    return false
  }
}
