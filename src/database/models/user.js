module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define(
    "user",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user: DataTypes.STRING,
      birthdate: DataTypes.DATE,
      email: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );
  return User;
};
