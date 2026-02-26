import { useWeather } from "../hooks/useWeather";
import { mapWeatherCodeToType } from "../utils/weatherMapper";
import { mapWeatherCodeToIcon } from "../utils/weatherIconMapper";
import { mapWeatherCodeToLabel } from "../utils/weatherLabelMapper";
import "../styles/home.css";

import windIcon from "../assets/icons/wind.png";
import humidityIcon from "../assets/icons/humidity.png";
import rainIcon from "../assets/icons/rainny.png";

const Home = () => {
  const { data, loading, error } = useWeather();

  if (loading) {
    return (
      <div className="home home--loading">
        <p>Cargando clima de Cochabamba...</p>
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

  const weatherType = mapWeatherCodeToType(
    data.current_weather.weathercode
  );

  const mainIcon = mapWeatherCodeToIcon(
    data.current_weather.weathercode
  );
  const currentHumidity =
  data.hourly?.relativehumidity_2m?.[0] ?? "--";

  const todayRainProbability =
  data.daily?.precipitation_probability_max?.[0] ?? "--";

  return (
    <div className={`home home--${weatherType}`}>
      <div className="home__container">
        <h1 className="home__title">Cochabamba</h1>

        {/* WEATHER CARD */}
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
            {data.daily.time.map((date, index) => {
              const icon = mapWeatherCodeToIcon(
                data.daily.weathercode[index]
              );

              return (
                <div className="forecast-card" key={date}>
                  <div className="forecast-card__day">
                    {date}
                  </div>

                  <div className="forecast-card__icon">
                    <img src={icon} alt="weather icon" />
                  </div>

                  <div className="forecast-card__temp">
                    {Math.round(
                      data.daily.temperature_2m_max[index]
                    )}
                    ° /{" "}
                    {Math.round(
                      data.daily.temperature_2m_min[index]
                    )}
                    °
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