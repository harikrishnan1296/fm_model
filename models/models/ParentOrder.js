module.exports = function (sequelize, DataTypes) {
  var ParentOrder = sequelize.define("parent_orders", {
    id: {
      primaryKey: true,
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
    },
    customer_id: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    order_id: {
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
    rejected_by: {
      type: DataTypes.STRING,
    },
    invoice: {
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
    reason_id: {
      type: DataTypes.STRING,
      defaultValue : null
    },
    order_date: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    delivered_date: {
      type: DataTypes.DATE,
    },
    confirmed_date: {
      type: DataTypes.DATE,
    },
    onhold_date: {
      type: DataTypes.DATE,
    },
    rts_date: {
      type: DataTypes.DATE,
    },
    dispatched_date: {
      type: DataTypes.DATE,
    },
    executive_assign_date: {
      allowNull: true,
      type: DataTypes.DATE,
    },
    rejected_date: {
      type: DataTypes.DATE,
    },
    quanity : {
      type : DataTypes.INTEGER,
      allowNull : false
    },
    amount : {
      type : DataTypes.INTEGER,
      allowNull : false
    },
    deletedAt: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
    verification_method: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue:0
    },
    otp: {
      type: DataTypes.INTEGER,
      defaultValue : null
    },
    signature_path: {
      type: DataTypes.STRING,
      defaultValue : null
    },
    other_user_name: {
      type: DataTypes.STRING,
      defaultValue : null
    },
    other_user_phone_number: {
      type: DataTypes.STRING,
      defaultValue : null
    },
    isCouldNotDelivered: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue:0
    }
  });


  ParentOrder.associate = (models) => {
    ParentOrder.belongsTo(models.leads,{foreignKey:'customer_id',as:'customers'});
    ParentOrder.belongsTo(models.warehouses,{foreignKey:'warehouse_id',as:'warehouse'});
    ParentOrder.belongsTo(models.users,{foreignKey:'fm_user_id',as:'frontier_marketing_user'});
    ParentOrder.belongsTo(models.users,{foreignKey:'oe_user_id',as:'saheli_coordinator'});
    ParentOrder.belongsTo(models.users,{foreignKey:'created_by',as:'order_by'});
    ParentOrder.hasOne(models.order_carts,{foreignKey:'parent_order_id',as:'cart'})
    ParentOrder.belongsTo(models.orders,{foreignKey:'order_id',as:'order'})
    ParentOrder.belongsTo(models.reasons,{foreignKey:'reason_id',as:'reason'});
    ParentOrder.belongsTo(models.users,{foreignKey:'rejected_by',as:'rejected'});
  }
// ParentOrder.sync({alter:true})
  return ParentOrder;
};
