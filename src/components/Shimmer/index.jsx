import React from "react";
import "../../pages/Weather/index.scss";
import "./index.scss";
const Shimmer = () => {
  return (
    <div className="weather-wrapper">
      <div className="weather-card">
        <div className="weather-body">
          <div className="WeatherCardWrapper">
            {Array.apply(null, { length: 10 }).map((e, i) => (
              <div className="shimmerweatherDetailsCard" key={i}>
                <div className="flexContainer"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
