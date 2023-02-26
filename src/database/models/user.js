module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user: DataTypes.STRING,
      email: DataTypes.STRING,
      birthdate: DataTypes.DATEONLY,
    },
    {
      timestamps: false,
      tableName: 'user',
    }
  );
  return User;
};
