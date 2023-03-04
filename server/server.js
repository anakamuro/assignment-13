const express = require('express')
const dotEnv = require('dotenv')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const yaml = require('yamljs')
const swaggerDocs = yaml.load('./swagger.yaml')
const dbConnection = require('./database/connection')



const corsOptions = {
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST', 'PATCH', 'OPTIONS', 'PUT', 'DELETE'],
  optionsSuccessStatus: 200,
};



dotEnv.config()

const app = express()
const PORT = process.env.PORT || 8000

// Connect to the database
dbConnection()

// Handle CORS issues
app.options('*', cors(corsOptions));
app.use(cors(corsOptions))

// Request payload middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Handle custom routes
app.use('/api/v1/user', require('./routes/userRoutes'))
/*
app.use('api/v1/user/signup', require('./scripts/populateDatabase'))
*/
// API Documentation
if (process.env.NODE_ENV !== 'production') {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
}

app.get('/', (req, res, next) => {
  res.send('Hello from my Express server v2!')
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
