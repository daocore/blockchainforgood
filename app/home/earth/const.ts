import worldCountries from 'world-countries'

export const COUNTRIES = Object.assign({}, worldCountries.reduce((acc, country) => {
  acc[country.area] = country.name.common
  return acc
}, {} as Record<number, string>), {
  36193: "Taiwan Province of China"
})


export enum SPECIAL_AREA {
  "Taiwan" = 36193,
  "South Korea" = 100210,
  "North Korea" = 120538,
  "Singapore" = 710,
  "United Arab Emirates" = 83600,
  "Japan" = 377930,
}