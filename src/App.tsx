import styles from "./App.module.css"
import Form from "./components/Form/Form"
import Spinner from "./components/Spinner/Spinner"
import WeatherDetails from "./components/WeatherDetails/WeatherDetails"
import useWeather from "./hooks/useWeather"

function App() {

   const {weather,fetchWeather,hasWeatherData,loading} = useWeather()

    return (
        <>
            <h1 className={styles.title}>Buscador del clima</h1>
            <div className={styles.container}>
                <Form
                   fetchWeather = {fetchWeather} 
                />
                {loading && <Spinner/>}
                {hasWeatherData && <WeatherDetails weather = {weather}/> }
            </div>
        </>
  )
}

export default App
