var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

//inserting post request and the fetch data - https://knowledge.udacity.com/questions533709

app.post('/test', async(req,res) => {
    const url = req.body.formText;
    const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=$(API_KEY)&lang=en&txt=$(JSON)&url=$(url)';
    const result = await fetch(url + baseURL, {
        method:'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
    }) 

    try {
        const newData = await result.json();
        console.log(result, newData);
        return newData;
    }

    catch(error){
        console.log("error", error);
        //approximately handle the error
    }
});