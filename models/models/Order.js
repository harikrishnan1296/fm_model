module.exports = function (sequelize, DataTypes) {
  var Orders = sequelize.define("orders", {
    id: {
      primaryKey: true,
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
    },
    customer_id: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    warehouse_id: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    fm_user_id: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    oe_user_id: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    created_by: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    type: {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue:0
    },
    status: {
      allowNull: false,

      type: DataTypes.STRING,
      defaultValue:0
    },
    order_track: {
      allowNull: false,

      type: DataTypes.STRING,
      defaultValue:0
    },
    payment_method: {
      allowNull: false,

      type: DataTypes.INTEGER,
      defaultValue:0
    },
    delivery_option: {
      allowNull: false,

      type: DataTypes.INTEGER,
      defaultValue:0
    },
    order_code: {
      allowNull: false,

      type: DataTypes.STRING,
      defaultValue:0
    },
    order_date: {
     
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("NOW()"),
    },
    quanity : {
      type : DataTypes.INTEGER,
      allowNull : false
    },
    onhold_date: {
      type: DataTypes.DATE,
    },
    amount : {
      type : DataTypes.INTEGER,
      allowNull : false
    },
    confirmed_date : {
      allowNull : true,
      type: DataTypes.DATE
    },
    deletedAt: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
  });


  Orders.associate = (models) => {
   Orders.belongsTo(models.leads,{foreignKey:'customer_id',as:'customers'});
   Orders.belongsTo(models.warehouses,{foreignKey:'warehouse_id',as:'warehouse'});
   Orders.belongsTo(models.users,{foreignKey:'fm_user_id',as:'frontier_marketing_user'});
   Orders.belongsTo(models.users,{foreignKey:'oe_user_id',as:'saheli_coordinator'});
   Orders.belongsTo(models.users,{foreignKey:'created_by',as:'order_by'});
   Orders.hasMany(models.order_carts,{foreignKey:'order_id',as:'carts'})
  }
// Orders.sync({alter:true})
  return Orders;
};
