module.exports = function (sequelize, DataTypes) {
    var customerStages = sequelize.define("customer_stages", {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
       
      },
      disableSJS:{
        
        type: DataTypes.BOOLEAN,
      },
      disableTM:{
        
        type: DataTypes.BOOLEAN,
      },
      disableSMS:{
        
        type: DataTypes.BOOLEAN,
      },
      disableIVR:{
        
        type: DataTypes.BOOLEAN,
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
  
  
  
    return customerStages;
  };
  