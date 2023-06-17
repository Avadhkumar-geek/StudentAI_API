# StudentAI API

The StudentAI API is a simple Express.js server that provides endpoints to search and retrieve student data. It is designed to work with a JSON dataset containing student information.

## Installation

1. Clone the repository or download the code files.
2. Install the dependencies by running the following command in the project directory:
    ```
    npm install
    ```

## Usage

1. Make sure you have Node.js installed on your machine.
2. Start the server by running the following command:
    ```
    npm start
    ```
    The server will start running on http://localhost:8080 or the port specified in the `PORT` environment variable.

## Endpoints

### GET /

This endpoint returns a greeting message and the status code of the response.

Example response:

```json
{
    "greeting": "Hey, Buddy! Welcome to the StudentAI API",
    "statusCode": 200
}
```

### GET /search

This endpoint allows you to search for student data based on a specific text and filter criteria. It performs a case-insensitive search in the dataset's `title` field and returns matching results. You can specify pagination parameters using the query parameters `page` and `limit`, and filter criteria using the query parameter `filters`.

The `filters` parameter should contain a comma-separated list of fields to search within. By default, only the `title` field is searched.

Default values:
`page=1`
`limit=10`
`filters=title`

Example URL: `http://localhost:8080/search?apps=topic&filters=title,disc&page=1&limit=10`

Example response:

```json
{
    "results": [
        {
            "id": "topic-explainer",
            "icon": "Icons.topic",
            "color": "#FFC107",
            "title": "Topic Explainer",
            "disc": "Explain Like 5 Year Old Child"
        },
        {
            "id": "compare-topics",
            "icon": "Icons.compare",
            "color": "#607D8B",
            "title": "Compare Topic",
            "disc": "Get Difference with Pros & Cons"
        }
    ]
}
```

### GET /id/:id

This endpoint retrieves the student data associated with a specific ID.

Example URL: `http://localhost:8080/id/topic-explainer`

Example response:

```json
{
    "result": {
        "id": "topic-explainer",
        "icon": "Icons.topic",
        "color": "#FFC107",
        "title": "Topic Explainer",
        "disc": "Explain Like 5 Year Old Child"
        ...
    }
}
```

If the provided ID is not found, the response will be:

```json
{
    "error": "ID not found"
}
```

## Error handling

If an error occurs in any of the endpoints, the server will return a JSON response with an `error` message and a status code of 500.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to explore and modify the code as per your requirements. Contributions are always welcome!
