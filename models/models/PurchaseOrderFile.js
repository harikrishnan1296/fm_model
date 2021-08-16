module.exports = function (sequelize, DataTypes) {
  var PurchaseOrderFile = sequelize.define(
    "purchase_order_files",
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
      file: {
        allowNull: false,
        type: DataTypes.STRING,
        trim: true,
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
      }
    }
  );
  PurchaseOrderFile.associate = function (models) {
    PurchaseOrderFile.belongsTo(models.purchase_orders, {
      foreignKey: "purchaseOrderId",
    });
  };

  return PurchaseOrderFile;
};
