import React, {useEffect,useState} from "react";
import Flight from "../Flight/Flight";

export default function Flights() {

    let [flights,setFlights] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
                setFlights(value.filter(value => value.launch_year !== 2000))
            });
    });

    return (
        <div>
            {flights.map(flight => <Flight flight={flight}/>)}
        </div>
    );
}