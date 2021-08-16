module.exports = function (sequelize, DataTypes) {
    var Warehouse = sequelize.define("warehouses", {
        id: {
            primaryKey: true,
            type: DataTypes.STRING,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        name_url : {
            type : DataTypes.STRING
        },
        location : {
            type : DataTypes.STRING,
            allowNull : true
        },
        location_point : {
            allowNull : true,
            type : DataTypes.GEOMETRY('POINT')
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

    Warehouse.associate =  (models) => {
        Warehouse.belongsTo(models.franchises_address)
        Warehouse.hasMany(models.warehouse_stocks)
        Warehouse.belongsTo(models.branches)
        Warehouse.belongsTo(models.franchises)
        Warehouse.hasMany(models.users,{
            foreignKey : "assignedWarehouseFK"
        })
        Warehouse.belongsToMany(models.users, {
            through : 'user_warehouse'
        })
        Warehouse.hasMany(models.demo_orders, { foreignKey: 'warehouse_id'})
        Warehouse.hasMany(models.try_and_buy, { foreignKey: 'warehouse_id'})
        Warehouse.hasMany(models.transfer_orders,{foreignKey:'source_warehouse'})
        Warehouse.hasMany(models.transfer_orders,{foreignKey:'destination_warehouse'})
        Warehouse.hasMany(models.packages,{foreignKey:'source_warehouse'})
        Warehouse.hasMany(models.packages,{foreignKey:'destination_warehouse'})
    }


    return Warehouse;
};