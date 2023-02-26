module.exports = (sequelize, DataTypes) => {
  var News = sequelize.define(
    "news",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: DataTypes.DATE,
      description: DataTypes.STRING,
      link: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableNAme: "news",
    }
  );
  return News;
};
