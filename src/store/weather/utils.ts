export const getSufix = (unit: string) => {
  switch (unit) {
    case 'standard':
      return 'K'
    case 'metric':
      return '°C'
    case 'imperial':
      return '°F'
  }
}
