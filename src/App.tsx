import styles from "./App.module.css"
import Form from "./components/Form/Form"
import WeatherDetails from "./components/WeatherDetails/WeatherDetails"
import useWeather from "./hooks/useWeather"

function App() {

   const {weather,fetchWeather,hasWeatherData} = useWeather()

    return (
        <>
            <h1 className={styles.title}>Buscador del clima</h1>
            <div className={styles.container}>
                <Form
                   fetchWeather = {fetchWeather} 
                />

                {hasWeatherData && <WeatherDetails weather = {weather}/> }
            </div>
        </>
  )
}

export default App
