const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
dotenv.config();

const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/auth', authRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// HTML Endpoint for API Documentation
app.get('/', (req, res) => {
    const html = `
      <html>
        <head>
          <title>RSS REST API</title>
        </head>
        <body>
          <h1>RSS REST API</h1>
          <p>View the <a href="/api-docs">API documentation</a>.</p>
        </body>
      </html>
    `;
    res.send(html);
  });
// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
