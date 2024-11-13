import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Submit = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const requestOtp = async () => {
    console.log('Attempting to send OTP:', email); // Log email before sending request
    try {
      const response = await axios.post('http://localhost:3000/otp', { email });
      console.log('Response received:', response);
      localStorage.setItem('email', email);
      setMessage(response.data.message);
      navigate('/verify');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error sending OTP');
    }
  };



  return (
    <div>
        <Box>
        <TextField id="outlined-basic" label="Email" variant="outlined" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>
        <br />
        <Button onClick={requestOtp}>Submit</Button>
        </Box>
    </div>
  )
}

export default Submit