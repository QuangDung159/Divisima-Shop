const { sequelize, Model, DataTypes } = require("./index");

class Product extends Model { };
Product.init({
    product_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    brand_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        references: {
            model: sequelize.models.Brand,
            key: "brand_id"
        }
    },
    category_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        references: {
            model: sequelize.models.Category,
            key: "category_id"
        }
    },
    product_name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    product_desc: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    product_price: {
        type: DataTypes.DOUBLE(8, 2),
        allowNull: false,
        defaultValue: 0.00
    },
    product_qty: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        defaultValue: 0
    },
    product_rate: {
        type: DataTypes.DOUBLE(8, 2),
        allowNull: false,
        defaultValue: 0.00
    },
    product_status: {
        type: DataTypes.TINYINT(4),
        allowNull: false,
        defaultValue: 1
    },
    product_is_deleted: {
        type: DataTypes.TINYINT(4),
        allowNull: false,
        defaultValue: 0
    },
    product_created_by: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        references: {
            model: sequelize.models.Admin,
            key: "admin_id"
        },
        allowNull: false
    },
    product_created_at: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false
    },
    product_updated_at: {
        type: DataTypes.INTEGER(10).UNSIGNED
    },
    product_updated_by: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        references: {
            model: sequelize.models.Admin,
            key: "admin_id"
        }
    },
    product_image: {
        type: DataTypes.TEXT(),
        allowNull: false,
        defaultValue: 'a:4:{i:0;s:11:"default.jpg";i:1;s:11:"default.jpg";i:2;s:11:"default.jpg";i:3;s:11:"default.jpg";}'
    }
}, {
    sequelize,
    timestamps: false,
    modelName: "Product",
    tableName: "product",
    freezeTableName: true
});

module.exports = Product;