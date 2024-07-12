import { Weather } from "../../hooks/useWeather"

type WeatherDetailsProps = {
    weather : Weather
}

const WeatherDetails = ({weather} : WeatherDetailsProps) => {

    const isEmpty = weather.name !== ""

    return (
        <div>
            {isEmpty && 
                <>
                    <p>{weather.main.temp}</p>
                    <p>{weather.name}</p>
                </>
            }
            
        </div>
    )
}

export default WeatherDetails