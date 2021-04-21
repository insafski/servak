"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("users", {
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
            role: {
                allowNull: false,
                type: Sequelize.TEXT,
                defaultValue: "mereMortal",
            },
            status: {
                allowNull: false,
                type: Sequelize.TEXT,
                defaultValue: "pending",
            },
            deletedAt: {
                type: Sequelize.DATE,
            },
            login: {
                allowNull: false,
                type: Sequelize.TEXT,
                unique: true,
            },
            lastName: {
                type: Sequelize.TEXT,
            },
            firstName: {
                type: Sequelize.TEXT,
            },
            email: {
                allowNull: false,
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
                type: Sequelize.TEXT,
            },
            avatar: {
                type: Sequelize.JSONB,
            },
            settings: {
                type: Sequelize.JSONB,
            },
            secret: {
                type: Sequelize.TEXT,
            },
        });
    },
    down: async (queryInterface) => {
        await queryInterface.dropTable("users");
    },
};
