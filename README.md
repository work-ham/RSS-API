# test-API RSS
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
