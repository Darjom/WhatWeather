export const searchCity = async (city: string) => {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=5&language=es&format=json`
  );

  if (!response.ok) {
    throw new Error("Error buscando ciudad");
  }

  const data = await response.json();
  return data.results || [];
};