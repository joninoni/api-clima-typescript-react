import styles from "./App.module.css"
import Alert from "./components/Alert/Alert"
import Form from "./components/Form/Form"
import Spinner from "./components/Spinner/Spinner"
import WeatherDetails from "./components/WeatherDetails/WeatherDetails"
import useWeather from "./hooks/useWeather"

function App() {

   const {weather,fetchWeather,hasWeatherData,loading,notFound} = useWeather()

    return (
        <>
            <h1 className={styles.title}>Buscador del clima</h1>
            <div className={styles.container}>
                <Form
                   fetchWeather = {fetchWeather} 
                />

                {notFound && <Alert>{notFound}</Alert>}
                {loading && <Spinner/>}
                {hasWeatherData && <WeatherDetails weather = {weather}/> }
            </div>
        </>
  )
}

export default App
