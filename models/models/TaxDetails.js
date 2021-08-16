module.exports = function (sequelize, DataTypes) {
    var Tax = sequelize.define("tax_details", {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      percent : {
          type : DataTypes.INTEGER,
          defaultValue : 0
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

    Tax.associate = (models) => {
        Tax.belongsTo(models.product_detail)
    }
    return Tax;
  };
  