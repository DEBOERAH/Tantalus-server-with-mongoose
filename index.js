// import express
const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoutes');


mongoose.connect("mongodb+srv://Adaezeofuani:Adaeze@cluster0.0npnn.mongodb.net/tantalusdatabase?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log("Connected to MongoDB");

    const app = express();

    // middleware
    app.use(express.json());



    // connect routes 

    app.use('/', postRoutes);

    
    const port = 3000;

    app.get('/api', (req, res) => {
        res.send('Welcome to something sha!!!');
    })

    // listen for requests
    app.listen(3000, () => {
        console.log('Server is listening on port http://localhost:3000/api');
    })
})
    .catch((err) => {
        console.log(err);
    })

// create express app
// const app = express();

// const port=3000;

// app.get('/', (req, res) => {
//     res.send('Welcome to something sha!!!');
// })

// // listen for requests
// app.listen(3000, () => {
//     console.log('Server is listening on port http://localhost:3000');
// })