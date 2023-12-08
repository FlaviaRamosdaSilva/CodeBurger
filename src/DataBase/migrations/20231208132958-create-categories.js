'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('categories', {
      id: { //copiamos do product
        type: Sequelize.INTEGER, // número inteiro
        allowNull: false, //campo nulo = não
        autoIncrement: true, // ele vai dar sequencia no id, cria automatico
        primaryKey: true, // chave primaria
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false, //campo nulo = não, todos tem que ter nome
        unique: true, // tem que ser único, não pode ter outra categoria
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
    await queryInterface.dropTable('categories')
   }
 };
