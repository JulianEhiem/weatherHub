

export const DisplayArea = () => {
    return (
        <div className="temp-city-group">
            <div className="city-temp">
                {Math.round(weather.main.temp)}
                <sup>&deg;</sup>F
            </div>
            <h2 className="city-name">
                {weather.name}
            </h2>
        </div>
    );
}