/* jshint indent: 2 */
const { sequelize, Model, DataTypes } = require("./index");

class Category extends Model { };
Category.init({
  categoryId: {
    type: DataTypes.INTEGER(10).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'category_id'
  },
  categoryName: {
    type: DataTypes.STRING(255),
    allowNull: false,
    field: 'category_name'
  },
  categoryStatus: {
    type: DataTypes.INTEGER(4),
    allowNull: false,
    defaultValue: '1',
    field: 'category_status'
  },
  categoryIsDeleted: {
    type: DataTypes.INTEGER(4),
    allowNull: false,
    defaultValue: '0',
    field: 'category_is_deleted'
  },
  categoryCreatedAt: {
    type: DataTypes.INTEGER(10).UNSIGNED,
    allowNull: false,
    field: 'category_created_at'
  },
  categoryCreatedBy: {
    type: DataTypes.INTEGER(10).UNSIGNED,
    allowNull: false,
    references: {
      model: 'admin',
      key: 'admin_id'
    },
    field: 'category_created_by'
  },
  categoryUpdatedAt: {
    type: DataTypes.INTEGER(10).UNSIGNED,
    allowNull: true,
    field: 'category_updated_at'
  },
  categoryUpdatedBy: {
    type: DataTypes.INTEGER(10).UNSIGNED,
    allowNull: true,
    references: {
      model: 'admin',
      key: 'admin_id'
    },
    field: 'category_updated_by'
  }
}, {
  tableName: 'category',
  sequelize,
  modelName: "category",
  timestamps: false,
  freezeTableName: true
})

module.exports = Category;