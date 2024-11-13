import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Submit = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const requestOtp = async () => {
    try {
      const response = await axios.post('http://localhost:6000/otp', { email });
      setMessage(response.data.message);
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