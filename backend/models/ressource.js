// models/ressource.js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'Ressource',
    {
      ressource_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      author_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      moderator_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      approval_status: {
        type: DataTypes.ENUM('0', '1', '2'),
        defaultValue: '0',
      },
      acces_status: {
        type: DataTypes.ENUM('0', '1', '2'),
        defaultValue: '0',
      },
      path: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      mime_type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      size: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      created_on: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updated_on: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: 'ressources',
      timestamps: true,
    }
  );
};
