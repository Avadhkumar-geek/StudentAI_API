const express = require('express');
const data = require('./data.json');

const app = express()
const PORT = process.env.PORT || 8080
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


app.listen(PORT);