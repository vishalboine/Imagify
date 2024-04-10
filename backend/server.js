const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const morgan = require('morgan');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const path = require('path');

const connectDB = require('./db/connect.js');
// routers
const imgRouter =  require('./router/imgRouter.js');
// middleware
const notFoundMiddleware =  require('./middleware/not-found.js');

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

// const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.static(path.resolve(__dirname, './images')))

app.use(express.json())

app.use(cors(corsOptions));

app.use('/api/v1', imgRouter)

app.use(notFoundMiddleware)

const port = process.env.PORT || 4000
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`server is listeing on port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()