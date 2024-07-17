import SearchBox from "./searchbox";
import InfoBox from "./InfoBox";
import { useState } from "react";


export default function WeatherApp(){
     const [weatherInfo,setWeatherInfo]=useState({
        city:"Pune",
        feelsLike: 40.05,
        humidity: 70,
        temp:33.05,
        tempMax:33.05,
        tempMin:33.05,
        weather : "drizzle"
     });

     let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
     }

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App By Vikram</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}