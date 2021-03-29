import React, { useState } from 'react';
import searchIcon from './icons/searchIcon.svg';
import backupimage from './images/clouds.jpg';
import Pictures from './components/Pictures'


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
 
    const errorMode = () => {
    if (weather.main){
        setTimeout(() => {
            document.querySelector('.searchNew').style.borderBottom="1px solid red"
            document.querySelector('.error-box2').style.display="flex"
        }, 0);
        setTimeout(() => {
            document.querySelector('.searchNew').style.borderBottom="1px solid white"
            document.querySelector('.error-box2').style.display="none"
        }, 1500);
    } else {
        setTimeout(() => {
            document.querySelector('.error-box').style.display="flex"
            document.querySelector('.search').style.borderBottom="3px solid red"
        }, 0);
        setTimeout(() => {
            document.querySelector('.error-box').style.display="none"
            document.querySelector('.search').style.borderBottom="none"
        }, 1500);
    }
    }

    const clickSearch = async () => {
        try{
            const data = await fetchWeather(query);

            setWeather(data);
            setQuery('');
        } catch(err){
            errorMode();
        }
    }
    let currentImage;


    if (weather.main){
        let currentIcon = weather.weather[0].icon; 
        const image = () =>{
            switch(currentIcon){
                case '01n':
                    currentImage = Pictures[0].url;
                break;
                case '01d':
                    currentImage = Pictures[1].url;
                break;
                case '02n':
                    currentImage = Pictures[2].url;
                break;
                case '02d':
                    currentImage = Pictures[3].url;
                break;
                case '03n':
                    currentImage = Pictures[4].url;
                break;
                case '03d':
                    currentImage = Pictures[5].url;
                break;
                case '04n':
                    currentImage = Pictures[6].url;
                break;
                case '04d':
                    currentImage = Pictures[7].url;
                break;
                case '09n':
                    currentImage = Pictures[8].url;
                break;
                case '09d':
                    currentImage = Pictures[9].url;
                break;
                case '10n':
                    currentImage = Pictures[10].url;
                break;
                case '10d':
                    currentImage = Pictures[11].url;
                break;
                case '11n':
                    currentImage = Pictures[12].url;
                break;
                case '11d':
                    currentImage = Pictures[13].url;
                break;
                case '13n':
                    currentImage = Pictures[14].url;
                break;
                case '13d':
                    currentImage = Pictures[15].url;
                break;
                case '50n':
                    currentImage = Pictures[16].url;
                break;
                case '50d':
                    currentImage = Pictures[17].url;
                break;
                default:
                    currentImage = backupimage;

            }
        }
        image();
        
        return (
            <>
                <div className="appContainer">
                    <div className="blur-container"></div>
                    <div className="mainContainer">
                        <div className="theSection">
                            <div className="mainSection">
                                <div className="displayArea" style={{backgroundImage: `url(${currentImage})`}}>
                                    <div className="logo-container-2">
                                        <img src="./images/wh-icon.png" alt="Weather Hub Logo" className="logo-img-2"></img>
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
                                        <input type="text"className="searchNew"placeholder="Enter City e.g. London"value={query}onChange={(e) => setQuery(e.target.value)}onKeyPress={search}/>
                                        <button className="search-btn" onClick={clickSearch}>
                                         <img src={searchIcon} alt="Search Icon"/>
                                        </button>
                                        <div className="error-box2" id="errorBox2">
                                         Please enter a valid city
                                        </div>
                                    </div>
                                    <div className="details-container">
                                    <div className="weather-details">
                                    <h2 className="section-subtitle">{weather.name}, {weather.sys.country}</h2>
                                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                                        <p className="section-text">
                                            {weather.weather[0].description}
                                        </p>
                                    </div>
                                    <div className="weather-deets">
                                        <ul className="weather-deets-list">
                                            <li className="weather-datapoint">Cloud cover: {weather.clouds.all}%</li>
                                            <li className="weather-datapoint">Humidity: {weather.main.humidity}%</li>
                                            <li className="weather-datapoint">Feels Like: {weather.main.feels_like}&deg;F</li>
                                            <li className="weather-datapoint">Wind Speed: {weather.wind.speed} mph</li>
                                            <li className="weather-datapoint">Min Temp: {weather.main.temp_min}&deg;F</li>
                                            <li className="weather-datapoint">Max Temp: {weather.main.temp_max}&deg;F</li>
                                        </ul>
                                    </div>
                                    </div>


                                    {/* <div className="cloud-cover weather-datapoint">
                                        <h3 className="data-title">Cloud Cover:</h3>
                                        <h3 className="data-result">{weather.clouds.all}%</h3>
                                    </div>
                                    <div className="humidity weather-datapoint">
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
                                     <input type="text"className="search"id="autocomplete" placeholder="Enter City e.g. London"value={query}onChange={(e) => setQuery(e.target.value)}onKeyPress={search}/>
                                     <button className="search-btn" onClick={clickSearch}>
                                         <img src={searchIcon} alt="Search Icon"/>
                                     </button>
                                     <div className="error-box" id="errorBox">
                                         Please enter a valid city
                                     </div>
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