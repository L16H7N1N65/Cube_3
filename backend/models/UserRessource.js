const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const UserRessource = sequelize.define('UserRessource', {
  user_ressource_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'user_id'
    }
  },
  ressource_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'ressources',
      key: 'ressource_id'
    }
  },
  is_favorite: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0
  },
  is_liked: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0
  },
  is_disliked: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0
  },
  is_shared: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0
  },
  is_reported: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0
  }
}, {
  tableName: 'user_ressource',
  timestamps: true,
  indexes: [
    {
      unique: true,
      fields: ['user_id', 'ressource_id']
    }
  ]
});

module.exports = UserRessource;
