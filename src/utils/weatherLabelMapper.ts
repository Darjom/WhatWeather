export const mapWeatherCodeToLabel = (code: number): string => {
  if (code === 0) return "Soleado";
  if (code >= 1 && code <= 3) return "Parcialmente Nublado";
  if (code >= 51 && code <= 67) return "Lluvioso";
  if (code >= 80) return "Tormenta";
  return "Clima variable";
};

