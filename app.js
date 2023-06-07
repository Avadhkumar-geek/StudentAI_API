const express = require('express');
const data = require('./data.json');

const app = express()

app.get('/', (req, res) => {
    const response = {
        greeting: "Hey, Buddy! Welcome to the StudentAI API",
        statusCode: res.statusCode
    };

    const json = JSON.stringify(response);
    res.end(json);
})

app.get('/search/:searchText', (req, res) => {
    const searchText = req.params.searchText.toLowerCase();
    const jsonData = data['data'];
    const searchRes = jsonData.filter(user => {
        return user['title'].toLowerCase().includes(searchText);
    });
    const response = {
        result: searchRes
    };

    const json = JSON.stringify(response);
    res.end(json);
})


app.listen(8080);