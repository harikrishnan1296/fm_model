module.exports = function (sequelize, DataTypes) {
  var Categories = sequelize.define("categories", {
    id: {
      primaryKey: true,
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
    },
    // name: {
    //   allowNull: true,
    //   type: DataTypes.STRING,
    //   trim: true,
    // },
    // description: {
    //   allowNull: true,
    //   type: DataTypes.STRING,
    // },
    // image: {
    //   allowNull: true,
    //   type: DataTypes.STRING,
    // },
    // language: {
    //   allowNull: true,
    //   type: DataTypes.STRING,
     
    // },
    // category_code:{
    //   allowNull: true,
    //   type: DataTypes.STRING,
    // },

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

  Categories.associate = (models) => {
    Categories.belongsToMany(models.products , {through : models.product_categories})
    Categories.hasMany(models.category_translations,{foreignKey:'category_code','as':'category_translation'})
  }
 
  
  
  // Categories.sync({
  //   alter: true,
  //   //force: true,
  // })
  
  return Categories;
};
