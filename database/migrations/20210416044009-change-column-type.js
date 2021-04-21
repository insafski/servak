'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn(
                "categories",
                "status",
                {
                    type: Sequelize.STRING,
                    allowNull: true,
                }
            ),
            queryInterface.changeColumn(
                "front_loaders",
                "status",
                {
                    type: Sequelize.STRING,
                    allowNull: true,
                }
            ),
            queryInterface.changeColumn(
                "manufacturers",
                "status",
                {
                    type: Sequelize.STRING,
                    allowNull: true,
                }
            ),
            queryInterface.changeColumn(
                "news",
                "status",
                {
                    type: Sequelize.STRING,
                    allowNull: true,
                }
            ),
            queryInterface.changeColumn(
                "pages",
                "status",
                {
                    type: Sequelize.STRING,
                    allowNull: true,
                }
            ),
            queryInterface.changeColumn(
                "products",
                "status",
                {
                    type: Sequelize.STRING,
                    allowNull: true,
                }
            ),
        ]);
    },
};