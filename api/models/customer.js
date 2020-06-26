/* jshint indent: 2 */
const { sequelize, Model, DataTypes } = require("./index");

class Customer extends Model { };
Customer.init(
  {
    customerId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'customer_id'
    },
    customerEmail: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'customer_email'
    },
    customerPassword: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'customer_password'
    },
    customerName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: 'Valuable Customer',
      field: 'customer_name'
    },
    customerAddress: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'customer_address'
    },
    customerPhone: {
      type: DataTypes.STRING(12),
      allowNull: false,
      field: 'customer_phone'
    }
  }, {
  tableName: 'customer',
  sequelize,
  modelName: "customer",
  freezeTableName: true,
  timestamps: false
});

module.exports = Customer;
