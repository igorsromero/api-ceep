'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Notas', [
      {
        titulo: 'Teste 1',
        texto: "Testando 1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Teste 2',
        texto: "Testando 2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Teste 3',
        texto: "Testando 3",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Notas', null, {});
  }
};
