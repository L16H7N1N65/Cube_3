import { DataTypes } from 'sequelize';

export default (sequelize) => {
  return sequelize.define('PersonalData', {
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
};