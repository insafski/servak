'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("articles", {
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
            status: {
                allowNull: false,
                type: Sequelize.STRING,
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
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('articles');
    }
};