const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const PersonalData = sequelize.define('PersonalData', {
  rgpd_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  tableName: 'personal_datas',
  timestamps: true
});

module.exports = PersonalData;
