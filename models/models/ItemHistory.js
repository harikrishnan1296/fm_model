module.exports = function (sequelize, DataTypes) {
    var ITEMS = sequelize.define(
      "item_history",
      {
        id: {
          primaryKey: true,
          type: DataTypes.STRING,
          defaultValue: DataTypes.UUIDV4,
        },
        barcode : {
          allowNull: false,
          type: DataTypes.STRING,
          unique: true,
        },
        cost : {
            type : DataTypes.FLOAT,
            default : 0
        },
        demo_product_assigned_fm_user_id: DataTypes.STRING,
        demo_order_id: DataTypes.STRING,
        recipt_id : DataTypes.STRING,
        received_date : DataTypes.DATE,
        manufacturer_id : DataTypes.STRING,
        manufacturing_date : {
          type : DataTypes.DATE,
          defaultValue : sequelize.literal("NOW()")
        },
        sold_date : {
          type : DataTypes.DATE,
          defaultValue : sequelize.literal("NOW()")
        },
        fm_user_id : DataTypes.STRING,
        customer_id : DataTypes.STRING,
        product_detail_id : DataTypes.STRING,
        purchase_order_id : DataTypes.STRING,
        status : {
          type : DataTypes.INTEGER,
          allowNull : false
        },
        type : {
          type : DataTypes.INTEGER,
          allowNull : false
        },
        warehouse_id : DataTypes.STRING,
        transfer_order_id : DataTypes.STRING,
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
      },
      {
        defaultScope: {
          attributes: { exclude: ["deletedAt"] },
        },
      }
    );
  
  
    return ITEMS;
  };
  