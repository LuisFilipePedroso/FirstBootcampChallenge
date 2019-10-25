import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './routes'

let qtyOfRequest = 0

function countNumberOfRequest(req, res, next) {
  qtyOfRequest += 1

  console.log(`Numero de requisições: ${qtyOfRequest}`)

  return next()
}

class App {
  constructor() {
    this.server = express()
    mongoose.connect('mongodb://localhost:27017/projects', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.server.use(express.json())
    this.server.use(cors())
    this.server.use(countNumberOfRequest)
  }

  routes() {
    this.server.use(routes)
  }
}

export default new App().server
