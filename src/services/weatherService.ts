import type { WeatherResponse } from "../hooks/useWeather";

export const getWeather = async (
  lat: number,
  lon: number
): Promise<WeatherResponse> => {

  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=relativehumidity_2m&daily=temperature_2m_max,temperature_2m_min,weathercode,precipitation_probability_max&timezone=auto`
  );

  if (!response.ok) {
    throw new Error("Error obteniendo datos del clima");
  }

  const data: WeatherResponse = await response.json();
  return data;
};