import { useEffect, useState } from "react";
import { getWeather } from "../services/weatherService";
export interface WeatherResponse {
  current_weather: {
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
    time: string;
  };

  hourly: {
    time: string[];
    relativehumidity_2m: number[];
  };

  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weathercode: number[];
    precipitation_probability_max: number[];
  };
}
export const useWeather = () => {
  const [data, setData] = useState<WeatherResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const weather = await getWeather();
        setData(weather);
      } catch (err: unknown) {
        if (err instanceof Error){
            setError(err.message)
        }else{
            setError("Unexpected Error")
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
