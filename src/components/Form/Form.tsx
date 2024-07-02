import {useState,ChangeEvent} from 'react'
import { SearchType } from '../../types'
import { countries } from "../../data/countries"
import styles from "./Form.module.css"

const Form = () => {
    const [search,setSearch] = useState<SearchType>({
        city : "",
        country : "",
    })
    
    const handleChange = (e:ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
        setSearch({
            ...search,
            [e.target.id] : e.target.value
        })
    }

    return (
        <form className={styles.form}>
            <div className={styles.field}>

                <label htmlFor="city">Ciudad :</label>
                <input 
                    type="text"
                    id="city"
                    name="city"
                    placeholder="ciudad"
                    value={search.city}
                    onChange={ handleChange}
                />
            </div>

            <div className={styles.field}>
                <label htmlFor="country">País</label>
                <select
                    id="country"
                    value={search.country}
                    onChange={ handleChange}
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
           

            <input className={styles.submit} type="submit" value="Consultar Clima" />
        </form>
    )
}

export default Form