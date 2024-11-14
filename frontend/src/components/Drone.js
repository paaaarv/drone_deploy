import React from 'react';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';


export default function Drone(data){
    return (
        <Card>
            <CardContent>
               <CardHeader title={"Drone No." + data.props.image_id}/>
               
                Timestamp: {data.props.timestamp} <br/>
                Latitude: {data.props.latitude} <br/>
                Longitude: {data.props.longitude} <br/>
                Altitude (m): {data.props.altitude_m} <br/>
                Heading Deg: {data.props.heading_deg} <br/>
                File Name: {data.props.file_name} <br/>
                Camera Tilt Degree: {data.props.camera_tilt_deg} <br/>
                Focal Length (mm): {data.props.focal_length_mm} <br/>
                ISO: {data.props.iso}<br/>
                Shutter Speed: {data.props.shutter_speed}<br/>
                Aperture: {data.props.aperture} <br/>
                Color Temp (k): {data.props.color_temp_k} <br/>
                Image Format: {data.props.image_format}<br/>
                File Size (mb): {data.props.file_size_mb}<br/>
                Drone Speed (mps): {data.props.drone_speed_mps} <br/>
                Battery Level (pct): {data.props.battery_level_pct} <br/>
                GPS Accuracy (m): {data.props.gps_accuracy_m} <br/>
                Gimbal Mode: {data.props.gimbal_mode} <br/>
                Subject Detection: {data.props.subject_detection} <br/>
                Image Tags: {data.props.image_tags} <br/>
            </CardContent>
        </Card>
    )
}