/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shippingStatus', {
    shippingStatusId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'shipping_status_id'
    },
    shippingStatusLabel: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'shipping_status_label'
    }
  }, {
    tableName: 'shipping_status'
  });
};
