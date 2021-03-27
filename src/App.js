import React, { useState } from 'react';
import searchIcon from './icons/searchIcon.svg';
import testback from './images/clouds.jpg';
import n01 from './images/01n-700x639.jpg';

import { fetchWeather } from './api/fetchWeather';
import './App.css';

const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    
    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await fetchWeather(query);

            setWeather(data);
            setQuery('');
        }
    }

    if (weather.main){
        return (
            <>
                <div className="appContainer">
                    <div className="blur-container"></div>
                    <div className="mainContainer">
                        <div className="theSection">
                            <div className="mainSection">
                                <div className="displayArea" style={{backgroundImage: `url(${n01})`}}>
                                    <div className="logo-container-2">
                                        <img src="./images/wh-logo.png" alt="Weather Hub Logo" className="logo-img-2"></img>
                                    </div>
                                    
                                    <div className="temp-city-group">
                                        <div className="city-temp">
                                            {Math.round(weather.main.temp)}
                                            <sup>&deg;</sup>F
                                        </div>
                                        <h2 className="city-name">
                                            {weather.name}
                                        </h2>
                                    </div>  
                                </div>
                                <div className="secondarySearchArea">
                                    <div className="newSearch">
                                        <input type="text"className="searchNew"placeholder="Enter City"value={query}onChange={(e) => setQuery(e.target.value)}onKeyPress={search}/>
                                        <button className="search-btn">
                                         <img src={searchIcon} alt="Search Icon"/>
                                        </button>
                                    </div>
                                    <div className="weather-details">
        <h2 className="section-subtitle">{weather.name}, {weather.sys.country}</h2>
                                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                                        <p className="section-text">
                                            
                                            {weather.weather[0].description}
                                        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate non sint odit ipsam et cum iste fuga, ad tempora veniam dolorem commodi magni vero illo iure odio neque architecto. Eligendi! */}
                                        </p>
                                    </div>
                                    <div className="cloud-cover weather-datapoint">
                                        <h3 className="data-title">Cloud Cover:</h3>
                                        <h3 className="data-result">{weather.clouds.all}%</h3>
                                    </div>
                                    {/* <div className="humidity weather-datapoint">
                                        <h3 className="data-title">Humidity:</h3>
                                        <h3 className="data-result">{weather.main.humidity}%</h3>
                                    </div>
                                    <div className="wind-speed weather-datapoint">
                                        <h3 className="data-title">Wind speed:</h3>
                                        <h3 className="data-result">88%</h3>
                                    </div>
                                    <div className="feels-like weather-datapoint">
                                        <h3 className="data-title">Feels like:</h3>
                                        <h3 className="data-result"> {Math.round(weather.main.feels_like)}<sup>&deg;</sup>F </h3>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="appContainer">
                    <div className="blur-container"></div>
                    <div className="mainContainer">
                        <div className="theSection">
                            <div className="mainSection">
                                <div className="searchArea">
                                    <div className="logo-container">
                                        <img src="./images/wh-logo.png" alt="Weather Hub Logo" className="logo-img"></img>
                                    </div>
                                    <div className="search-container">
                                     <input type="text"className="search"id="autocomplete" placeholder="Enter City"value={query}onChange={(e) => setQuery(e.target.value)}onKeyPress={search}/>
                                     <button className="search-btn">
                                         <img src={searchIcon} alt="Search Icon"/>
                                     </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    
    
            // <div className="main-container">
            //     <div className= "logo-container">
            //         <img src="./images/wh-logo.png" alt="Weather Hub Logo" className="logo-img"></img>
            //     </div>
            //     <div className="search-container">
            //     <input type="text"className="search"placeholder="Enter City"value={query}onChange={(e) => setQuery(e.target.value)}onKeyPress={search}/>
            //     </div>
            //     {weather.main && (
            //         <div className= 'mainContainer'>
            //         <div className="blur">
            //         </div>
            //         <div className="city">
            //             <h2 className="city-name">
            //                 <span>{weather.name}</span>
            //                 <sup>{weather.sys.country}</sup>
            //             </h2>
            //             <div className="city-temp">
            //                 {Math.round(weather.main.temp)}
            //                 <sup>&deg;F</sup>
            //             </div>
            //             <div className="info">
            //                 <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
            //                 <p className='weather-text'>{weather.weather[0].description}</p>
            //             </div>
            //         </div>
            //         </div>
                    
            //     )}
            // </div>
        );
    }
    
}

export default App;