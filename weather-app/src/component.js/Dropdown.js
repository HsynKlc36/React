import {useEffect, useState} from 'react'
import { useCity } from '../context.js/CitiesContext'
function Dropdown() {
  const {city,cities,setCity}=useCity();

  const cityChange=({target})=>{
   setCity(target.value); 
  }

  return (
    <div>
        <h4>Şehir Seçiniz</h4>
        <label htmlFor="iller">Bir il seçin:</label>
      <select  value={city} onChange={cityChange}>
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>

    </div>
  )
}

export default Dropdown