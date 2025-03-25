import React from 'react'
import weatherCloudy from '../assets/weather-cloudy.png'

const WeatherCard = ({ weatherDetails }) => {
  console.log(weatherDetails);

  return (
    <div className='weather-section'>
      <div className="weather-card">
        <div className="weather-temp-c">
          {weatherDetails.current.temp_c}<sup>o</sup>
        </div>
        <div className="weather-info">
          <span>
            🌈 {weatherDetails.current.humidity}
          </span>
          <span>
            ⛅ {weatherDetails.current.cloud}
          </span>
        </div>
        <div className="weather-place">
          {weatherDetails.location.name}, {weatherDetails.location.region}, {weatherDetails.location.country}
        </div>
        <div className="weather-avatar">
          <img src={weatherCloudy} alt="" />
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
