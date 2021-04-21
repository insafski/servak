const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Logs extends Model {
        static associate(models) {}
    }
    
    Logs.init(
        {
            prev_data: DataTypes.JSONB,
            new_data: DataTypes.JSONB,
        },
        {
            sequelize,
            modelName: "logs",
        }
    );
    return Logs;
};
