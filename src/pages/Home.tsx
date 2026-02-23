import { useWeather } from "../hooks/useWeather";
import sunnyBg from "../assets/background/soleado.png";
import rainyBg from "../assets/background/lluvioso.png";
import cloudyBg from "../assets/background/nublado.png";
import stormBg from "../assets/background/tormenta.png";

const Home = () => {
  const { data, loading, error } = useWeather();

  if (loading) return <p>Cargando clima de Cochabamba...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No hay datos disponibles.</p>;

  const getBackground = (code: number) => {
    if (code === 0) return sunnyBg;
    if (code >= 1 && code <= 3) return cloudyBg;
    if (code >= 51 && code <= 67) return rainyBg;
    if (code >= 80) return stormBg;
    return sunnyBg;
  };

  const weatherCode = data.current_weather.weathercode;
  const backgroundImage = getBackground(weatherCode);

  return (
    <div
      style={{
        padding: "20px",
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white"
      }}
    >
      <h1>Cochabamba</h1>

      <section>
        <h2>Clima Actual</h2>
        <p>Temperatura: {data.current_weather.temperature}°C</p>
        <p>Viento: {data.current_weather.windspeed} km/h</p>
        <p>Dirección: {data.current_weather.winddirection}°</p>
      </section>

      <section>
        <h2>Pronóstico 7 días</h2>
        {data.daily.time.map((date, index) => (
          <div key={date}>
            <strong>{date}</strong>
            <div>
              Mín: {data.daily.temperature_2m_min[index]}°C |
              Máx: {data.daily.temperature_2m_max[index]}°C
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;