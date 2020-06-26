/* jshint indent: 2 */
const { sequelize, Model, DataTypes } = require("./index");

class Brand extends Model { };
Brand.init({
  brandId: {
    type: DataTypes.INTEGER(10).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'brand_id'
  },
  brandName: {
    type: DataTypes.STRING(255),
    allowNull: false,
    field: 'brand_name'
  },
  brandStatus: {
    type: DataTypes.INTEGER(4),
    allowNull: false,
    defaultValue: '1',
    field: 'brand_status'
  },
  brandIsDeleted: {
    type: DataTypes.INTEGER(4),
    allowNull: false,
    defaultValue: '0',
    field: 'brand_is_deleted'
  },
  brandCreatedAt: {
    type: DataTypes.INTEGER(10).UNSIGNED,
    allowNull: false,
    field: 'brand_created_at'
  },
  brandCreatedBy: {
    type: DataTypes.INTEGER(10).UNSIGNED,
    allowNull: false,
    references: {
      model: 'admin',
      key: 'admin_id'
    },
    field: 'brand_created_by'
  },
  brandUpdatedAt: {
    type: DataTypes.INTEGER(10).UNSIGNED,
    allowNull: true,
    field: 'brand_updated_at'
  },
  brandUpdatedBy: {
    type: DataTypes.INTEGER(10).UNSIGNED,
    allowNull: true,
    references: {
      model: 'admin',
      key: 'admin_id'
    },
    field: 'brand_updated_by'
  }
}, {
  tableName: 'brand',
  modelName: "Brand",
  freezeTableName: true,
  sequelize,
  timestamps: false
});

module.exports = Brand;