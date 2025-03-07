// models/UserRessource.js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'UserRessource',
    {
      user_ressource_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ressource_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      is_favorite: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      is_liked: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      is_disliked: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      is_shared: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      is_reported: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      tableName: 'user_ressource',
      timestamps: true,
      indexes: [
        {
          unique: true,
          fields: ['user_id', 'ressource_id'],
        },
      ],
    }
  );
};
