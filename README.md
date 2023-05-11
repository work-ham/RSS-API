# test-API RSS

<p> In order the code to run, 
  GIT init on terminal and make .env file include</p>
  
<p>PORT=8000</p>
<p>DB_HOST=localhost / YOUR_DB_URL</p>
<p>DB_USER=YOUR_DB USER</p>
<p>DB_PASSWORD= YOUR_DB_PASSWORD</p>
<p>DB_NAME= YOUR_DB_NAME</p>
<p>SECRET_KEY=YOUR_SECRET_KEY</p>

<p>To test API with postman </p>

<p>Request Body json</p>
<p> POST "/auth/login"  </p>
 <p> {  </p>
<p>  "identifier": "",  </p>
<p>  "password": ""  </p>
<p>}  </p>
  
<p>  POST "/auth/register"  </p>
<p>  {
<p>  "username": "",  </p>
<p>  "email": "",  </p>
<p>  "password": ""  </p>
<p>}  </p>

 <p> GET "/auth/profile/"  </p>
<p>curl -X GET http://localhost:8000/auth/profile \  </p>
<p>-H "Authorization: Bearer JWT_TOKEN"  </p>
  
 <p> with post man use header and put Authorization as key and Bearer <JWT_TOKEN> as value  </p>
  

