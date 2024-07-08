import axios from "axios"
import { SearchType } from "../types"

const useWeather = () => {
    const fetchWeather = async (search : SearchType ) => {

        const apiKey = import.meta.env.VITE_API_KEY;

        try {
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${apiKey}`; 

            const{ data }= await axios(url)

            const lat = data[0].lat
            const lon = data[0].lon

            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`

            const {data : weatherResult} = await axios(weatherUrl)
            console.log(weatherResult);
        } 
        catch (error) {
            console.log(error);        
        }
    }

    return {
        fetchWeather
    }
}

export default useWeather