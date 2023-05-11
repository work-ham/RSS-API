# API RSS

<p> In order the code to run, 
  GIT init on terminal and make .env file include</p>
  
<p>PORT=8000</p>
<p>DB_HOST=localhost / YOUR_DB_URL</p>
<p>DB_USER=YOUR_DB USER</p>
<p>DB_PASSWORD= YOUR_DB_PASSWORD</p>
<p>DB_NAME= YOUR_DB_NAME</p>
<p>SECRET_KEY=YOUR_SECRET_KEY</p>

<p> SQL SCHEMA </p>
    

<p>LIST OF ENDPOINTS <br>
  
    User Registration:
        Endpoint: POST /auth/register
        Request Body:
        {
        "name": "John Doe", 
        "email": "johndoe@example.com", 
        "username": "johndoe", 
        "password": "password123"
        }
        Response: 
        {
        "message": "User registration successful"
        "userId": 1
        }


    User Login:
        Endpoint: POST /auth/login
        Request Body: 
        {
        "email": "johndoe@example.com", 
        "password": "password123"
        }
        Response:
        {
         "message": "User login successful"
          "token": "JWT_TOKEN"
        }

    Get User Profile:
        Endpoint: GET /auth/profile
        Header: Authentication : Bearer JWT_TOKEN
        Response: 
        {
        "id": "123456",
        "name": "John Doe",
        "email": "john@example.com",
        "username": "johndoe"
        }

        
    Change Password:
        Endpoint: POST /auth/change-password
        Request Body:
        { 
        "userId": "123456789", 
        "currentPassword": "oldPassword", 
        "newPassword": "newPassword"
        }
        Response:
        {
        "message": "Password changed successfully"
        }


    Change Username:
        Endpoint: POST /auth/change-username
        Request Body:
        {
        "userId": "123456789", 
        "newUsername": "newUsername"
        }
        Response:
        {
         "message": "Username changed successfully"
        }


    Change Email:
        Endpoint: POST /auth/change-email
        Request Body:
        { 
        "userId": "123456789", 
        "newEmail": "newemail@example.com"
        }
        Response:
         {
         "message": "Email changed successfully"
         }

    Delete Profile:
        Endpoint: DELETE /auth/delete-profile
        Request Body:
        { 
        "userId": "123456789"
        }
        Response:
        {
        "message": "Profile deleted successfully"
        }

  </p>
