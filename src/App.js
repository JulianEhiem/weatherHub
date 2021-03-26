import React, { useState } from 'react';
import searchIcon from './icons/searchIcon.svg';

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

    return (
        <>
            <div className="appContainer">
                <div className="blur-container"></div>
                <div className="mainContainer">
                    <div className="theSection">
                        <div className="mainSection">
                            <div className="displayArea">
                                <div className="logo-container-2">
                                    <img src="./images/wh-logo.png" alt="Weather Hub Logo" className="logo-img-2"></img>
                                </div>
                                <div className="temp-city-group">
                                    <div className="city-temp">
                                        {/* {Math.round(weather.main.temp)} */}
                                        65
                                        <sup>&deg;</sup>F
                                    </div>
                                    <h2 className="city-name">
                                        {/* {Math.round(weather.main.temp)} */}
                                        New York
                                    </h2>
                                </div>
                            </div>
                            <div className="searchArea">
                                <div className="logo-container">
                                    <img src="./images/wh-logo.png" alt="Weather Hub Logo" className="logo-img"></img>
                                </div>
                                <div className="search-container">
                                 <input type="text"className="search"placeholder="Enter City"value={query}onChange={(e) => setQuery(e.target.value)}onKeyPress={search}/>
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

export default App;