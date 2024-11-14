import React, { useState } from 'react';
import { TextField, Button, Box, Typography} from '@mui/material';
import axios from 'axios';

export default function Query(){
    let [query, setQuery] = React.useState('');
    let [response, setResponse] = React.useState('');

    const api = axios.create({
        baseURL: 'http://localhost:8000',
        headers: {
            'Content-Type': 'application/json',
        }
      });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting query:", query); 
        try{
            const result = await api.post('/ai/generate', { text: query});
            console.log("Response from server:", result.data); // 
              setResponse(result.data);
        }catch (error){
            console.error("Error", error);
        }
    }

    return(
        <Box>
            <form onSubmit = {handleSubmit}>
                <TextField
                    label="Enter your drone-related question:"
                    value={query}
                    onChange = {(e) => setQuery(e.target.value)}
                />
                <Button type="submit">Submit</Button>
            </form>
                {response && (
                <Box>
                    <Typography variant="h6">Response:</Typography>
                    <Typography variant = "body1"> {response.response} </Typography>
                </Box>
                )
                }
        </Box>
    )

}