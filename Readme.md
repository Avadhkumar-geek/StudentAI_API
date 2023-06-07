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

### GET /search/:searchText

This endpoint allows you to search for student data based on a specific text. It performs a case-insensitive search in the dataset's `title` field and returns matching results.

Example response for searching "math":

```json
{
    "results": [
        {
            "id": "topic-explainer",
            "icon": "Icons.topic",
            "title": "Topic Explainer",
            "disc": "Explain Like 5 Year Old Child"
        },
        {
            "id": "compare-topics",
            "icon": "Icons.compare",
            "title": "Compare Topic",
            "disc": "Get Difference with Pros & Cons"
        }
    ]
}
```

### GET /id/:id

This endpoint retrieves the student data associated with a specific ID.

Example response for ID "3":

```json
{
    "result": {
        "id": "topic-explainer",
        "title": "Topic Explainer",
        "icon": "Icons.topic",
        "disc": "Explain Like 5 Year Old Child"
    }
}
```

If the provided ID is not found, the response will be:

```json
{
    "result": null
}
```

### GET /cards/:num

This endpoint returns a specified number of student data cards from the beginning of the dataset.

Example response for `num=3`:

```json
{
    "results": [
        {
            "id": "topic-explainer",
            "title": "Topic Explainer",
            "icon": "Icons.topic",
            "disc": "Explain Like 5 Year Old Child"
        },
        {
            "id": "grammar-correction",
            "title": "Grammarian",
            "icon": "Icons.abc",
            "disc": "Check Your Grammar"
        }
    ]
}
```

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to explore and modify the code as per your requirements. Contributions are always welcome!
