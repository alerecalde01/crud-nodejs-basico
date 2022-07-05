const express = require('express')
const mongoose = require('mongoose');
const { use } = require('./routes/user');
require('dotenv').config();
const userRoutes = require('./routes/user')

const app = express();
const port = process.env.PORT || 9000;


// middleware
app.use(express.json())
app.use("/api", userRoutes)


// routes
app.get('/', (req, res) => {
    res.send("Welcome to mi API");
});


// mongo db connection
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Connect database Mongo db atlas...")
}).catch((error) => console.error(error));

app.listen(port, () => {
    console.log("Servidor escuchando en", port)
});