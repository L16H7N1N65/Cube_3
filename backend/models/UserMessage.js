// models/UserMessage.js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'UserMessage',
    {
      user_message_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
 
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      message_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      is_liked: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      is_disliked: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      is_reported: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      tableName: 'user_message',
      timestamps: true,
      indexes: [
        {
          unique: true,
          fields: ['user_id', 'message_id'],
        },
      ],
    }
  );
};
