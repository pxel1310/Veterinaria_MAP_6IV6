import Server from "./server/server";

const server = Server();

server
  .initServer()
  .then(() => console.log("Servidor 'Veterinaria' en linea 👍"))
  .catch(console.error);
