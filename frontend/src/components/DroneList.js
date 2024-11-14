import React, {useState, useEffect} from 'react';
import { Grid2 } from '@mui/material';
import axios from 'axios';
import Drone from './Drone'

export default function DroneList(){
        const [droneData, setDroneData] = useState([]);
        const [error, setError] = useState(null);
    const api = axios.create({
        baseURL: 'http://localhost:8000'
      });

      useEffect(() => {
        api.get('/drone-data')
            .then(response => {
                setDroneData(response.data);
            })
            .catch(error => {
                console.error("Error", error);
                setError("Failed");
            });
        }, []);

        const showDroneList=()=>{
            return droneData.map(data => {
                console.log(data);
                return (
                <Grid2>
                        <Drone 
                            key = {data.image_id}
                            props={data}/>

                </Grid2>
                )
            })
        }

    return(
        <Grid2 container spacing={1}> 
            {showDroneList()}
        </Grid2>
    )
}
