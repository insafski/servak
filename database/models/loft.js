const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Loft extends Model {
        static associate(models) {}
    }
    Loft.init(
        {
            name: DataTypes.TEXT,
            phone: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: "Loft",
        }
    );
    return Loft;
};
