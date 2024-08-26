import worldCountries from 'world-countries'

export const COUNTRIES = worldCountries.reduce((acc, country) => {
  acc[country.area] = country.name.common
  return acc
}, {} as Record<number, string>)

console.log(COUNTRIES)