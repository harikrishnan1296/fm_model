const saheliType = require("../saheli-types");

module.exports = function (sequelize, DataTypes) {
  var Purchase = sequelize.define(
    "purchases",
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
      invoice_number: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      payment_terms: {
        type: DataTypes.STRING
      },
      ordered_date: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("NOW()"),
      },
      arrived_date: {
        type: DataTypes.DATE,
      },
      manufacturerId: {
        type: DataTypes.STRING,
      },
      franchiseId: {
        type: DataTypes.STRING,
      },
      branchId: {
        type: DataTypes.STRING,
      },
      categoryId: {
        type: DataTypes.STRING,
      },
      franchiseAddressId: {
        type: DataTypes.STRING,
      },
      warehouseId: {
        type: DataTypes.STRING,
      },
      order_value: {
        allowNull: false,
        type: DataTypes.DECIMAL,
      },
      tax_value: {
        allowNull: false,
        type: DataTypes.DECIMAL,
      },
      status: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: saheliType.purchaseStatus.PENDING,
      },
      stockin_status: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: saheliType.purchaseOrderStockinStatus.NOT_STARTED,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("NOW()"),
      },
      total_value: {
        allowNull: false,
        type: DataTypes.DECIMAL,
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
          unique: true,
          fields: ["invoice_number"],
        },
        {
          fields: ["ordered_date"],
        },
      ],
    }
  );
  Purchase.associate = function (models) {
    Purchase.hasOne(models.purchase_items, {
      foreignKey: "purchaseId",
      as: "purchase_items"
    });
    Purchase.belongsTo(models.manufacturers, {
      foreignKey: "manufacturerId",
    });
    Purchase.belongsTo(models.warehouses, {
      foreignKey: "warehouseId",
    });
    Purchase.belongsTo(models.franchises, {
      foreignKey: "franchiseId",
    });
    Purchase.belongsTo(models.franchises_address, {
      foreignKey: "franchiseAddressId",
    });
    Purchase.hasMany(models.purchase_files, {
      foreignKey: "purchaseId",
      as: "purchase_files"
    });
  };

  return Purchase;
};
