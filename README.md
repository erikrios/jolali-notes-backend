# Jolali Notes API Documentations

## Home
- GET / (The API Documentations)
    - Responses
        - Body
            - 200
                - ```
                    {
                        "message": "Hello, World!"
                    }
                    ```

## Users
- POST api/users (Register the user)
    - Requests
        - Body
            - ```
                {
                    "name": "John Doe",
                    "email": "johndoe@company.com",
                    "password": "johndoe123"
                }
                ```
    - Response
        - Body
            - 200
                - ```
                    {
                        "_id": "5f5c7455984f220017b4e346",
                        "name": "John Doe",
                        "email": "johndoe@company.com"
                    }
                    ```
        - Header
            - Key
                - Auth-Token
            - Value
                - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjVjNzQ1NTk4NGYyMjAwMTdiNGUzNDYiLCJuYW1lIjoiSm9obiBEb2UiLCJpYXQiOjE1OTk4OTQ2MTN9.g4DzrWJRuSewcMabE-At0OnaAuI1jFc-FKeE3Bbxj3s
- GET /api/users/me (Get the user details)
    - Requests
        - Header
            - Key
                - Auth-Token
            - Value
                - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjVjNzQ1NTk4NGYyMjAwMTdiNGUzNDYiLCJuYW1lIjoiSm9obiBEb2UiLCJpYXQiOjE1OTk4OTQ2MTN9.g4DzrWJRuSewcMabE-At0OnaAuI1jFc-FKeE3Bbxj3s
    - Responses
        - Body
            - 200
                - ```
                    {
                        "dateRegistered": "2020-09-12T07:10:13.360Z",
                        "lastLogin": "2020-09-12T07:10:13.361Z",
                        "_id": "5f5c7455984f220017b4e346",
                        "name": "John Doe",
                        "email": "johndoe@company.com"
                    }
                    ```

## Authentication
- POST /api/auth (Check the user login)
    - Requests
        - Body
            - ```
                {
                    "email": "johndoe@company.com",
	                "password": "johndoe123"
                }
                ```
    - Response
        - Body
            - 200
                - ```
                    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjVjNzQ1NTk4NGYyMjAwMTdiNGUzNDYiLCJuYW1lIjoiSm9obiBEb2UiLCJpYXQiOjE1OTk4OTQ2MTN9.g4DzrWJRuSewcMabE-At0OnaAuI1jFc-FKeE3Bbxj3s
                    ```

## Notes
- POST /api/notes (Create a note)
    - Requests
        - Header
            - Key
                - Auth-Token
            - Value
                - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjVjNzQ1NTk4NGYyMjAwMTdiNGUzNDYiLCJuYW1lIjoiSm9obiBEb2UiLCJpYXQiOjE1OTk4OTQ2MTN9.g4DzrWJRuSewcMabE-At0OnaAuI1jFc-FKeE3Bbxj3s
        - Body
            - ```
                {
                    "title": "Develop Some Apps",
                    "description": "You can improve your programming skill by develop some apps"
                }
                ```
    - Responses
        - Body
            - 200
                - ```
                    {
                        "date": "2020-09-12T07:30:47.422Z",
                        "time": "Saturday, September 12th 2020, 7:30:47 am",
                        "_id": "5f5c7927984f220017b4e347",
                        "title": "Develop Some Apps",
                        "description": "You can improve your programming skill by develop some apps",
                        "ownerId": {
                            "_id": "5f5c7455984f220017b4e346",
                            "name": "John Doe"
                        },
                        "__v": 0
                    }
                    ```
