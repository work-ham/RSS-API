# API RSS

<p> In order the code to run, 
  GIT init on terminal and make .env file include</p>
  
<p>PORT=8000</p>
<p>DB_HOST=localhost / YOUR_DB_URL</p>
<p>DB_USER=YOUR_DB USER</p>
<p>DB_PASSWORD= YOUR_DB_PASSWORD</p>
<p>DB_NAME= YOUR_DB_NAME</p>
<p>SECRET_KEY=YOUR_SECRET_KEY</p>

<p>LIST OF ENDPOINTS <br>
  
    User Registration:
        Endpoint: POST /auth/register
        Body:{"name": "John Doe", "email": "johndoe@example.com", "username": "johndoe", "password": "password123"}

    User Login:
        Endpoint: POST /auth/login
        Body: {"email": "johndoe@example.com", "password": "password123"}

    Get User Profile:
        Endpoint: GET /auth/profile
        Header: Authentication : Bearer JWT_TOKEN
        
    Change Password:
        Endpoint: PUT /auth/change-password
        Body:{ "userId": "123456789", "currentPassword": "oldPassword", "newPassword": "newPassword"}

    Change Username:
        Endpoint: PUT /auth/change-username
        Body:{"userId": "123456789", "newUsername": "newUsername"}

    Change Email:
        Endpoint: POST /auth/change-email
        Body:{ "userId": "123456789", "newEmail": "newemail@example.com"}

    Delete Profile:
        Endpoint: DELETE /auth/delete-profile
        Body:{ "userId": "123456789"}
  
  </p>
