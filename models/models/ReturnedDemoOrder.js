const saheliTypes = require('../saheli-types');
module.exports = function (sequelize, DataTypes) {
  var ReturnedDemoOrder = sequelize.define(
    "returned_demo_order",
    {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
      },
      returned_date: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("NOW()"),
      },
      item_barcode: {
        allowNull: false,
        type: DataTypes.STRING,
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

  ReturnedDemoOrder.associate = (models) => {
    ReturnedDemoOrder.belongsTo(models.demo_orders, { foreignKey : 'demo_order_id', as : 'demo_order' })
  }


  return ReturnedDemoOrder;
};
