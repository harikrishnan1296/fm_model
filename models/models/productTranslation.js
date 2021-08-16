module.exports = function (sequelize, DataTypes) {
  const productTranslation = sequelize.define("product_translations", {
    id: {
      primaryKey: true,
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
    },
    product_id: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    language: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      trim: true,
    },
    brand: {
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
  });

  productTranslation.associate = (models) => {
    productTranslation.belongsTo(models.products,{foreignKey:'product_id'});
    
  }
  //productTranslation.sync(true);
  return productTranslation;
};
