module.exports = (sequelize, DataTypes) => {
  const User=sequelize.define(
    "User",
    {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
    role_id: DataTypes.INTEGER
  }, {});
  User.associate = function (models) {
    User.belongsTo(models.Role, {
      foreignKey: "role_id",
      as: "role",
      onDelete: "CASCADE",
    });
  }
  return User;
};