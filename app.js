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

    res.json(response);
});

app.get('/search/:searchText', (req, res) => {
    const searchText = req.params.searchText.toLowerCase();
    const searchResults = jsonData.filter(item => {
        return item['title'].toLowerCase().includes(searchText);
    });

    const response = {
        results: searchResults.map(entry => {
            return {
                id: entry.id,
                icon: entry.icon,
                title: entry.title,
                disc: entry.disc
            };
        })
    };

    res.json(response);
});

app.get('/id/:id', (req, res) => {
    const requestedId = req.params.id.toLowerCase();
    const searchResult = jsonData.find(item => {
        return item['id'] === requestedId;
    });

    if (!searchResult) {
        res.status(404).json({ error: 'ID not found' });
        return;
    }

    const response = {
        result: searchResult
    };

    res.json(response);
});

app.get('/cards/:num', (req, res) => {
    const requestedCount = parseInt(req.params.num);

    if (isNaN(requestedCount) || requestedCount <= 0) {
        res.status(400).json({ error: 'Invalid card count' });
        return;
    }

    const cardData = jsonData.slice(0, requestedCount);

    const response = {
        results: cardData.map(cardData => {
            return {
                id: cardData.id,
                title: cardData.title,
                icon: cardData.icon,
                disc: cardData.disc,
                color : cardData.color
            };
        })
    };

    res.json(response);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
