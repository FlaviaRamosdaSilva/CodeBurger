'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) { // aqui estamos criando uma nova coluna com relacionamento com outra tabela
    await queryInterface.addColumn('Products', 'category_id', { //pra adicionar a coluna, colocamos o addColumn; 1a parâmetro é a tabela que vc vai adicionar a coluna
      type: Sequelize.INTEGER, // 2a parâmetro é o nome da coluna que vc vai adicionar; 3a parâmetro é o conteúdo dessa coluna,dados,caracteristicas;
      references: { model: 'Categories', key: 'id'}, // depois do tipo (type) colocamos o references para referenciar ela a outra tabela; neste usamos 02 parâmetros
     //1a o model que indica qual tabela vamos fazer o relacionamento; 2a é o campo que terá alusão com esta tabela (Id da categories vai dentro da tabela products)
      onUpdate: 'CASCADE', // quando atualizar a tabela categories, a nossa tabela products vai atualizar também, em movimento de cascata
      onDelete: 'SET NULL', // Caso eu delete uma categoria na tabela categories, aqui na product vai ficar nulo
      allowNull: true, // campo nulo, sim, podemos ter esse campo nulo;
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Products', 'category_id' );
    // Como o down é o contrário, caso o up der errado, nós vamos remover a coluna criada no up: informamos o nome da tabela e a coluna da tabela que queremos remover.
  }
};
