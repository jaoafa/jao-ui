export const colors: { [key: string]: string } = Object.freeze({
  primary: '#ffb41d',
  'primary-lighten': '#fff8e2',
  'primary-900': '#fd7217',
  'primary-800': '#fe9119',
  'primary-700': '#fea11b',
  'primary-600': '#ffb41d',
  'primary-500': '#ffc122',
  'primary-400': '#ffca34',
  'primary-300': '#ffd556',
  'primary-200': '#ffe086',
  'primary-100': '#ffecb5',
  'primary-50': '#fff8e2',

  secondary: '#e91e62',
  'secondary-lighten': '#fce4ec',
  'secondary-900': '#880d4e',
  'secondary-800': '#ad1356',
  'secondary-700': '#c2185a',
  'secondary-600': '#d81b5f',
  'secondary-500': '#e91e62',
  'secondary-400': '#ec4079',
  'secondary-300': '#f06291',
  'secondary-200': '#f48fb0',
  'secondary-100': '#f8bbd0',
  'secondary-50': '#fce4ec',

  black: '#000',
  white: '#fff',
  'gray-1000': '#05081a',
  'gray-900': '#1e2131',
  'gray-800': '#373948',
  'gray-700': '#50535f',
  'gray-600': '#696b76',
  'gray-500': '#82848d',
  'gray-400': '#9b9ca3',
  'gray-300': '#b4b5bb',
  'gray-200': '#cdced1',
  'gray-100': '#e6e7e9',
  'gray-50': '#f2f2f3',

  success: '#50a337',
  error: '#e91e62',

  discord: '#5865f2',
  twitter: '#1da1f2',
  facebook: '#1877f2',
  line: '#06c755',
  instagram: '#e1306c',
  youtube: '#ff0000',
})

export const validateColor = (val: string): boolean => {
  const isHex: boolean = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(val)
  const isRgba: boolean =
    /^rgba\(((\d|[1-9]\d|1\d{1,2}|2[0-4]\d|25[0-5]),){3}([0-1]|0*\.\d+)\)$/i.test(
      val.replace(/ /g, '')
    )
  const isColorsName: boolean = val in colors
  return isHex || isRgba || isColorsName
}

export const convertNameToHex = (val: string): string => {
  return val in colors ? colors[val] : val
}

export const convertHexToRgba = (val: string): string => {
  const isHex: boolean = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(val)
  if (isHex) {
    const r = val.length === 7 ? val.slice(1, 3) : val.slice(1, 2).repeat(2)
    const g = val.length === 7 ? val.slice(3, 5) : val.slice(2, 3).repeat(2)
    const b = val.length === 7 ? val.slice(5, 7) : val.slice(3, 4).repeat(2)
    return (
      'rgba(' +
      parseInt(r, 16) +
      ', ' +
      parseInt(g, 16) +
      ', ' +
      parseInt(b, 16) +
      ', 1)'
    )
  } else {
    return val
  }
}

export const getContrastColor = (val: string): string => {
  if (!val.startsWith('rgb')) {
    if (['twitter', 'line', 'instagram', 'youtube'].includes(val)) {
      return colors.white
    }
    val = convertHexToRgba(convertNameToHex(val))
  }
  const arr: number[] = [...val.matchAll(/[0-9]+/g)].map((item) => +item[0])
  return (arr[0] * 299 + arr[1] * 587 + arr[2] * 114) / 1000 < 128
    ? colors.white
    : colors['gray-800']
}
