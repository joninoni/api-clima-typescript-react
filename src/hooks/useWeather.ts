import axios from "axios"
// import {z} from "zod"
import { useMemo, useState } from "react"
import {object,string,number,InferOutput,parse,array} from "valibot"
import { SearchType} from "../types"


//Type Guards
// const weatherResponse = (weather : unknown) => {
//      return(
//         Boolean(weather) &&
//         typeof weather === "object" &&
//         typeof (weather as Weather).name === "string" &&
//         typeof (weather as Weather).main.temp === "number" &&
//         typeof (weather as Weather).main.temp_max === "number" &&
//         typeof (weather as Weather).main.temp_min === "number"
//     )
// }

//Zod
// const weatherSchema = z.object({
//     name : z.string(),
//     main : z.object({
//         temp : z.number(),
//         temp_max : z.number(),
//         temp_min : z.number(),
//     })
// })
// type Weather = z.infer<typeof weatherSchema>

//Valibot
const weatherSchema = object({
    name : string(),
    main : object({
        temp : number(),
        temp_max : number(),
        temp_min : number(),
    })
})
export type Weather = InferOutput<typeof weatherSchema>

const geoDataSchema = array(
    object({
        lat : number(),
        lon : number()
    })
)
// type GeoData = InferOutput<typeof geoDataSchema>

const useWeather = () => {

    const initialState = {
        name : "",
        main : {
            temp : 0,
            temp_max : 0,
            temp_min:0,
        }
    }

    const [weather,seWeather] = useState<Weather>(initialState)

    const [loading,setLoading] = useState(false)//para mostrar el spinner u ocultarlo

    const [notFound,setNotFound] = useState("")//para guardar un error en caso de que no se encuentre la ciudad

    const hasWeatherData = useMemo( () => weather.name ,[weather.name])

    const fetchWeather = async (search : SearchType ) => {

        const apiKey = import.meta.env.VITE_API_KEY;

        setLoading(true)
        seWeather(initialState)
        setNotFound("")

        try {
            const url = `https://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${apiKey}`

            const{ data }= await axios(url)
            const resultData = parse(geoDataSchema,data)

            if(!resultData[0]){
                setNotFound("Ciudad no encontrada")
                return
            }

            const lat = data[0].lat
            const lon = data[0].lon
            
            //haciendo el segundo llamado a la api del clima
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`

            //Caster los datos
            // const {data : weatherResult} = await axios<Weather>(weatherUrl)
            // console.log(weatherResult.name)
            // console.log(weatherResult.main.temp_max)

            // Type Guards
            // const {data : weatherResult} = await axios(weatherUrl)
            // const result = weatherResponse(weatherResult)
            // if(result){
            //     console.log("resultado aprobado");
            // }
            // else{
            //     console.log("resultado incorrecto");
            // }

            //Zod
            // const {data : weatherResult} = await axios(weatherUrl)
            // const result = weatherSchema.safeParse(weatherResult)
            // if(result.success){
            //     console.log("resultado aprobado");
            // }
            // else{
            //     console.log("resultado incorrecto");
            // }

            //Valibot
            const {data : weatherResult} = await axios(weatherUrl)
            const result = parse(weatherSchema,weatherResult)
             if(result){
                seWeather(result)
            }
            else{
                console.log("resultado incorrecto");
            }
        }
        catch (error) {
            console.log(error);
        }
        finally{
            setLoading(false)
        }
    }

    return {
        weather,
        loading,
        notFound,
        fetchWeather,
        hasWeatherData,
    }
}

export default useWeather