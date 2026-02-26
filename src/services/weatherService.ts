export const getWeather = async () => {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=-17.38&longitude=-66.15&current_weather=true&hourly=relativehumidity_2m&daily=temperature_2m_max,temperature_2m_min,weathercode,precipitation_probability_max&timezone=auto"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }

  return response.json();
};