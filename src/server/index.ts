const jsonServer = require( 'json-server')
const path = require('path')

const server = jsonServer.create()

const defaultMiddleware = jsonServer.defaults()

const router = jsonServer.router(path.join(__dirname, "database", 'db.json'))

server.use(defaultMiddleware)

server.use(router)

server.listen(3333, () => {
  console.log('JSON Server is running')
})