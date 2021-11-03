require('dotenv').config();
const { default: axios } = require("axios");
const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const { API_KEY } = process.env;


// fetch data from api function
const result = async (req, res) => {
    const { body: { url } } = req;
    const response = await axios.post(`https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&url=${url}&lang=en`);
    const results = response.data;
    res.send(results);
  }



const app = express();
app.use(cors());
app.use(bodyParser());
app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})


app.post('/result', result)




app.listen(8081, (error) => {
    if (error){console.log(error)}
    console.log(`Server listening on port 8081!`)
})

module.exports = {
    app,
}