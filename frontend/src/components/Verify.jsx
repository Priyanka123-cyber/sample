import { TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Verify = () => {
    const navigate=useNavigate()
    const verifyOtp = async () => {
        try {
          const response = await axios.post('http://localhost:6000/otp/verify', { email, otp });
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
        <TextField id="outlined-basic" label="OTP" variant="outlined"  value={otp}
            onChange={(e) => setOtp(e.target.value)}/>
        <Button  onClick={verifyOtp}>Verify</Button>
    </div>
  )
}

export default Verify