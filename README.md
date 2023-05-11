# test-API RSS

<p> In order the code to run, 
  GIT init on terminal and make .env file include
  
PORT=8000
DB_HOST=localhost / YOUR_DB_URL
DB_USER=YOUR_DB USER
DB_PASSWORD= YOUR_DB_PASSWORD
DB_NAME= YOUR_DB_NAME
SECRET_KEY=YOUR_SECRET_KEY


</p>
<p>To test API with postman </p>

<p>Request Body json</p>
<p> POST "/auth/login"
  {
  "identifier": "",
  "password": ""
}
  
  POST "/auth/register"
  {
  "username": "",
  "email": "",
  "password": ""
}

  GET "/auth/profile/"
curl -X GET http://localhost:8000/auth/profile \
-H "Authorization: Bearer <JWT_TOKEN>"
  
  with post man use header and put Authorization as key and Bearer <JWT_TOKEN> as value
  
  </p>
