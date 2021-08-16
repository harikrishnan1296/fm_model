// const models = require('../models')
// const Categories = models.categories
module.exports = function (sequelize, DataTypes) {
    var warehouseCategories = sequelize.define("warehouse_categories", {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
      },
      category_code:{
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

    // warehouseCategories.sync({
    //     alter: true,
    //     force: true,
    //   })
    return warehouseCategories;
  };
  