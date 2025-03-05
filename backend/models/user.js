const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const User = sequelize.define('User', {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created_on: {
        type: DataTypes.DATE,
        allowNull: true
    },
    updated_on: {
        type: DataTypes.DATE,
        allowNull: true
    },
    rgpd_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'personal_datas',
            key: 'rgpd_id'
        },
    },
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'roles',
            key: 'role_id'
        },
    }
  }, {
    tableName: 'users',
    timestamps: true
  });


module.exports = User;