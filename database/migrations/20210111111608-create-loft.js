"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("lofts", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
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
            name: {
                allowNull: false,
                type: Sequelize.TEXT,
            },
            phone: {
                allowNull: false,
                type: Sequelize.TEXT,
            },
        });
    },
    down: async (queryInterface) => {
        await queryInterface.dropTable("lofts");
    },
};
