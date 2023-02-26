module.exports = (sequelize, DataTypes) => {
  const News = sequelize.define(
    'news',
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
      sent: DataTypes.BOOLEAN,
    },
    {
      timestamps: false,
      tableNAme: 'news',
    }
  );
  return News;
};
