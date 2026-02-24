import { useWeather } from "../hooks/useWeather";
import { mapWeatherCodeToType } from "../utils/weatherMapper";
import "../styles/home.css";


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

  // 🔥 ahora sí podemos usar data con seguridad
  const weatherType = mapWeatherCodeToType(
    data.current_weather.weathercode
  );

  return (
    <div className={`home home--${weatherType}`}>
      
      <div className="home__container">
        <h1 className="home__title">Cochabamba</h1>

        <div className="home__card-wrapper container-fluid">
          <div className="row">
            
            <div className="col-sm-1"></div>

            {/* Bloque central 10 columnas */}
            <div className="col-sm-10">

              <div className="weather-card">

                {/* BLOQUE SUPERIOR */}

                <div className="weather-card__top row">

                  {/* IZQUIERDA */}
                  <div className="weather-card__info col-md-6">

                    <div className="weather-card__temperature">
                      20°C
                    </div>

                    <div className="weather-card__condition">
                      Parcialmente Nublado
                    </div>

                    <div className="weather-card__updated">
                      Última actualización: 13:30
                    </div>

                  </div>

                  {/* DERECHA */}
                  <div className="weather-card__icon col-md-6 d-flex justify-content-end align-items-center">
                    <img
                      src="/assets/icons/cloud-sun.png"
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
                      <img src="/assets/icons/wind.png" alt="Viento" />
                      <span>20 km/h</span>
                    </div>

                    <div className="weather-card__stat">
                      <img src="/assets/icons/humidity.png" alt="Humedad" />
                      <span>8%</span>
                    </div>

                    <div className="weather-card__stat">
                      <img src="/assets/icons/rain.png" alt="Precipitación" />
                      <span>23%</span>
                    </div>

                  </div>

                  {/* Espacio 4 */}
                  <div className="col-1"></div>

                </div>

              </div>
            </div>

            {/* Bloque vacío derecha */}
            <div className="col-sm-1"></div>

          </div>
        </div>

        <section className="home__current">
          <h2 className="home__section-title">Clima actual</h2>

          <p className="home__temperature">
            {data.current_weather.temperature}°C
          </p>

          <p className="home__wind">
            {data.current_weather.windspeed} km/h
          </p>
        </section>

        <section className="home__forecast">
          <h2 className="home__section-title">
            Pronóstico 7 días
          </h2>

          <div className="home__forecast-grid">
            {data.daily.time.map((date, index) => (
              <div className="home__forecast-card" key={date}>
                <span className="home__forecast-date">
                  {date}
                </span>

                <span className="home__forecast-min">
                  {data.daily.temperature_2m_min[index]}°C
                </span>

                <span className="home__forecast-max">
                  {data.daily.temperature_2m_max[index]}°C
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;