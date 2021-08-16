module.exports = function (sequelize, DataTypes) {
    var Franchise = sequelize.define("franchises", {
        id: {
            primaryKey: true,
            type: DataTypes.STRING,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
            unique : true
        },
        name_url : {
            type : DataTypes.STRING
        },
        gst_code : {
            type : DataTypes.STRING,
            allowNull : true
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

    Franchise.associate =  (models) => {
        Franchise.hasMany(models.franchises_address)
        Franchise.hasMany(models.warehouses);
    }

    // Franchise.associate = (models) => {
    //     Franchise.hasMany(models.warehouses);
    // }

    return Franchise;
};