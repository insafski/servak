'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("front_loaders", {
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
            status: {
                allowNull: false,
                type: Sequelize.JSONB,
            },
            heading: {
                allowNull: false,
                type: Sequelize.JSONB,
            },
            slug: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            picture: {
                allowNull: false,
                type: Sequelize.JSONB,
            },
            seo: {
                type: Sequelize.JSONB,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("front_loaders");
    }
};