- GET /api/notes (Get all notes)
    - Requests
        - Header
            - Key
                - Auth-Token
            - Value
                - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjVjNzQ1NTk4NGYyMjAwMTdiNGUzNDYiLCJuYW1lIjoiSm9obiBEb2UiLCJpYXQiOjE1OTk4OTQ2MTN9.g4DzrWJRuSewcMabE-At0OnaAuI1jFc-FKeE3Bbxj3s
    - Responses
        - Body
            - 200
                - ```
                    [
                        {
                            "date": "2020-09-12T07:37:43.424Z",
                            "time": "Saturday, September 12th 2020, 7:37:43 am",
                            "_id": "5f5c7ac7984f220017b4e34e",
                            "title": "Read a Book",
                            "description": "Improve your knowledge by reading a book",
                            "ownerId": {
                                "_id": "5f5c7455984f220017b4e346",
                                "name": "John Doe"
                            }
                        },
                        {
                            "date": "2020-09-12T07:30:47.422Z",
                            "time": "Saturday, September 12th 2020, 7:30:47 am",
                            "_id": "5f5c7927984f220017b4e347",
                            "title": "Develop Some Apps",
                            "description": "You can improve your programming skill by develop some apps",
                            "ownerId": {
                                "_id": "5f5c7455984f220017b4e346",
                                "name": "John Doe"
                            }
                        }
                    ]
                    ```
- GET /api/notes/{id} (Get a note by id)
    - Requests
        - Header
            - Key
                - Auth-Token
            - Value
                - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjVjNzQ1NTk4NGYyMjAwMTdiNGUzNDYiLCJuYW1lIjoiSm9obiBEb2UiLCJpYXQiOjE1OTk4OTQ2MTN9.g4DzrWJRuSewcMabE-At0OnaAuI1jFc-FKeE3Bbxj3s
    - Responses
        - Body
            - 200
                - ```
                    {
                        "date": "2020-09-12T07:30:47.422Z",
                        "time": "Saturday, September 12th 2020, 7:30:47 am",
                        "_id": "5f5c7927984f220017b4e347",
                        "title": "Develop Some Apps",
                        "description": "You can improve your programming skill by develop some apps",
                        "ownerId": {
                            "_id": "5f5c7455984f220017b4e346",
                            "name": "John Doe"
                        }
                    }
                    ```
- PUT /api/notes/{id} (Update a note)
    - Requests
        - Header
            - Key
                - Auth-Token
            - Value
                - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjVjNzQ1NTk4NGYyMjAwMTdiNGUzNDYiLCJuYW1lIjoiSm9obiBEb2UiLCJpYXQiOjE1OTk4OTQ2MTN9.g4DzrWJRuSewcMabE-At0OnaAuI1jFc-FKeE3Bbxj3s
        - Body
            - ```
                {
                    "title": "Learn Competitive Programming",
                    "description": "Improve the computational thinking by learn competitive programming"
                }
                ```
    - Responses
        - Body
            - 200
                - ```
                    {
                        "date": "2020-09-12T07:46:49.317Z",
                        "time": "Saturday, September 12th 2020, 7:46:49 am",
                        "_id": "5f5c7927984f220017b4e347",
                        "title": "Learn Competitive Programming",
                        "description": "Improve the computational thinking by learn competitive programming",
                        "ownerId": {
                            "_id": "5f5c7455984f220017b4e346",
                            "name": "John Doe"
                        },
                        "__v": 0
                    }
                    ```
- DELETE /api/notes/{id} (Delete a note)
    - Requests
        - Header
            - Key
                - Auth-Token
            - Value
                - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjVjNzQ1NTk4NGYyMjAwMTdiNGUzNDYiLCJuYW1lIjoiSm9obiBEb2UiLCJpYXQiOjE1OTk4OTQ2MTN9.g4DzrWJRuSewcMabE-At0OnaAuI1jFc-FKeE3Bbxj3s
    - Responses
        - Body
            - 200
                - ```
                        {
                            "date": "2020-09-12T07:46:49.317Z",
                            "time": "Saturday, September 12th 2020, 7:46:49 am",
                            "_id": "5f5c7927984f220017b4e347",
                            "title": "Learn Competitive Programming",
                            "description": "Improve the computational thinking by learn competitive programming",
                            "ownerId": {
                                "_id": "5f5c7455984f220017b4e346",
                                "name": "John Doe"
                            },
                            "__v": 0
                        }
                    ```
