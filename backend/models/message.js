// models/User.js
import { DataTypes } from 'sequelize';

export default (sequelize) => {
  return sequelize.define('Message', {
    message_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
      type: DataTypes.ENUM('0','1','2'),
      defaultValue: '0'
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_on: {
        type: DataTypes.DATE,
        allowNull: true
    },
    updated_on: {
        type: DataTypes.DATE,
        allowNull: true
    }
  }, {
    tableName: 'messages',
    timestamps: true
  });
};