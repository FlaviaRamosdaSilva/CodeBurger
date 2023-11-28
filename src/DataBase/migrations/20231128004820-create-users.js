'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {

      id: {  //abaixo as especificações do ID
        type: Sequelize.UUID, // verificar na documentação do sequelize
        defaultValue: Sequelize.UUIDV4, // verificar na documentação do sequelize
        allowNull: false, //esse campo não pode ser nulo (ID)
        primaryKey: true, //chav-primária = não se repete nunca (id sempre vai ser)
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false, //esse campo não pode ser nulo (name)
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false, //esse campo não pode ser nulo (email)
        unique: true,
      },
      password_hash: { //o campo não se chama password por que deve ser criptografado dentro do banco de dados
        type: Sequelize.STRING,
        allowNull: false, //esse campo não pode ser nulo (password)
      },
      admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false, //se não mandar informação nenhuma o valor dele vai ser falso
        allowNull: false, //esse campo não pode ser nulo (admin)
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    
    })
      
  },

  async down (queryInterface) {
    await queryInterface.dropTable('users');
  }
};
