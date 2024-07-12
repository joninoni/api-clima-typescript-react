import { formatTemperature } from "../../helpers"
import { Weather } from "../../hooks/useWeather"

type WeatherDetailsProps = {
    weather : Weather
}

const WeatherDetails = ({weather} : WeatherDetailsProps) => {

    return (
        <div>
            <h2>Clima de {weather.name}</h2>
            <p>Temperatura actual {formatTemperature(weather.main.temp)} &deg;C</p>
            <div>
                <p>Temperatura maxima {formatTemperature(weather.main.temp_max)} &deg;C</p>
                <p>Temperatura minima {formatTemperature(weather.main.temp_min)} &deg;C</p>
                <p></p>
            </div>
        </div>
    )
}

export default WeatherDetails