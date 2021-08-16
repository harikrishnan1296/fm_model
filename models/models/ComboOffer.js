module.exports = function (sequelize, DataTypes) {
    var ComboOffers = sequelize.define("combo_offers", {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
      },
      quantity : {
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

    ComboOffers.associate = (models) => {
        ComboOffers.belongsTo(models.product_detail,{
            as : 'comboProductDetail',
            foreignKey : 'combo_product'
        })
        ComboOffers.belongsTo(models.product_detail,{
            as : 'referenceProduct',
            foreignKey : 'reference_product'
        })
    }
    return ComboOffers;
  };
  