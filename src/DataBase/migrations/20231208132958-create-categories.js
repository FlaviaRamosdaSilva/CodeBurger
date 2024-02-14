'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Categories', {
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
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false 
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable('Categories')
   }
 };
