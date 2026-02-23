export const getWeather = async () => {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=-17.3895&longitude=-66.1568&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }

  return response.json();
};