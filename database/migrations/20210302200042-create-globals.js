'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("globals", {
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
                type: Sequelize.DATE,
            },
            metaData: {
                type: Sequelize.JSONB,
            },
            header: {
                type: Sequelize.JSONB,
            },
            footer: {
                type: Sequelize.JSONB,
            },
            settings: {
                type: Sequelize.JSONB,
            },
            params: {
                type: Sequelize.JSONB,
            },
            contacts: {
                type: Sequelize.JSONB,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('globals');
    }
};