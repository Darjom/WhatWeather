export const mapWeatherCodeToBackground = (code: number): string => {
  if (code === 800) return "sunny"
  if (code >= 801 && code <= 804) return "cloudy"
  if (code >= 500 && code <= 531) return "rainy"
  if (code >= 200 && code <= 232) return "storm"

  return "default"
}