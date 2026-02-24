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