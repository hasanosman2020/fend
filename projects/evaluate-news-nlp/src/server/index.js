//taken from https://www.knowledge.udacity.com/questions/539331

const dotenv = require('dotenv')
dotenv.config()


var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

const apiKey = process.env.API_KEY


//from https://www.meaningcloud.com/developer/sentiment-analysis/dev-tools/2.1, nodejs, https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1/request

//Dependencies
const bodyParser = require('body-parser')

//Middleware
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded(
    { extended: false}
));
app.use(bodyParser.json())

console.log(__dirname)

//Cors for cross-origin allowance
const cors = require('cors')
const { url } = require('inspector')
app.use(cors())

app.use(express.static('dist'))

//for api key
console.log(`Your API key is ${process.env.API_KEY}`);

//ref: https://knowledge.udacity.com/questions/536010

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})
    /*
    //app.get("/", (req, res) => res.sendFile("index.html"));
    //res.sendFile(path.resolve('src/client/views/index.html'))
})
// designates what port the app will listen to for incoming requests
//app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
//})
*/

app.listen(8080, function(){
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

//inserting post request and the fetch data - https://knowledge.udacity.com/questions/533709

app.post('/test', async(req,res) => {
    const url = req.body.inputText;
    const baseURL = `https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&lang=en&txt=${JSON}&url=${url}`;
    const result = await fetch(url + baseURL, {
        method:'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    console.log('result ====>', result)

    try {
        const newData = await result.json();
        console.log(result, newData);
        return newData;
    }

    catch(error){
        console.log("error", error)
        //approximately handle the error
    }
})


