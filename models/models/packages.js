module.exports = function (sequelize, DataTypes) {
  var Packages = sequelize.define("packages", {
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
    transfer_order_id:{
      allowNull:false,
      type:DataTypes.STRING,
    },
    barcode:{
      allowNull:true,
      type:DataTypes.STRING,
    },
    type:{
      allowNull: false,
      type: DataTypes.INTEGER
    },
    status:{
      allowNull:false,
      type:DataTypes.INTEGER
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
  Packages.associate = (models) => {
    Packages.belongsTo(models.transfer_orders,{foreignKey:'transfer_order_id'});
}
  return Packages;
};
