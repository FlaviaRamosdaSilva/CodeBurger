'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('products', 'price',{ //alterar o campo para que aceite numeros decimais, com virgula
      type: Sequelize.DECIMAL(10, 2), // é um número decimal com até 10 dígitos no total, sendo 2 deles após o ponto decimal.
      allowNull: false,
      })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('products', 'price', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },
};