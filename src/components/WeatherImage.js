import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faCloudRain,
  faSun,
  faSmog,
  faRainbow
} from "@fortawesome/free-solid-svg-icons";

const Icon = ({ weatherType }) => {
  switch(weatherType) {
    case 'Clouds':
      return <FontAwesomeIcon icon={faCloud} />
    case 'Rainy':
      return <FontAwesomeIcon icon={faCloudRain} />
    case 'Clear':
      return <FontAwesomeIcon icon={faSun} />
    case 'Mist':
      return <FontAwesomeIcon icon={faSmog} />
    default:
      return <FontAwesomeIcon icon={faRainbow} />
  }
};

function WeatherImage({ weatherType }) {
  return (
    <div className="WeatherInfo_Image">
      <Icon weatherType={weatherType}/>
    </div>
  );
}

export default WeatherImage;
