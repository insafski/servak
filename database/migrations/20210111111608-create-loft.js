"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("Lofts", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                allowNull: false,
                type: Sequelize.TEXT,
            },
            phone: {
                allowNull: false,
                type: Sequelize.TEXT,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            deletedAt: {
                allowNull: true,
                type: Sequelize.DATE,
            },
        });
    },
    down: async (queryInterface) => {
        await queryInterface.dropTable("Lofts");
    },
};
