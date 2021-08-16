module.exports = function (sequelize, DataTypes) {
    var help = sequelize.define("help", {
        sequenceNum:{
            type: DataTypes.INTEGER
        },
        id: {
            type: DataTypes.STRING,
            primaryKey:true,
            defaultValue: DataTypes.UUIDV4
        },
        url: {
            allowNull: false,
            type: DataTypes.STRING
        },
        title: {
            allowNull: false,
            type: DataTypes.JSON
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

    /*FranchiseAddress.associate = (models) => {
        FranchiseAddress.belongsTo(models.franchises);
        FranchiseAddress.hasMany(models.warehouses);
    }*/

    // FranchiseAddress.associate = (models) => {
    //     FranchiseAddress.hasMany(models.warehouses);
    // }

    return help;
};