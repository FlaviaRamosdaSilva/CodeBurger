import cors from 'cors';
import express from "express";
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import Database from './database/index.mjs';
import routes from "./routes.js";

console.log(Database)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
class App {
  constructor() {
    this.app = express(); // guardamos o express dentro da variável e exportamos ela por meio do this
    this.app.use(cors()) //habilitado o cors para conseguir linkar back e front
    this.middlewares(); // avisamos que utilizaremos toda a aplicação pelo método JSON
    this.routes(); // deixamos nossas rotas disponíveis para rodar assim que inicia a aplicação
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use('/product-file', express.static(resolve(__dirname, "..", "uploads")));
    //quando alguem acessar a rota productfile vc vai permitir que a pessoa terão acesso a arquivos estaticos dentro da minha aplicação + diretorio em que estão os arquivos
    this.app.use('/category-file', express.static(resolve(__dirname, "..", "uploads")));
    //quando alguem acessar a rota category-file vc vai permitir que a pessoa terão acesso a arquivos estaticos dentro da minha aplicação + diretorio em que estão os arquivos
  }

  
  routes() {
    this.app.use(routes); // use é utilizado de acordo com a documentação do express que pede isso
  }
}

export default new App().app;

