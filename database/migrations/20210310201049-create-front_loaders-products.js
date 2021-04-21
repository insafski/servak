'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("front_loaders_products", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            deletedAt: {
                allowNull: true,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            frontLoaderId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: "front_loaders",
                    key: "id",
                },
            },
            productId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: "products",
                    key: "id",
                },
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("front_loaders_products");
    }
};