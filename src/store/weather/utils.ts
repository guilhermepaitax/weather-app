export const getSuffix = (unit: string) => {
  switch (unit) {
    case 'standard':
      return 'K'
    case 'metric':
      return '°C'
    case 'imperial':
      return '°F'
  }
}

export const getSuffixSpeed = (unit: string) => {
  switch (unit) {
    case 'standard':
      return 'm/s'
    case 'metric':
      return 'm/s'
    case 'imperial':
      return 'mi/h'
  }
}

export const getLanguage = (lang: string) => {
  switch (lang) {
    case 'en':
      return 'en-US'
    case 'pt_br':
      return 'pt-BR'
  }
}
