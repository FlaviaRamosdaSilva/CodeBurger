'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Products', 'category')
  }, //aqui vamos remover a coluna com o removeColumn...
  // (1a parâmetro é o nome da tabela que vamos excluir a coluna; 2a parâmetro é o nome da coluna que vamos excluir)

  // Já o down, como é o contrário do up, vamos adicionar a coluna, caso algo acima de errado. pra isso vamos usar o addColumn;
  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('Products', 'category', Sequelize.STRING)
  },
}
     // primeiro parâmetro do addColumn é a tabela em que vamos inserir a coluna e o 2a é como será a coluna.
     // para o 2a parâmetro, utilizamos as mesmas categorias inseridas na migration de creação dele.
