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

module.exports = {
    Sequelize,
    sequelize,
    Model,
    DataTypes
};