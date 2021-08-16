// const models = require('..')
// const Product = models.products;
module.exports = function (sequelize, DataTypes) {
    var warehouseProduct = sequelize.define("warehouse_products", {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
      },
      product_id:{
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
        warehouseProduct.belongsTo(models.products,{ foreignKey: 'product_id'});
       
      }
    // warehouseProduct.sync({
    //     alter: true,
    //     force: true,
    //   })
    return warehouseProduct;
  };
  