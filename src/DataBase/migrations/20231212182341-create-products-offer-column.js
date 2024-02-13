'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn('products', 'offer',{ //adicionar uma coluna na planilha products, com nome offer (de oferta)
    type: Sequelize.BOOLEAN, //vai ser verdadeiro ou falso
    defaultValue: false, //por padrão eles virão falso quando cadastrado o produto
    allowNull: false, //não podemos ter o campo nulo
   });
    
  },

  async down (queryInterface, Sequelize) { //down é o contrário de up, então remove a coluna
    await queryInterface.removeColumn('products', 'offer');
    
  }
};
