const mongoose = require("mongoose")
const Schema = mongoose.Schema

const otpSchema = new Schema({
    email: String,
    otp: String,
    otpExpiresAt: Date,
})
const Otp = mongoose.model("Otp", otpSchema)
module.exports = Otp;


