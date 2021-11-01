import {
  convertHexToRgba,
  convertNameToHex,
  getContrastColor,
  validateColor,
} from '../colors'

describe('validateColor', () => {
  // Valid Hex (#ffb41d)
  test('Validate Hex (#ffb41d)', () => {
    expect(validateColor('#ffb41d')).toBe(true)
  })
  // Valid Hex (#fff)
  test('Valid Hex (#fff)', () => {
    expect(validateColor('#fff')).toBe(true)
  })
  // Invalid Hex (#ffb4)
  test('Invalid Hex (#ffb4)', () => {
    expect(validateColor('#ffb4')).toBe(false)
  })
  // Valid RGBA (rgba(255, 180, 29, 1))
  test('Valid RGBA (rgba(255, 180, 29, 1))', () => {
    expect(validateColor('rgba(255, 180, 29, 1)')).toBe(true)
  })
  // Valid RGBA (255, 180, 29, 0.5)
  test('Valid RGBA (rgba(255, 180, 29, 0.5))', () => {
    expect(validateColor('rgba(255, 180, 29, 0.5)')).toBe(true)
  })
  // Invalid RGBA (255, 180, 29, 1.5)
  test('Valid RGBA (rgba(255, 180, 29, 1.5))', () => {
    expect(validateColor('rgba(255, 180, 29, 1.5)')).toBe(false)
  })
  // Valid Color Name (primary)
  test('Valid Color Name (primary)', () => {
    expect(validateColor('primary')).toBe(true)
  })
  // Valid Color Name (gray-500)
  test('Valid Color Name (gray-500)', () => {
    expect(validateColor('gray-500')).toBe(true)
  })
  // Invalid Color Name (hoge)
  test('Invalid Color Name (hoge)', () => {
    expect(validateColor('hoge')).toBe(false)
  })
})

describe('convertNameToHex', () => {
  // Color Name (primary)
  test('Color Name (primary)', () => {
    expect(convertNameToHex('primary')).toBe('#ffb41d')
  })
  // Hex (#ffb41d)
  test('Hex (#ffb41d)', () => {
    expect(convertNameToHex('#ffb41d')).toBe('#ffb41d')
  })
  // RGBA (rgba(255, 180, 29, 1))
  test('RGBA (rgba(255, 180, 29, 1))', () => {
    expect(convertNameToHex('rgba(255, 180, 29, 1)')).toBe(
      'rgba(255, 180, 29, 1)'
    )
  })
})

describe('convertHexToRgba', () => {
  // Color Name (primary)
  test('Color Name (primary)', () => {
    expect(convertHexToRgba('primary')).toBe('primary')
  })
  // Hex (#ffb41d)
  test('Hex (#ffb41d)', () => {
    expect(convertHexToRgba('#ffb41d')).toBe('rgba(255, 180, 29, 1)')
  })
  // RGBA (rgba(255, 180, 29, 1))
  test('RGBA (rgba(255, 180, 29, 1))', () => {
    expect(convertHexToRgba('rgba(255, 180, 29, 1)')).toBe(
      'rgba(255, 180, 29, 1)'
    )
  })
})

describe('getContrastColor', () => {
  // Color Name (primary)
  test('Color Name (primary)', () => {
    expect(getContrastColor('primary')).toBe('#373948')
  })
  // Hex (#e91e62)
  test('Hex (#e91e62)', () => {
    expect(getContrastColor('#e91e62')).toBe('#fff')
  })
  // RGBA (rgba(0, 0, 0, 1))
  test('RGBA (rgba(0, 0, 0, 1))', () => {
    expect(getContrastColor('rgba(0, 0, 0, 1)')).toBe('#fff')
  })
})
