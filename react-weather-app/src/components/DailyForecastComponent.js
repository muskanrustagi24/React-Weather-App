import React from "react";
import "./Forecast.scss";

class DailyForecastComponent extends React.Component {
  render() {
    const items = this.props.forecast.map((f, i) => {
      const image = {
        url: `http://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`,
        alt: `Image of  ${f.weather[0].description}`,
      };
      const description = f.weather[0].description;
      const unixTimestamp = f.dt;
      let date = new Date(unixTimestamp * 1000).getDate();
      let month = new Date(unixTimestamp * 1000).getMonth() + 1;
      let year = new Date(unixTimestamp * 1000).getFullYear();
      console.log(new Date(unixTimestamp * 1000));

      return (
        <div key={i} className="forecast-item">
          <p className="forecast-item__time">
            {date}-{month}-{year}
          </p>
          <p className="forecast-item__temp">
            {f.temp.min} <span className="forecast-item__degree">°</span>
          </p>
          <img className="forecast-item__img" src={image.url} alt={image.alt} />
          <p className="forecast-item__description">{description}</p>
        </div>
      );
    });

    return (
      <div className="forecast">
        <h3 className="forecast__title">Daily Forecast</h3>
        <div className="forecast-items">{items}</div>
      </div>
    );
  }
}

export default DailyForecastComponent;
