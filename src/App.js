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

    if (weather.main){
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
                                        <h3 className="section-subtitle">Weather Details</h3>
                                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim modi eos nemo officiis! Ducimus quisquam ex, amet tenetur adipisci cum explicabo dignissimos est, provident reiciendis, ullam voluptates sequi dolore!

                                     </p>
                                    </div>
                                    <div className="cloud-cover">
                                        <h3 className="data-title">Cloud Cover</h3>
                                        <h3 className="data-result">88%</h3>

                                    </div>
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
    
}

export default App;