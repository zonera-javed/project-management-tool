module.exports = {
  up: (queryInterface, Sequelize) => 
     queryInterface.addColumn('Tasks', 'projectId', {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Projects',
          key: 'id',
          as: 'projectId',
        },
     }),
          
  down: (queryInterface) => queryInterface.removeColumn('Tasks', 'projectId'),
};
