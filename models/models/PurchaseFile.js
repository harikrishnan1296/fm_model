module.exports = function (sequelize, DataTypes) {
  var PurchaseFile = sequelize.define(
    "purchase_files",
    {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
      },
      purchaseId: {
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
  PurchaseFile.associate = function (models) {
    PurchaseFile.belongsTo(models.purchases, {
      foreignKey: "purchaseId",
    });
  };

  return PurchaseFile;
};
