import Sequelize from 'sequelize'
import configDatabase from '../config/database'

import User from '../App/models/User'
import Product from '../App/models/Product'
import Category from '../App/models/Category'

const models = [User, Product, Category] // colocamos todos models dentro de um array para facilitar; dentro das funções colocamos models pra não precisar fazer um de cada model

class Database {
    constructor() {  // Toda vez que a minha classe DataBase for instanciada o método constructor é chamado automaticamente e ele chama o método init
        this.init()
    }

    init() {
        this.connection = new Sequelize(configDatabase) //to instanciando meu sequelize
        models.map( model => model.init(this.connection)) // clicando o ctrl+init ali em verde ele vai pra pasta de user.js
    }
}

export default new Database() //já vai instanciado