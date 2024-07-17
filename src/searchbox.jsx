import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';


export default function SearchBox(){
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="7810f3c52ae8a3e16e22e3b42f90addc";
    let [city,setCity]=useState("");

    let getWeatherInfo=async()=>{
        let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse= await response.json();
        console.log(jsonResponse)
    }

    let handleChange = (event)=>{
        setCity(event.target.value);
    }

    let handleSubmit = (event)=>{
        event.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    }




    return (
<div className="SearchBox">
    <h3> Search for the weather</h3>
    <form onSubmit={handleSubmit}>
             <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
             <br></br><br></br>
             <Button variant="contained" type='submit'>Search</Button>

    </form>
    

</div>
    );
}
