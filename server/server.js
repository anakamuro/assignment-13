const express = require('express')
const dotEnv = require('dotenv')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const yaml = require('yamljs')
const swaggerDocs = yaml.load('./swagg.yaml')
const dbConnection = require('./database/connection')
console.log(swaggerDocs)



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

// API Documentation
if (process.env.NODE_ENV !== 'production') {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
}


// Handle custom routes
app.use('/api/v1/user', require('./routes/userRoutes'))
/*
app.use('api/v1/user/signup', require('./scripts/populateDatabase'))
*/


app.get('/', (req, res, next) => {
  res.send('Hello from my Express server v2!')
})

let  transactions = [
  { id: 1, date: 'June 20th, 2020', amount: 5, balance: 2082.79, extra: {
    transactions_type: "electronics type",
    category:"",
    notes:""
  }, },
  { id: 2, date: 'June 20th, 2020', amount: 10, balance: 2087.79, extra: {
    transactions_type: "electronics type",
    category:"",
    notes:""
  }, },
  { id: 3, date: 'June 20th, 2020', amount: 20, balance: 2097.79, extra: {
    transactions_type: "electronics type",
    category:"",
    notes:""
  }, },
  { id: 4, date: 'June 20th, 2020', amount: 30, balance: 2117.79, extra: {
    transactions_type: "electronics type",
    category:"",
    notes:""
  }, },
  { id: 5, date: 'June 20th, 2020', amount: 40, balance: 2147.79, extra: {
    transactions_type: "electronics type",
    category:"",
    notes:""
  }, },
  { id: 6, date: 'June 20th, 2020', amount: 50, balance: 2187.79, extra: {
    transactions_type: "electronics type",
    category:"",
    notes:""
  }, },
]

app.get('/api/v1/user/transactions', (req, res) => {
  res.status(200).send(transactions)
  return;
})




app.get('/api/v1/user/transaction/:id', (req, res) => {
  const { id } = req.params
  const response = transactions.filter((item) => item.id === parseInt(id))
  res.status(200).send(response)
  return;
})

app.delete('/api/v1/user/transactions/:id', (req, res) => {
  const { id } = req.params
  //const response = transactions.filter((item) => item.id !== parseInt(id))
 //transactions = response;
  transactions = transactions.filter((transaction) => transaction.id !== id)
  return res.status(200).send({message: "Transaction deleted successfully" })

})

app.patch('/api/v1/user/transactions/:transaction_id', (req, res) => {
  const { transaction_id } = req.params
 
  const body = req.body;

    transactions.map((response) => {
    if (response.id === parseInt(transaction_id)) {
      response.date = body.date;
      response.amount = body.amount
      response.balance = body.balance
      response.extra = {
          transactions_type: body.extra.transactions_type,
          category: body.extra.category,
          notes: body.extra.notes
      }
    }
    return  res.status(200).send("Transaction updated successfully");
   
  })

  return res.status(200).send('failed to update transaction')
  
 
})

app.post('/api/v1/user/transaction', (req, res) => {
  const body = req.body
  const id = parseInt(body.id)
  
  const exist = transactions.filter((item)=>item.id === id);

    if(exist.length > 0 ){
      return res.status(200).send('Transaction alrady exist')
    }

  transactions.push({
    ...body,
    id:id
  });

  return res.status(200).send(transactions)
  
})

// app.get('/api/users/items', (req, res) => {
//   res.status(200).send(transactions)
//   return;
// })

// app.get('/user/transactions/:id', (req, res) => {
//   const obj = users.find((x) => x.id === parseInt(req.params.id))
//   res.status(200).send(obj)
// })

app.get("/create", (req, res) => {
  users = [req.body, ...transactions]
  res.send(transactions)
})



app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
