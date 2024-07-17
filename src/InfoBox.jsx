

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({info}){
    const INIT_URL ="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=1024x1024&w=is&k=20&c=U6uwI27fEfgEAl9j_Hz848FgLRidd9Ww0kPCkc0FZB8="
   
    return(
        <div className="Infobox">
            
            <div className="cardContainer">
                 <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                    sx={{ height: 140 }}
                     image={INIT_URL}
                  title="green iguana"
                    />
                     <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                           {info.city}
                     </Typography>
                     <Typography variant="body2" color="text.secondary" component={"span"}>
                         <p> Temperature ={info.temp}&deg;C</p>
                            <p> Humidity ={info.humidity}</p>
                             <p> Min Temp ={info.tempMin}&deg;C</p>
                              <p> Max Temp ={info.tempMax}&deg;C</p>
                              <p> The weather can be desribed as <i>{info.weather}</i> & feels like ={info.feelsLike}&deg;C</p>
                     </Typography>
                        </CardContent>
      
                  </Card>
            </div>
        </div>
    )
}