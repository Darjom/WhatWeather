import { useWeather } from "../hooks/useWeather";
import { mapWeatherCodeToType } from "../utils/weatherMapper";
import "../styles/home.css";
import { mapWeatherCodeToIcon } from "../utils/weatherIconMapper";

import windIcon from "../assets/icons/wind.png";
import humidityIcon from "../assets/icons/humidity.png";
import rainIcon from "../assets/icons/rainny.png";

const Home = () => {
  const { data, loading, error } = useWeather();

  if (loading)
    return (
      <div className="home home--loading">
        <p className="home__loading">
          Cargando clima de Cochabamba...
        </p>
      </div>
    );

  if (error)
    return (
      <div className="home home--error">
        <p className="home__error">Error: {error}</p>
      </div>
    );

  if (!data) return null;

  const weatherType = mapWeatherCodeToType(
    data.current_weather.weathercode
  );


  const mainIcon = mapWeatherCodeToIcon(
    data.current_weather.weathercode
  );
  return (
    <div className={`home home--${weatherType}`}>
      
      <div className="home__container">
        <h1 className="home__title">Cochabamba</h1>

        <div className="weather-card">

          {/* BLOQUE SUPERIOR */}
          <div className="weather-card__top row">

            {/* IZQUIERDA */}
            <div className="weather-card__info col-md-6">

              <div className="weather-card__temperature">
                {data.current_weather.temperature}°C
              </div>

              <div className="weather-card__condition">
                {data.current_weather.weathercode}
              </div>


            </div>

            {/* DERECHA */}
            <div className="weather-card__icon col-md-6 d-flex justify-content-end align-items-center">
              <img
                src={mainIcon}
                alt="Estado del clima"
                className="weather-card__icon-image"
              />
            </div>

          </div>

          {/* BLOQUE INFERIOR */}
          <div className="weather-card__bottom row mt-4">

            <div className="col-1"></div>

            {/* Centro 3 columnas con iconos */}
            <div className="col-4 d-flex justify-content-between weather-card__stats">

              <div className="weather-card__stat">
                <img src={windIcon} alt="Viento" />
                <span>{data.current_weather.windspeed} km/h</span>
              </div>

              <div className="weather-card__stat">
                <img src={humidityIcon} alt="Humedad" />
                <span>--%</span>
              </div>

              <div className="weather-card__stat">
                <img src={rainIcon} alt="Precipitación" />
                <span>--%</span>
              </div>

            </div>

            <div className="col-1"></div>

          </div>

        </div>

        <div className="forecast-section container-fluid mt-5">
          <div className="row">


            {/* Bloque vacio */}
            <div className="col-sm-1"></div>

            {/* Contenido central */}
            <div className="col-sm-12">

              {/* Card título */}
              <div className="forecast-section__header">
                Pronóstico para 7 días
              </div>

              {/* Carrusel */}
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
                        <img
                          src={icon}
                          alt="weather icon"
                        />
                      </div>

                      <div className="forecast-card__temp">
                        <span>
                          {data.daily.temperature_2m_max[index]}°
                        </span>
                        <span>
                          /{data.daily.temperature_2m_min[index]}°
                        </span>
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </div>
        
        {/* Bloque vacío derecha */}
            <div className="col-sm-1"></div>
      </div>
    </div>
  );
};

export default Home;