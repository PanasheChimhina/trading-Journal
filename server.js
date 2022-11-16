require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}


const userRoutes = require('./routes/api.js');

const app = express();
app.use(cors(corsOptions))
app.use('/public', express.static(process.cwd() + '/public'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Index page (static HTML)
app.route('/')
    .get(function (req, res) {
        res.sendFile(process.cwd() + '/views/home.html');
    });


// User routes
userRoutes(app);

// 404 Not Found Middleware
app.use(function (req, res, next) {
    res.status(404)
        .type('text')
        .send('Not Found');
});

const portNum = process.env.PORT || 3000;

// Start our server and tests!
app.listen(portNum, () => {
    console.log(`Listening on port ${portNum}`);
});

module.exports = app; // For testing
