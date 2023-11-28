import express from "express";
import routes from "./routes";
import './database'

class App {
  constructor() {
    this.app = express(); // guardamos o express dentro da variável e exportamos ela por meio do this
    this.middlewares(); // avisamos que utilizaremos toda a aplicação pelo método JSON
    this.routes(); // deixamos nossas rotas disponíveis para rodar assim que inicia a aplicação
  }

  middlewares() {
    this.app.use(express.json());
  }

  routes() {
    this.app.use(routes); // use é utilizado de acordo com a documentação do express que pede isso
  }
}

export default new App().app;

