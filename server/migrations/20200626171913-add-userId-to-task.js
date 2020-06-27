module.exports = {
  up: (queryInterface, Sequelize) => 
     queryInterface.addColumn('Tasks', 'userId', {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId',
        },
     }),
          
  down: (queryInterface) => queryInterface.removeColumn('Tasks', 'userId'),
};

