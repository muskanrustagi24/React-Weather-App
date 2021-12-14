import styled from "styled-components";
import { WeatherIcons } from "../App";
import ForecastComponent from "./ForecastComponent";
import DailyForecastComponent from "./DailyForecastComponent";
import { useState } from "react";

export const WeatherInfoIcons = {
  sunset: "/icons/temp.svg",
  sunrise: "/icons/temp.svg",
  humidity: "/icons/humidity.svg",
  wind: "/icons/wind.svg",
  pressure: "/icons/pressure.svg",
};

const WeatherContainer = styled.div`
  display: flex;
  width: 90%;
  margin: 20px auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Condition = styled.span`
  margin: 20px auto;
  text-transform: capitalize;
  font-size: 20px;
  color: black;
  & span {
    font-size: 28px;
  }
`;

const WeatherIcon = styled.img`
  width: 150px;
  height: 150px;
  margin: 5px auto;
`;

const Location = styled.span`
  margin: 15px auto;
  text-transform: capitalize;
  font-size: 28px;
  font-weight: bold;
  color: black;
`;

const WeatherInfoLabel = styled.span`
  margin: 20px 25px 10px;
  text-transform: capitalize;
  text-align: start;
  width: 90%;
  font-weight: bold;
  font-size: 20px;
  color: black;
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const InfoIcon = styled.img`
  width: 100px;
  height: 100px;
`;

const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  color: black;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const WeatherInfoComponent = (props) => {
  const { name, value } = props;
  return (
    <InfoContainer>
      <InfoIcon src={WeatherInfoIcons[name]} />
      <InfoLabel>
        {value}
        <span>{name}</span>
      </InfoLabel>
    </InfoContainer>
  );
};

const WeatherComponent = (props) => {
  const { weather, city } = props;
  const [showHourlyForecast, setShowHourlyForecast] = useState(false);

  const handleHourlyForecast = () => {
    setShowHourlyForecast({
      showHourlyForecast: !showHourlyForecast
    });
  };
 
  console.log(showHourlyForecast);

  const isDay = weather?.current?.weather[0].icon?.includes("d");
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()}`;
  };
  return (
    <>
      <WeatherContainer>
        <Condition>
          <span>{`${Math.floor(weather?.current?.temp)}°C`}</span>
          {`  |  ${weather?.current?.weather[0].description}`}
        </Condition>
        <Location>{city}</Location>
        <WeatherIcon src={WeatherIcons[weather?.current?.weather[0].icon]} />
      </WeatherContainer>

      <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
      <WeatherInfoContainer>
        <WeatherInfoComponent
          name={isDay ? "sunset" : "sunrise"}
          value={`${getTime(weather?.current[isDay ? "sunset" : "sunrise"])}`}
        />
        <WeatherInfoComponent
          name={"humidity"}
          value={weather?.current?.humidity}
        />
        <WeatherInfoComponent
          name={"wind"}
          value={weather?.current?.wind_speed}
        />
        <WeatherInfoComponent
          name={"pressure"}
          value={weather?.current?.pressure}
        />
        <button onClick={handleHourlyForecast}>Daily / Hourly Forecast</button>
        {showHourlyForecast
          ? weather.hourly.length > 0 && (
              <ForecastComponent forecast={weather.hourly} />
            )
          : weather.daily.length > 0 && (
              <DailyForecastComponent forecast={weather.daily} />
            )}
      </WeatherInfoContainer>
    </>
  );
};

export default WeatherComponent;
