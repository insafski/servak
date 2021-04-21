'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("pages", {
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
            heading: {
                allowNull: false,
                type: Sequelize.JSONB,
            },
            slug: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: true,
            },
            picture: {
                allowNull: false,
                type: Sequelize.JSONB,
            },
            seo: {
                type: Sequelize.JSONB,
            },
            sections: {
                type: Sequelize.JSONB,
            },
            settings: {
                type: Sequelize.JSONB,
            },
            status: {
                allowNull: false,
                type: Sequelize.STRING,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('pages');
    }
};