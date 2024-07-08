import axios from "axios"
import { SearchType } from "../types"

const useWeather = () => {
    const fetchWeather = async (search : SearchType ) => {

        const apiKey = import.meta.env.VITE_API_KEY;

        try {
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${apiKey}`; 
            const{ data }= await axios(url)
            console.log(data);
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