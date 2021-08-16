const saheliTypes = require('../saheli-types');
module.exports = function (sequelize, DataTypes) {
  var TryAndBuy = sequelize.define(
    "try_and_buy",
    {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
      },
      start_date: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      end_date: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      reviews : {
        type : DataTypes.JSON,
        allowNull : true
      },
      status: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      type: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      buying_date: {
        allowNull: true,
        type: DataTypes.DATE,
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

  TryAndBuy.associate = (models) => {
    TryAndBuy.belongsTo(models.warehouses, { foreignKey : 'warehouse_id', as: 'warehouse' })
    TryAndBuy.belongsTo(models.product_detail, { foreignKey : 'product_detail_id', as: 'product_details' })
    TryAndBuy.belongsTo(models.leads, { foreignKey : 'customer_id', as: 'customers' })
    TryAndBuy.belongsTo(models.users, { foreignKey : 'fm_user_id', as : 'frontier_marketing_user' });
  }


  return TryAndBuy;
};
