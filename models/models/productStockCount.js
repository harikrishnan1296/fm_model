module.exports = function (sequelize, DataTypes) {
    var ProductStockCounts = sequelize.define("product_stocks_counts", {
        warehouse_stock_id : DataTypes.STRING,
        item_count : DataTypes.STRING,
        stock_count : DataTypes.STRING,
        productDetailId : DataTypes.STRING,
        warehouseId : DataTypes.STRING,
        name : DataTypes.STRING,
        delivery_price : DataTypes.STRING,
        is_disabled : DataTypes.STRING,
        type : DataTypes.STRING,
        images : DataTypes.STRING,
        title : DataTypes.STRING
    })
    return ProductStockCounts;
};