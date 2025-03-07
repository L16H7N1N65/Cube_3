module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Role', {
    role_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }, {
    tableName: 'roles',
    timestamps: true
  });
};
