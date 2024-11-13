import React, { useState } from 'react';
import { TextField, Button} from '@mui/material';
import axios from 'axios';

export default function Query(){
    let [query, setQuery] = React.useState('');
    let [response, setResponse] = React.useState('');

    const api = axios.create({
        baseURL: 'http://localhost:8000'
      });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const result = api.get('/')
                .then(response => {console.log(response.data);
                })
        }catch (error){
            console.error("Error", error);
        }
    }

    return(
        <form onSubmit = {handleSubmit}>
            <TextField
                label="Enter your drone-related question:"
                value={query}
                onChange = {(e) => setQuery(e.target.value)}
            />
            <Button type="submit">Submit</Button>
        </form>
    )

}