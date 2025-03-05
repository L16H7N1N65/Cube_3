import { DataTypes } from 'sequelize';

export default (sequelize) => {
  return sequelize.define('UserMessage', {
    user_message_id: {
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
    message_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'messages',
        key: 'message_id'
      }
    },
    is_liked: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    },
    is_disliked: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    },
    is_reported: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    },
  }, {
    tableName: 'user_message',
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ['user_id', 'message_id']
      }
    ]
  });
};
