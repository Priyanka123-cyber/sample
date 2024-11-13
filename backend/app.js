const express=require('express');
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();
require("dotenv").config();
require('./db/connection');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const oRoute=require('./routes/otp_route');
app.use(express.json());
app.use('/otp',oRoute);


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))