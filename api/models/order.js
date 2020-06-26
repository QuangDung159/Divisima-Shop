/* jshint indent: 2 */
const { sequelize, Model, DataTypes } = require("./index");

class Order extends Model { };
Order.init({
  orderId: {
    type: DataTypes.INTEGER(10).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'order_id'
  },
  customerId: {
    type: DataTypes.INTEGER(10).UNSIGNED,
    allowNull: false,
    references: {
      model: 'customer',
      key: 'customer_id'
    },
    field: 'customer_id'
  },
  shippingStatusId: {
    type: DataTypes.INTEGER(10).UNSIGNED,
    allowNull: false,
    references: {
      model: 'shipping_status',
      key: 'shipping_status_id'
    },
    field: 'shipping_status_id'
  },
  orderCreatedAt: {
    type: DataTypes.INTEGER(10).UNSIGNED,
    allowNull: false,
    field: 'order_created_at'
  },
  orderUpdatedAt: {
    type: DataTypes.INTEGER(10).UNSIGNED,
    allowNull: true,
    field: 'order_updated_at'
  },
  orderUpdatedBy: {
    type: DataTypes.INTEGER(10).UNSIGNED,
    allowNull: true,
    field: 'order_updated_by'
  }
}, {
  tableName: 'order',
  sequelize,
  freezeTableName: true,
  modelName: "order",
  timestamps: false
});

module.exports = Order;