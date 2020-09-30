const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const router = require('./config/routes')

// const errorHandler = require('./lib/errorHandler')

const connectDB = require('./db/connect')
dotenv.config({ path: './config/config.env' })

connectDB() //* calling connection here. Comes after dotenv as I am calling process.env within the connectDB function
const app = express()
app.use(bodyParser.json())
app.use('/api', router)

// app.use(errorHandler)  //* errorHandler will receive anything that will come after the controller -> in this case there are 2 options -> 1) asyncHandler, catch/next 2) next within a controller
const PORT = process.env.PORT || 8000 //* this is a fallback incase the process.env file doesn't work
const server = app.listen(PORT, () => console.log(`Express is listening on port ${PORT}`))
//* handle unhandled promise rejections: (node:44800) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated.
//* unhandled promise rejections cause the server to "hang" -> process.exit allows us to put an end to it
// //* kills the server
process.on('unhandledRejection', (err, promise) => {
  console.log(`err: ${err.message}`)
  server.close(() => process.exit(1))
})
