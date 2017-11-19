export type Forecast = {
  location: {
    city: string,
    region: string,
    country: string
  },
  condition: {
    code: string,
    date: string,
    temp: string,
    text: string
  },
  forecast: {
    code: string,
    date: string,
    day: string,
    high: string,
    low: string,
    text: string
  }[]
}