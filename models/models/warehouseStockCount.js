module.exports = function (sequelize, DataTypes) {
    var WarehouseStockCounts = sequelize.define("warehouse_stocks_counts", {
        warehouse_stock_id : DataTypes.STRING,
        item_count : DataTypes.STRING,
        warehouseId : DataTypes.STRING,
        name : DataTypes.STRING,
        branch_name : DataTypes.STRING,
        branch_state : DataTypes.STRING,
        productDetailId : DataTypes.STRING,
        branch_district : DataTypes.STRING
    })
    return WarehouseStockCounts;
};