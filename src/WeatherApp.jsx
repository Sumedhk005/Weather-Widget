import React, { useState } from 'react';
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 43.05,
        humidity: 56,
        temp: 36.05,
        tempMax: 36.05,
        tempMin: 36.05,
        weather: "haze",
    });
 
    const updateWeatherInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Weather App By SK</h1>
            <SearchBox updateWeatherInfo={updateWeatherInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}
