/* jshint indent: 2 */
const { sequelize, Model, DataTypes } = require("./index");

class OrderProduct extends Model { };
OrderProduct.init({
  orderProductId: {
    type: DataTypes.INTEGER(10).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'order_product_id'
  },
  orderId: {
    type: DataTypes.INTEGER(10).UNSIGNED,
    allowNull: false,
    references: {
      model: 'order',
      key: 'order_id'
    },
    field: 'order_id'
  },
  productId: {
    type: DataTypes.INTEGER(10).UNSIGNED,
    allowNull: false,
    references: {
      model: 'product',
      key: 'product_id'
    },
    field: 'product_id'
  },
  orderProductQty: {
    type: DataTypes.INTEGER(10).UNSIGNED,
    allowNull: false,
    defaultValue: '1',
    field: 'order_product_qty'
  }
}, {
  tableName: 'order_product',
  modelName: "orderProduct",
  freezeTableName: true,
  sequelize,
  timestamps: false
});

module.exports = OrderProduct;
