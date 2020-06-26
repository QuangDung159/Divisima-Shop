/* jshint indent: 2 */
const { sequelize, Model, DataTypes } = require("./index");

class Admin extends Model { };
Admin.init({
  adminId: {
    type: DataTypes.INTEGER(10).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'admin_id'
  },
  adminEmail: {
    type: DataTypes.STRING(255),
    allowNull: false,
    field: 'admin_email'
  },
  adminPassword: {
    type: DataTypes.STRING(255),
    allowNull: false,
    field: 'admin_password'
  },
  adminStatus: {
    type: DataTypes.INTEGER(4),
    allowNull: false,
    defaultValue: '1',
    field: 'admin_status'
  },
  adminIdDeleted: {
    type: DataTypes.INTEGER(4),
    allowNull: false,
    defaultValue: '0',
    field: 'admin_id_deleted'
  },
  adminCreatedAt: {
    type: DataTypes.INTEGER(10).UNSIGNED,
    allowNull: false,
    field: 'admin_created_at'
  },
  adminCreatedBy: {
    type: DataTypes.INTEGER(10).UNSIGNED,
    allowNull: false,
    references: {
      model: 'admin',
      key: 'admin_id'
    },
    field: 'admin_created_by'
  },
  adminUpdatedAt: {
    type: DataTypes.INTEGER(10).UNSIGNED,
    allowNull: true,
    field: 'admin_updated_at'
  },
  adminUpdatedBy: {
    type: DataTypes.INTEGER(10).UNSIGNED,
    allowNull: true,
    references: {
      model: 'admin',
      key: 'admin_id'
    },
    field: 'admin_updated_by'
  }
}, {
  tableName: 'admin',
  modelName: "admin",
  freezeTableName: true,
  timestamps: false,
  sequelize
});

module.exports = Admin;
