module.exports = function (sequelize, DataTypes) {
  const Product = sequelize.define("products", {
    id: {
      primaryKey: true,
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
    },
    product_code:{
      allowNull: false,
      type: DataTypes.STRING,
      trim: true,
      unique:true
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
    is_disabled:{
      type:DataTypes.BOOLEAN,
      defaultValue:false,
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
  Product.associate = (models) => {
    Product.hasMany(models.product_translations,{ foreignKey: 'product_id',as:'translation' });
    Product.belongsToMany(models.categories , {through : models.product_categories})
    Product.hasMany(models.product_detail , {foreignKey : 'product_id',as : 'productDetail'})

    Product.hasMany(models.warehouse_products , {foreignKey : 'product_id',as : 'warehouse_products'})

  }
 // Product.sync(true)
  return Product;
};
