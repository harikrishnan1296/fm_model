module.exports = function (sequelize, DataTypes) {
  var PurchaseOrderItem = sequelize.define(
    "purchase_order_items",
    {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
      },
      purchaseOrderId: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      product_name: {
        allowNull: false,
        type: DataTypes.STRING,
        trim: true,
      },
      productDetailId: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      quantity: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      order_value: {
        allowNull: false,
        type: DataTypes.DECIMAL,
      },
      tax_value: {
        allowNull: false,
        type: DataTypes.DECIMAL,
      },
      tax_data: {
        allowNull: false,
        type: DataTypes.JSON,
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
      indexes: [
        {
          fields: ["product_name"],
        },
      ],
    }
  );
  PurchaseOrderItem.associate = function (models) {
    PurchaseOrderItem.belongsTo(models.purchase_orders, {
      foreignKey: "purchaseOrderId",
    });

    PurchaseOrderItem.belongsTo(models.product_detail, {
      foreignKey: "productDetailId",
    });
  };

  return PurchaseOrderItem;
};
