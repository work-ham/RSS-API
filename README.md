# API RSS

<p> In order the code to run, 
  NPM init on terminal and make .env file include</p>
  
<p>PORT=8000</p>
<p>DB_HOST=localhost / YOUR_DB_URL</p>
<p>DB_USER=YOUR_DB USER</p>
<p>DB_PASSWORD= YOUR_DB_PASSWORD</p>
<p>DB_NAME= YOUR_DB_NAME</p>
<p>SECRET_KEY=YOUR_SECRET_KEY</p>

<p> SQL SCHEMA: <br>
    CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
    );   
</p>
<p>LIST OF ENDPOINTS <br>
  
    User Registration:
        URL:/auth/register
        METHOD: POST
        Request Body:
        {
        "name": "John Doe", as string 
        "email": "johndoe@example.com", as string 
        "username": "johndoe", as string 
        "password": "password123" as string 
        }
        Response: 
        {
        "message": "User registration successful" as string 
        "userId": 1 as integer
        }


    User Login:
        URL:/auth/login
        METHOD: POST
        Request Body: 
        {
        "email": "johndoe@example.com", as string 
        "password": "password123"as string 
        }
        Response:
        {
         "message": "User login successful" as string 
          "token": "JWT_TOKEN" as string 
        }

    Get User Profile:
        URL:/auth/profile
        METHOD: GET
        Header: Authentication : Bearer JWT_TOKEN
        Response: 
        {
        "id": "123456", as integer
        "name": "John Doe", as string 
        "email": "john@example.com", as string 
        "username": "johndoe" as string 
        }

        
    Change Password:
        URL:/auth/change-password
        METHOD: POST
        Request Body:
        { 
        "userId": "123456789", as integer
        "currentPassword": "oldPassword", as string 
        "newPassword": "newPassword" as string 
        }
        Response:
        {
        "message": "Password changed successfully" as string 
        }


    Change Username:
        URL:/auth/change-username
        METHOD: POST
        Request Body:
        {
        "userId": "123456789", as integer
        "newUsername": "newUsername" as string 
        }
        Response:
        {
         "message": "Username changed successfully" as string 
        }


    Change Email:
        URL:/auth/change-email
        METHOD: POST
        Request Body:
        { 
        "userId": "123456789", as integer
        "newEmail": "newemail@example.com" as string 
        }
        Response:
         {
         "message": "Email changed successfully" as string 
         }

    Delete Profile:
        URL:/auth/delete-profile
        METHOD: DELETE
        Request Body:
        { 
        "userId": "123456789" as string 
        }
        Response:
        {
        "message": "Profile deleted successfully" as string 
        }

  </p>
