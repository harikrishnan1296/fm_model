module.exports = function (sequelize, DataTypes) {
    var ProductDetailTranslation = sequelize.define("product_detail_translation", {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      },
      language : {
          type : DataTypes.STRING,
          allowNull : false
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

    ProductDetailTranslation.associate = (models) => {
        ProductDetailTranslation.belongsTo(models.product_detail)
    }
    return ProductDetailTranslation;
  };
  