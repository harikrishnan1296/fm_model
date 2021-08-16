module.exports = function (sequelize, DataTypes) {
  var TransferOrder = sequelize.define("transfer_orders", {
    id: {
      primaryKey: true,
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
    },

    source_warehouse: {
      allowNull: false,
      type: DataTypes.STRING,
      
    },
    destination_warehouse: {
      allowNull: false,
      type: DataTypes.STRING,
      
    },
    image: {
      allowNull: true,
      type: DataTypes.STRING,
      
    },
    type:{
      allowNull: false,
      type: DataTypes.INTEGER
    },
    status:{
      allowNull:false,
      type:DataTypes.INTEGER
    },
    code: {
      allowNull: true,
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
  TransferOrder.associate = (models) => {
    TransferOrder.hasMany(models.transfer_order_items,{foreignKey:'transfer_order_id',as:'items'});
    TransferOrder.hasMany(models.packages,{foreignKey:'transfer_order_id'});
    TransferOrder.belongsTo(models.warehouses,{foreignKey:'source_warehouse',as:'source_warehouses'});
    TransferOrder.belongsTo(models.warehouses,{foreignKey:'destination_warehouse',as:'destination_warehouses'});
    //TransferOrderItem.belongsTo(models.product_details,{foreignKey:'product_detail_id'});
}
 
 // TransferOrder.sync({force:true})
  return TransferOrder;
};
