import Server from './src/server'

const server = Server()

server
  .initServer()
  .then(() => console.log(`Modo de ejecución: ${process.env.NODE_ENV}`))
  .catch(console.error)
