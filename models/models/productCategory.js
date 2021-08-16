const models = require('../index')
const Categories = models.categories
module.exports = function (sequelize, DataTypes) {
  const productCategory = sequelize.define("product_categories", {
    id: {
      primaryKey: true,
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
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
  return productCategory;
};
