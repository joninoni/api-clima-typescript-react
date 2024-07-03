import {useState,ChangeEvent, FormEvent} from 'react'
import Alert from '../Alert/Alert'
import { SearchType } from '../../types'
import { countries } from "../../data/countries"
import styles from "./Form.module.css"


const Form = () => {

    const [search,setSearch] = useState<SearchType>({
        city : "",
        country : "",
    })

    const [alert,setAlert] = useState("")
    
    const handleChange = (e:ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
        setSearch({
            ...search,
            [e.target.id] : e.target.value
        })
    }

    const handleSubmit = ( e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(Object.values(search).includes("")){
            setAlert("Todos los campos son obligatorios")
            return
        }
    }

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit}
        >
            <div className={styles.field}>

                <label htmlFor="city">Ciudad :</label>
                <input 
                    type="text"
                    id="city"
                    name="city"
                    placeholder="ciudad"
                    value={search.city}
                    onChange={handleChange}
                />
            </div>

            <div className={styles.field}>
                <label htmlFor="country">País</label>
                <select
                    id="country"
                    value={search.country}
                    onChange={handleChange}
                >
                    <option>--Seleccione un país</option>
                    {countries.map( country => (
                        <option
                            key={country.code}
                            value={country.code}                      
                        >
                            {country.name}
                        </option>
                    ))}
                </select>

            </div>
           
            {alert && <Alert>{alert}</Alert>}

            <input className={styles.submit} type="submit" value="Consultar Clima" />
        </form>
    )

}
export default Form