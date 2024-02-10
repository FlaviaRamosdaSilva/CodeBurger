'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Categories', 'path',{ //adicionar uma coluna na planilha category, com nome path (de imagem) é o link das imagens do produto, foto do produto
        type: Sequelize.STRING,
      })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Categories', 'path');
  }
  
};
