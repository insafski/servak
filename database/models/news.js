'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class News extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    
    News.init(
        {
            heading: DataTypes.JSONB,
            slug: DataTypes.STRING,
            picture: DataTypes.JSONB,
            seo: DataTypes.JSONB,
            sections: DataTypes.JSONB,
            settings: DataTypes.JSONB,
            status: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "News",
        }
    );
    return News;
};