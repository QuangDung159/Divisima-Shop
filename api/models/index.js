const config = require("../configs/index");

const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    config.DB_NAME,
    config.DB_USERNAME,
    config.DB_PASSWORD,
    {
        host: config.DB_HOST,
        dialect: config.DB_DIALECT,
        define: {
            charset: 'utf8',
            collate: 'utf8mb4_unicode_ci',
            timestamps: true,
            engine: "InnoDB"
        },
    },
);

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });



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
    modelName: "brand",
    freezeTableName: true,
    sequelize,
    timestamps: false
});

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
});

Admin.hasMany(Brand, {
    foreignKey: "brand_id",
    as: "admin"
});

Brand.belongsTo(Admin, {
    foreignKey: "admin_id",
    as: "brand"
});

module.exports = {
    Sequelize,
    sequelize,
    Model,
    DataTypes,
    Admin,
    Brand,
    Category
};