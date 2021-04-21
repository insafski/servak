const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {}
    }
    
    User.init(
        {
            login: DataTypes.TEXT,
            email: DataTypes.TEXT,
            lastName: DataTypes.TEXT,
            firstName: DataTypes.TEXT,
            avatar: DataTypes.JSONB,
            settings: DataTypes.JSONB,
            email: DataTypes.TEXT,
            phone: DataTypes.TEXT,
            role: DataTypes.TEXT,
            password: DataTypes.TEXT,
            deletedAt: DataTypes.DATE,
            status: DataTypes.TEXT,
            secret: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: "User",
        }
    );
    return User;
};
