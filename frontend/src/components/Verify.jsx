import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Verify = () => {
    const navigate=useNavigate()
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    useEffect(() => {
      const storedEmail = localStorage.getItem('email');
      if (storedEmail) {
        setEmail(storedEmail);
        console.log('Email retrieved from localStorage:', storedEmail);  // Set the email from localStorage
      }
    }, []);

    const verifyOtp = async () => {
      console.log('OTP:', otp); // Check OTP value
    console.log('Email:', email); // Check email value
        try {
          const response = await axios.post('http://localhost:3000/otp/verify', { email, otp });
          if (response.data.success) {
            navigate('/home');
          } else {
            // Show error message if verification fails
            setMessage('Invalid login. OTP verification failed.');
          }
        } catch (error) {
          setMessage(error.response?.data?.message || 'Error verifying OTP');
        }
      };
  return (
    <div>
      {/* <TextField id="outlined-basic" label="Email" variant="outlined" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}/> */}
        <TextField id="outlined-basic" label="OTP" variant="outlined"  value={otp}
            onChange={(e) => setOtp(e.target.value)}/>
        <Button  onClick={verifyOtp}>Verify</Button>
    </div>
  )
}

export default Verify