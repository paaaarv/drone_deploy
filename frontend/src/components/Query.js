import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Card} from '@mui/material';
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
        try{
            const result = await api.post('/ai/generate', { text: query});
              setResponse(result.data);
        }catch (error){
            console.error("Error", error);
            console.log("Error response: ", error.response?.data);
        }
    }

    return(
        <Box m={2} sx={{width: '50%'}} >
            <Card spacing = {2} sx={{padding:'20px',backgroundColor: 'white' }}>
            <form onSubmit = {handleSubmit} style={{display: 'flex', width:'100%', justifyContent: 'center', padding: '10px', borderRadius: '10px'}}>
                <TextField
                    label="Enter your question:"
                    value={query}
                    onChange = {(e) => setQuery(e.target.value)}
                    sx={{width: '75%'}}
                />
                <Button type="submit">Submit</Button>
            </form>
                {response && (
                <Box mt= {5} mb={2} >
                    <Typography variant="body1">Response:</Typography>
                    <Typography variant = "body2"> {response.response} </Typography>
                </Box>
                )
            }
            </Card>
        </Box>
    )

}