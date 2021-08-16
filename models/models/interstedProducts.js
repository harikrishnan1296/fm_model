module.exports = function (sequelize, DataTypes) {
    var interstedProducts = sequelize.define("intersted_products", {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4
      },
     lead_id:{
        allowNull: false,
        type: DataTypes.STRING,
        references: {
            model: 'leads', 
            key: 'id',
         }
     
     },
     product_id:{
        allowNull: false,
        type: DataTypes.STRING,
     },

      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('NOW()')
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('NOW()')
      },
      deletedAt: {
        type: DataTypes.DATE,
        defaultValue: null
      }
    })
    //interstedProducts.sync({ force: true });
  
    return interstedProducts;
  };
  