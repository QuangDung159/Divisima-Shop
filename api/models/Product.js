/* jshint indent: 2 */
const { sequelize, Model, DataTypes } = require("./index");

class Product extends Model { };
Product.init({
  productId: {
    type: DataTypes.INTEGER(10).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'product_id'
  },
  brandId: {
    type: DataTypes.INTEGER(10).UNSIGNED,
    allowNull: false,
    references: {
      model: 'brand',
      key: 'brand_id'
    },
    field: 'brand_id'
  },
  categoryId: {
    type: DataTypes.INTEGER(10).UNSIGNED,
    allowNull: false,
    references: {
      model: 'category',
      key: 'category_id'
    },
    field: 'category_id'
  },
  productName: {
    type: DataTypes.STRING(255),
    allowNull: false,
    field: 'product_name'
  },
  productDesc: {
    type: DataTypes.STRING(255),
    allowNull: false,
    field: 'product_desc'
  },
  productPrice: {
    type: "DOUBLE(8,2)",
    allowNull: false,
    defaultValue: '0.00',
    field: 'product_price'
  },
  productQty: {
    type: DataTypes.INTEGER(10).UNSIGNED,
    allowNull: false,
    defaultValue: '0',
    field: 'product_qty'
  },
  productRate: {
    type: "DOUBLE(8,2)",
    allowNull: false,
    defaultValue: '0.00',
    field: 'product_rate'
  },
  productStatus: {
    type: DataTypes.INTEGER(4),
    allowNull: false,
    defaultValue: '1',
    field: 'product_status'
  },
  productIsDeleted: {
    type: DataTypes.INTEGER(4),
    allowNull: false,
    defaultValue: '0',
    field: 'product_is_deleted'
  },
  productCreatedAt: {
    type: DataTypes.INTEGER(10).UNSIGNED,
    allowNull: false,
    field: 'product_created_at'
  },
  productCreatedBy: {
    type: DataTypes.INTEGER(10).UNSIGNED,
    allowNull: false,
    references: {
      model: 'admin',
      key: 'admin_id'
    },
    field: 'product_created_by'
  },
  productUpdatedAt: {
    type: DataTypes.INTEGER(10).UNSIGNED,
    allowNull: true,
    field: 'product_updated_at'
  },
  productUpdatedBy: {
    type: DataTypes.INTEGER(10).UNSIGNED,
    allowNull: true,
    references: {
      model: 'admin',
      key: 'admin_id'
    },
    field: 'product_updated_by'
  },
  productImage: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: '\'a:4:{i:0;s:11:\"default.jpg\";i:1;s:11:\"default.jpg\";i:2;s:11:\"default.jpg\";i:3;s:11:\"default.jpg\";}\'',
    field: 'product_image'
  }
}, {
  tableName: 'product',
  sequelize,
  freezeTableName: true,
  timestamps: false,
  modelName: "product"
});

module.exports = Product
