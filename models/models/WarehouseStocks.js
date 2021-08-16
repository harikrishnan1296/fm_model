module.exports = function (sequelize, DataTypes) {
    var WarehouseStocks = sequelize.define(
      "warehouse_stocks",
      {
        id: {
          primaryKey: true,
          type: DataTypes.STRING,
          defaultValue: DataTypes.UUIDV4,
        },
        stock_count : {
            type: DataTypes.INTEGER,
            defaultValue : 0
        },
        buffer_count : {
            type: DataTypes.INTEGER,
            defaultValue : 0
        },
        status : {
            type: DataTypes.INTEGER,
            defaultValue : 0
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
          defaultValue: sequelize.literal("NOW()"),
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE,
          defaultValue: sequelize.literal("NOW()"),
        },
        deletedAt: {
          type: DataTypes.DATE,
          defaultValue: null,
        },
      },
      {
        defaultScope: {
          attributes: { exclude: ["deletedAt"] },
        },
      }
    );

    WarehouseStocks.associate =  (models) => {
      WarehouseStocks.belongsTo(models.product_detail)
      WarehouseStocks.belongsTo(models.warehouses)
    }
  
  
    return WarehouseStocks;
  };
  