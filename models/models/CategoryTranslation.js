module.exports = function (sequelize, DataTypes) {
    var CategoryTranslation = sequelize.define("category_translations", {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        trim: true,
        unique:true
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      image: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      language: {
        allowNull: false,
        type: DataTypes.STRING,
       
      },
      category_code:{
        allowNull: false,
        type: DataTypes.STRING,
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
  
    CategoryTranslation.associate = (models) => {
        CategoryTranslation.belongsTo(models.categories,{foreignKey:'category_code'})
      }
    
    
    // CategoryTranslation.sync({
    //   alter: true,
    //   force: true,
    // })
    
    return CategoryTranslation;
  };
  