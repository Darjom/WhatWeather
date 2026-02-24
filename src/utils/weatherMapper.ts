
export const mapWeatherCodeToType = (code: number): string => {
  if (code === 0) return "sunny";
  if (code >= 1 && code <= 3) return "cloudy";
  if (code >= 51 && code <= 67) return "rainy";
  if (code >= 80) return "storm";

  return "sunny";
};