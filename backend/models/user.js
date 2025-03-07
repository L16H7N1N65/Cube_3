// models/user.js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'User',
    {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { isEmail: true },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // Optional: Add rgpd_id, role_id if you want direct references
      // rgpd_id: {
      //   type: DataTypes.INTEGER,
      //   allowNull: true,
      // },
      // role_id: {
      //   type: DataTypes.INTEGER,
      //   allowNull: true,
      // },
    },
    {
      tableName: 'users', // ensures table is named 'users'
      timestamps: true,
    }
  );
};
