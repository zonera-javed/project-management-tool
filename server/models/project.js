module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: {
       type: DataTypes.STRING,
       allowNull: false,
    },
    body: {
       type: DataTypes.TEXT,
       allowNull: false,
    },
    status: {
       type: DataTypes.ENUM,
       values: ['active', 'inactive', 'declined', 'completed'],
       allowNull: false,
    },
  });

  Project.associate = (models) => {
    Project.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
   Project.hasMany(models.Task, {
      foreignKey: 'projectId',
      as: 'Tasks',
    });
  };
  return Project;
};
