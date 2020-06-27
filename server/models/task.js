module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
       type: DataTypes.TEXT,
       allowNull: false,
    },
    score: {
       type: DataTypes.INTEGER,
       allowNull: false,
    },
    status: {
       type: DataTypes.ENUM,
       values: ['active', 'inactive', 'declined', 'completed'],
       allowNull: false,
    },
  });
  Task.associate = (models) => {
    Task.belongsTo(models.Project, {
       foreignKey: 'projectId',
       onDelete: 'CASCADE',
    });
    Task.belongsTo(models.User, {
       foreignKey: 'userId',
       onDelete: 'CASCADE',
    });
  };
  return Task;
};
