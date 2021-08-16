module.exports = function (sequelize, DataTypes) {
    var TransferOrderItem = sequelize.define("transfer_order_items", {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
      },
      transfer_order_id : {
        type : DataTypes.STRING,
        allowNull: false,
    },
      product_detail_id : {
          type : DataTypes.STRING,
          allowNull: false,
      },
      quantity : {
        type : DataTypes.INTEGER,
        allowNull: false,
    },
    
    en_name : {
        type : DataTypes.STRING,
        allowNull: false,
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
  
    TransferOrderItem.associate = (models) => {
        TransferOrderItem.belongsTo(models.transfer_orders,{foreignKey:'transfer_order_id',as:'items'});
        TransferOrderItem.belongsTo(models.product_detail,{foreignKey:'product_detail_id'});
        
    }
    //TransferOrderItem.sync({force:true})
    return TransferOrderItem;
  };
  