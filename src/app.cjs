const cors = require('cors');
const express = require('express');
const { dirname, resolve } = require('path');
const { fileURLToPath } = require('url');
const routesPromise = import('./routes.js');

const mongoose = require('mongoose');
const Sequelize = require('sequelize');

const CategoryPromise = import('./App/models/Category.js');
const ProductPromise = import('./App/models/Product.js');
const UserPromise = import('./App/models/User.js');

module.exports = {
    constructor() {  // Toda vez que a minha classe DataBase for instanciada o método constructor é chamado automaticamente e ele chama os métodos abaixo
        this.init() //método initi ele faz a conexão dos models do Postgres
        this.mongo() // método mongo faz conexão com o mongoDB
    },

    init() {
        this.connection = new Sequelize('postgresql://postgres:Ea*F5feD643E-4B2BfB6F5G6ad1eGG4d@monorail.proxy.rlwy.net:25535/railway') //to instanciando meu sequelize // clicando o ctrl+init ali em verde ele vai pra pasta de user.js
        Promise.all([UserPromise, ProductPromise, CategoryPromise])
            .then(([User, Product, Category]) => {
                const models = [User.default, Product.default, Category.default];
                models.forEach(model => model.init(this.connection));
                models.forEach(model => {
                    if (model.associate) {
                        model.associate(this.connection.models);
                    }
                });
            })
            .catch(error => {
                console.error('Erro ao inicializar modelos:', error);
            });
    },

    mongo(){ // fazendo a conexão com o MongoDb com a ajuda do mongoose
        this.mongoConnection = mongoose.connect('mongodb://mongo:4Ch3DdbEDb3CH-5HBdBA5E36b15C-6fe@viaduct.proxy.rlwy.net:30919') 
    } // a documentação do mongo pede que seja assim 'mongodb://localhost' + porta + o nome do banco de dados
} //baixamos o MongoDB Compass para visualizar os dados do banco de dados do MongoDB; ele já achou o code burger conforme feito acima

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
    routesPromise.then(routes => {
      this.app.use(routes.default);
    }).catch(error => {
      console.error('Erro ao carregar rotas:', error);
    });
  }
}

module.exports = new App().app;

