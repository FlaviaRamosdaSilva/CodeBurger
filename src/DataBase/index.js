import mongoose from 'mongoose'
import Sequelize from 'sequelize'


import Category from '../App/models/Category'
import Product from '../App/models/Product'
import User from '../App/models/User'

const models = [User, Product, Category] // colocamos todos models dentro de um array para facilitar; dentro das funções colocamos models pra não precisar fazer um de cada model

class Database {
    constructor() {  // Toda vez que a minha classe DataBase for instanciada o método constructor é chamado automaticamente e ele chama os métodos abaixo
        this.init() //método initi ele faz a conexão dos models do Postgres
        this.mongo() // método mongo faz conexão com o mongoDB
    }

    init() {
        this.connection = new Sequelize('postgresql://postgres:Ea*F5feD643E-4B2BfB6F5G6ad1eGG4d@monorail.proxy.rlwy.net:25535/railway') //to instanciando meu sequelize // clicando o ctrl+init ali em verde ele vai pra pasta de user.js
        models.map( model => model.init(this.connection)).map(model => model.associate && model.associate(this.connection.models))
        //segundo map é para fazer o relacionamento  // quero verificar dentro de cada model se existe o método associate, caso tenha (if &&) vou criar a conexão pelo
        // this.conecction.models;
    }

    mongo(){ // fazendo a conexão com o MongoDb com a ajuda do mongoose
        this.mongoConnection = mongoose.connect('mongodb://mongo:4Ch3DdbEDb3CH-5HBdBA5E36b15C-6fe@viaduct.proxy.rlwy.net:30919') 
    } // a documentação do mongo pede que seja assim 'mongodb://localhost' + porta + o nome do banco de dados
} //baixamos o MongoDB Compass para visualizar os dados do banco de dados do MongoDB; ele já achou o code burger conforme feito acima

export default new Database() //já vai instanciado