module.exports = function (sequelize, DataTypes) {
  var orderCarts = sequelize.define("order_carts", {
    id: {
      primaryKey: true,
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
    },
    order_id: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    product_detail_id: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    quantity: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    price: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    value: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    parent_order_id: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    deletedAt: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
  });
  
  orderCarts.associate = (models) => {
      orderCarts.belongsTo(models.orders,{foreignKey:'order_id'});
      orderCarts.belongsTo(models.product_detail,{foreignKey:'product_detail_id'});
      orderCarts.belongsTo(models.parent_orders,{foreignKey:'parent_order_id',as:'parent_order'});
     }


  return orderCarts;
};
