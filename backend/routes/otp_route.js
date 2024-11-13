const express = require('express');
const router = express.Router();
const Otp = require('../model/otp_data')
const nodemailer = require('nodemailer')
const crypto = require('crypto')


const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true, 
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
})



router.post('/', async (req, res) => {
    const { email } = req.body;
    // Generate OTP and expiration time
    const otp = crypto.randomInt(100000, 999999).toString();
    const otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes
    console.log(otpExpiresAt);

    let otpRecord = await Otp.findOne({ email });
    if (!otpRecord) {
        otpRecord = new Otp({ email, otp, otpExpiresAt });
    } else {
        otpRecord.otp = otp;
        otpRecord.otpExpiresAt = otpExpiresAt;
    }

    await otpRecord.save();

    // Send OTP via email
    await transporter.sendMail({
        from: process.env.EMAIL,
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}`,
    });

    res.json({ message: 'OTP sent to your email' });

})
router.post('/verify', async (req, res) => {
    const { email, otp } = req.body;
    const user = await Otp.findOne({ email });
    console.log(response); // Check the response object from the backend


    if (!user || user.otp !== otp || user.otpExpiresAt < new Date()) {
        return res.status(400).json({ message: 'Invalid or expired OTP' });
        
    }
{
    res.json({ message: 'Login successful' });
    console.log(response); }
})


module.exports = router;