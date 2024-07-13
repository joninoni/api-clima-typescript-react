import { formatTemperature } from "../../helpers"
import { Weather } from "../../hooks/useWeather"
import styles from "./WeatherDetails.module.css"

type WeatherDetailsProps = {
    weather : Weather
}

const WeatherDetails = ({weather} : WeatherDetailsProps) => {

    return (
        <div className={styles.container}>
            <h2>Clima de {weather.name}</h2>
            <p className={styles.current}>{formatTemperature(weather.main.temp)} &deg;C</p>
            <div className={styles.temperetures}>
                <p>Max: {formatTemperature(weather.main.temp_max)} &deg;C</p>
                <p>Min: {formatTemperature(weather.main.temp_min)} &deg;C</p>
                <p></p>
            </div>
        </div>
    )
}

export default WeatherDetails