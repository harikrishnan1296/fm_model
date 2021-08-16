module.exports = function (sequelize, DataTypes) {
    var Tag = sequelize.define("tags", {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      name: {
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
  
  
  
    return Tag;
  };
  