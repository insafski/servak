'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Globals extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };

    Globals.init(
        {
            seo: DataTypes.JSONB,
            header: DataTypes.JSONB,
            footer: DataTypes.JSONB,
        },
        {
            sequelize,
            modelName: "Globals",
        }
    );
    return Globals;
};