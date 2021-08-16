// const models = require('..')
// const Product = models.products;
module.exports = function (sequelize, DataTypes) {
    var warehouseProduct = sequelize.define("warehouse_product_details", {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
      },
      product_detail_id:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      warehouse_id:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      sequence:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
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
    });
    warehouseProduct.associate = (models) => {
        warehouseProduct.belongsTo(models.product_detail,{ foreignKey: 'product_detail_id',as:'warehouse_details'});
       
      }
    return warehouseProduct;
  };
  