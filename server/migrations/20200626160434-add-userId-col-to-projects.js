module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.addColumn('Projects', 'userId', {
         type: Sequelize.INTEGER,
         onDelete: 'CASCADE',
         references: {
           model: 'Users',
           key: 'id',
           as: 'userId',
       },
    }),

  down: (queryInterface) => queryInterface.removeColumn('Projects', 'userId'),
};
