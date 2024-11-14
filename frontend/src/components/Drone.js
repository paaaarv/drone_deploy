import React from 'react';
import { Card, CardContent, CardHeader, Grid2, Typography } from '@mui/material';


export default function Drone(data){
    return (
        <Card>
            <CardContent>
               <CardHeader title={"Drone Img No." + data.props.image_id}/>
               <Grid2 container>
                <Typography sx={{ display: 'block', width: '100%'  }} variant="body2">Timestamp: {data.props.timestamp} </Typography>
                <Typography sx={{ display: 'block', width: '100%'}}  variant="body2">Latitude: {data.props.latitude} </Typography>
                <Typography sx={{ display: 'block', width: '100%'}}  variant="body2">Longitude: {data.props.longitude} </Typography>
                <Typography sx={{ display: 'block', width: '100%'}}  variant="body2"y>Altitude (m): {data.props.altitude_m} </Typography>
                <Typography sx={{ display: 'block', width: '100%' }}  variant="body2">Heading Deg: {data.props.heading_deg}</Typography>
                <Typography sx={{ display: 'block', width: '100%' }}  variant="body2">File Name: {data.props.file_name} </Typography>
                <Typography sx={{ display: 'block', width: '100%'}}  variant="body2">Camera Tilt Degree: {data.props.camera_tilt_deg}</Typography>
                <Typography sx={{ display: 'block', width: '100%' }}  variant="body2">Focal Length (mm): {data.props.focal_length_mm} <br/></Typography>
                <Typography sx={{ display: 'block', width: '100%' }}  variant="body2">ISO: {data.props.iso}</Typography>
                <Typography sx={{ display: 'block', width: '100%' }}  variant="body2">Aperture: {data.props.aperture} </Typography>
                <Typography sx={{ display: 'block', width: '100%'}}  variant="body2">Color Temp (k): {data.props.color_temp_k} </Typography>
                <Typography sx={{ display: 'block', width: '100%'}}  variant="body2">Image Format: {data.props.image_format}</Typography>
                <Typography sx={{ display: 'block', width: '100%'}}  variant="body2">File Size (mb): {data.props.file_size_mb} </Typography>
                <Typography sx={{ display: 'block', width: '100%'}}  variant="body2">Drone Speed (mps): {data.props.drone_speed_mps} </Typography>
                <Typography sx={{ display: 'block', width: '100%'}}  variant="body2">Battery Level (pct): {data.props.battery_level_pct} </Typography>
                <Typography sx={{ display: 'block', width: '100%'}}  variant="body2">GPS Accuracy (m): {data.props.gps_accuracy_m} </Typography>
                <Typography sx={{ display: 'block', width: '100%'}}  variant="body2">Gimbal Mode: {data.props.gimbal_mode} </Typography>
                <Typography sx={{ display: 'block', width: '100%' }}  variant="body2">Subject Detection: {data.props.subject_detection} </Typography>
                <Typography sx={{ display: 'block', width: '100%' }}  variant="body2">Image Tags: {data.props.image_tags} </Typography>
                </Grid2>
            </CardContent>
        </Card>
    )
}