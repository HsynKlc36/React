import {useEffect, useState} from 'react'
import { useCity } from '../context.js/CitiesContext';
import axios from 'axios';


function Weather() {
    const {city,cities,setCity}=useCity();
    const [weathers,setWeathers]=useState([])

    useEffect(()=>{
      axios(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/$%7B${city}%7D/next7days?unitGroup=metric&include=days&key=A7DJ2VZ86L5JYYLXU3KCFP97J&contentType=json`).then(res=>res.data)
     .then(data=>setWeathers(data.days));

    },[city])
  return (
    <div >
      <ul className='style-weather'>
      {weathers.map((weather,index)=>(
        <span  key={index}>{JSON.stringify(weather.temp)}</span>
        ))}
      </ul>
    </div>
  )
}

export default Weather