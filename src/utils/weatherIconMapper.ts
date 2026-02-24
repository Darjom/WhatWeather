import sunnyIcon from "../assets/icons/sunny.png";
import cloudyIcon from "../assets/icons/cloud.png";
import rainyIcon from "../assets/icons/rain.png";
import stormIcon from "../assets/icons/storm.png";

export const mapWeatherCodeToIcon = (code: number): string => {
  if (code === 0) return sunnyIcon;
  if (code >= 1 && code <= 3) return cloudyIcon;
  if (code >= 51 && code <= 67) return rainyIcon;
  if (code >= 80) return stormIcon;

  return sunnyIcon;
};