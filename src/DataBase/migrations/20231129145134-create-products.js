'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER, // número inteiro
        allowNull: false, //campo nulo = não
        autoIncrement: true, // ele vai dar sequencia no id, cria automatico
        primaryKey: true, // chave primaria
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false, //campo nulo = não, todos tem que ter nome
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false, //campo nulo = não, todos tem que ter preço
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false, //campo nulo = não, todos tem que pertencer a uma categoria
      },
      path: { // é o link das imagens do produto, foto do produto
        type: Sequelize.STRING,
        allowNull: false, //campo nulo = não
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false 
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
    })
  },

  async down (queryInterface) {
   await queryInterface.dropTable('products');
  
  }
};

