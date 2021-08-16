const saheliTypes = require('../saheli-types');
module.exports = function (sequelize, DataTypes) {
  var DemoOrder = sequelize.define(
    "demo_orders",
    {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
      },
      bar_code: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      order_code: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      executive_assign_date: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      order_date: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("NOW()"),
      },
      delivered_date: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("NOW()"),
      },
      quantity: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      remaining_count: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      status: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: saheliTypes.demoOrderStatus.CREATED,
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

  DemoOrder.associate = (models) => {
    DemoOrder.belongsTo(models.warehouses, { foreignKey : 'warehouse_id', as: 'warehouse' })
    DemoOrder.belongsTo(models.product_detail, { foreignKey : 'product_detail_id', as: 'product_details' })
    DemoOrder.belongsTo(models.users, { foreignKey : 'demo_product_assigned_fm_user_id', as: 'demo_product_assigned_fm_user' })
    DemoOrder.belongsTo(models.users, { foreignKey : 'fm_user_id', as : 'frontier_marketing_user' })

    DemoOrder.hasMany(models.returned_demo_order, { foreignKey : 'demo_order_id', as: "returned_demo_orders" })
  }


  return DemoOrder;
};
