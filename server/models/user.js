module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
       type: DataTypes.STRING,
       allowNull: false,
    },
    name: {
       type: DataTypes.STRING,
       allowNull: false,
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  });
  User.associate = (models) => {
    User.hasMany(models.Project, {
      foreignKey: 'userId',
      as: 'Projects',
    });
  };
  return User;
};
