import { useState, useEffect } from "react";
import { useWeather } from "../hooks/useWeather";
import { searchCity } from "../services/geocodingService";

import { mapWeatherCodeToType } from "../utils/weatherMapper";
import { mapWeatherCodeToIcon } from "../utils/weatherIconMapper";
import { mapWeatherCodeToLabel } from "../utils/weatherLabelMapper";

import windIcon from "../assets/icons/wind.png";
import humidityIcon from "../assets/icons/humidity.png";
import rainIcon from "../assets/icons/rainny.png";

import type { CityResult } from "../types/geocoding";

import "../styles/home.css";

const Home = () => {
   
  /* ESTADOS PRINCIPALES  */

  const [latitude, setLatitude] = useState(-17.3895);
  const [longitude, setLongitude] = useState(-66.1568);
  const [cityName, setCityName] = useState("Cochabamba");

  const { data, loading, error } = useWeather(latitude, longitude);

  /* BUSCADOR             */

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<CityResult[]>([]);


  useEffect(() => {
    const controller = new AbortController();

    const fetchSuggestions = async () => {
      if (query.length < 3) {
        return; // NO setState aquí
      }

      try {
        const results = await searchCity(query);
        setSuggestions(results);
      } catch {
        setSuggestions([]);
      }
    };

    const timeout = setTimeout(fetchSuggestions, 400);

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [query]);

  /* FORMATOS             */

  const formatDayName = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.toLocaleDateString("es-ES", {
      weekday: "long",
    });
    return day.charAt(0).toUpperCase() + day.slice(1);
  };

  /* LOADING / ERROR      */

  if (loading) {
    return (
      <div className="home home--loading">
        <p>Cargando clima...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="home home--error">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!data) return null;

  /* DATOS CLIMA ACTUAL   */

  const weatherType = mapWeatherCodeToType(
    data.current_weather.weathercode
  );

  const mainIcon = mapWeatherCodeToIcon(
    data.current_weather.weathercode
  );

  // Humedad actual
  const currentHour = data.current_weather.time.slice(0, 13); 
  const currentIndex = data.hourly.time.findIndex(
    (t) => t.startsWith(currentHour)
  );

  const currentHumidity =
    currentIndex !== -1 && currentIndex !== undefined
      ? data.hourly.relativehumidity_2m[currentIndex]
      : "--";
  
  // Probabilidad lluvia hoy
  const todayRainProbability =
    data.daily?.precipitation_probability_max?.[0] ?? "--";

  /*Contenido*/

  return (
    <div className={`home home--${weatherType}`}>
      <div className="home__container">

        {/* HEADER SUPERIOR */}
        <div className="home__header">
          <div className="row align-items-center">

            {/* BUSCADOR */}
            <div className="col-md-6 col-12 mb-3 mb-md-0 home__search-wrapper">
              <div className="home__search input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar ciudad..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>

              {/* SUGERENCIAS */}
              {suggestions.length > 0 && (
                <ul className="home__suggestions">
                  {suggestions.map((city) => (
                    <li
                      key={city.id}
                      onClick={() => {
                        setLatitude(city.latitude);
                        setLongitude(city.longitude);
                        setCityName(city.name);
                        setQuery("");
                        setSuggestions([]);
                      }}
                    >
                      {city.name}, {city.country}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* CIUDAD */}
            <div className="col-md-6 col-12 text-md-end text-center">
              <div className="home__location">
                <i className="bi bi-geo-alt-fill"></i>
                <span>{cityName}</span>
              </div>
            </div>

          </div>
        </div>

        <div className="weather-card">

          <div className="weather-card__top">

            {/* IZQUIERDA */}
            <div className="weather-card__info">

              <div className="weather-card__temperature">
                {Math.round(data.current_weather.temperature)}°C
              </div>

              <div className="weather-card__condition">
                {mapWeatherCodeToLabel(
                  data.current_weather.weathercode
                )}
              </div>

              <div className="weather-card__updated">
                Última actualización:{" "}
                {data.current_weather.time.slice(11, 16)}
              </div>

            </div>

            {/* DERECHA */}
            <div className="weather-card__icon-container">
              <img
                src={mainIcon}
                alt="Estado del clima"
                className="weather-card__icon-image"
              />
            </div>

          </div>

          {/* BLOQUE INFERIOR */}
          <div className="weather-card__bottom">
            <div className="weather-card__stats">

              <div className="weather-card__stat">
                <img src={windIcon} alt="Viento" />
                <span>{data.current_weather.windspeed} km/h</span>
              </div>

              <div className="weather-card__stat">
                <img src={humidityIcon} alt="Humedad" />
                <span>{currentHumidity}%</span>
              </div>

              <div className="weather-card__stat">
                <img src={rainIcon} alt="Precipitación" />
                <span>{todayRainProbability}%</span>
              </div>

            </div>
          </div>

        </div>

        {/* FORECAST */}
        <div className="forecast-section">
          <div className="forecast-section__header">
            Pronóstico para 7 días
          </div>

          <div className="forecast-section__carousel">
            {data.daily.time.map((date: string, index: number) => {
              const icon = mapWeatherCodeToIcon(
                data.daily.weathercode[index]
              );

              return (
                <div className="forecast-card" key={date}>

                  <div className="forecast-card__day">
                    {formatDayName(date)}
                  </div>

                  <div className="forecast-card__icon">
                    <img src={icon} alt="weather icon" />
                  </div>

                  <div className="forecast-card__temp">
                    <span className="forecast-card__temp-max">
                      {Math.round(
                        data.daily.temperature_2m_max[index]
                      )}°
                    </span>

                    <span className="forecast-card__temp-min">
                      / {Math.round(
                        data.daily.temperature_2m_min[index]
                      )}°
                    </span>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;