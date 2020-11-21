"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("Users", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            login: {
                allowNull: true,
                type: Sequelize.TEXT,
                unique: true,
            },
            lastName: {
                allowNull: true,
                type: Sequelize.TEXT,
            },
            firstName: {
                allowNull: true,
                type: Sequelize.TEXT,
            },
            email: {
                allowNull: true,
                type: Sequelize.TEXT,
                unique: true,
                validate: {
                    isEmail: true,
                },
            },
            password: {
                allowNull: false,
                type: Sequelize.TEXT,
            },
            phone: {
                allowNull: true,
                type: Sequelize.TEXT,
            },
            avatar: {
                allowNull: true,
                type: Sequelize.JSONB,
            },
            role: {
                allowNull: false,
                type: Sequelize.TEXT,
                defaultValue: "user",
            },
            settings: {
                allowNull: true,
                type: Sequelize.JSONB,
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
            status: {
                allowNull: false,
                type: Sequelize.TEXT,
                defaultValue: "pending",
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("Users");
    },
};
