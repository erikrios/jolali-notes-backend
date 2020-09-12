# Jolali Notes API Documentation

## Home
- GET /
    - Responses
        - Body
            - 200
                - ```
                    {
                        "message": "Hello, World!"
                    }
                    ```

## Users
- POST api/users
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
- GET /api/users/me
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
## Authorization
- POST api/auth
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