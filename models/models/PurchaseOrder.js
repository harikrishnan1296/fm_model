const saheliType = require("../saheli-types");

module.exports = function (sequelize, DataTypes) {
  var PurchaseOrder = sequelize.define(
    "purchase_orders",
    {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
      },
      invoice_number: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      payment_terms: {
        allowNull: false,
        type: DataTypes.STRING
      },
      ordered_date: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("NOW()"),
      },
      estimated_arrival_date: {
        type: DataTypes.DATE,
      },
      manufacturerId: {
        type: DataTypes.STRING,
        references: {
          model: 'manufacturers',
          key: 'id'
        }
      },
      franchiseId: {
        type: DataTypes.STRING,
      },
      franchiseAddressId: {
        type: DataTypes.STRING,
      },
      warehouseId: {
        type: DataTypes.STRING,
      },
      status: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: saheliType.purchaseOrderStatus.INPROGRESS,
      },
      order_value: {
        allowNull: false,
        type: DataTypes.DECIMAL,
      },
      tax_value: {
        allowNull: false,
        type: DataTypes.DECIMAL,
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
      branchId: {
        type: DataTypes.STRING,
      },
      categoryId: {
        type: DataTypes.STRING,
      },
      total_value: {
        allowNull: false,
        type: DataTypes.DECIMAL,
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
          unique: true,
          fields: ["invoice_number"],
        },
        {
          fields: ["ordered_date"],
        },
      ],
    }
  );
  PurchaseOrder.associate = function (models) {
    PurchaseOrder.hasOne(models.purchase_order_items, {
      foreignKey: "purchaseOrderId",
      as: "purchase_order_items"
    });
    PurchaseOrder.belongsTo(models.manufacturers, {
      foreignKey: "manufacturerId",
    });
    PurchaseOrder.belongsTo(models.warehouses, {
      foreignKey: "warehouseId",
    });
    PurchaseOrder.belongsTo(models.franchises, {
      foreignKey: "franchiseId",
    });
    PurchaseOrder.belongsTo(models.franchises_address, {
      foreignKey: "franchiseAddressId",
    });
    PurchaseOrder.hasMany(models.purchase_order_files, {
      foreignKey: "purchaseOrderId",
      as: "purchase_order_files"
    });
  };

  return PurchaseOrder;
};
