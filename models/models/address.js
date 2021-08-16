module.exports = function (sequelize, DataTypes) {
    var FranchiseAddress = sequelize.define("franchises_address", {
        id: {
            primaryKey: true,
            type: DataTypes.STRING,
            defaultValue: DataTypes.UUIDV4
        },
        description: {
            allowNull: false,
            type: DataTypes.STRING
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        },
        deletedAt: {
            type: DataTypes.DATE,
            defaultValue: null
        }
    });

    FranchiseAddress.associate = (models) => {
        FranchiseAddress.belongsTo(models.franchises);
        FranchiseAddress.hasMany(models.warehouses);
    }

    // FranchiseAddress.associate = (models) => {
    //     FranchiseAddress.hasMany(models.warehouses);
    // }

    return FranchiseAddress;
};