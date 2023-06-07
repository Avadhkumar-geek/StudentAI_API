const express = require('express');
const data = require('./data.json');

const app = express()
const PORT = process.env.PORT || 8080
const jsonData = data['data'];

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
    const searchRes = jsonData.filter(dataChunk => {
        return dataChunk['title'].toLowerCase().includes(searchText);
    });
    const response = {
        result: searchRes.map(entry => {
            return {
                id: entry.id,
                icon: entry.icon,
                title: entry.title,
                disc: entry.disc
            }
        })
    };

    const json = JSON.stringify(response);
    res.end(json);
})

app.get('/id/:id', (req, res) => {
    const paramId = req.params.id.toLowerCase();
    jsonData.forEach(dataChunk => {
        if (dataChunk['id'] === paramId) {
            searchRes = dataChunk
        }
    });
    const response = {
        result: searchRes
    };

    const json = JSON.stringify(response);
    res.end(json);
})


app.listen(PORT);