module.exports = function (sequelize, DataTypes) {
  var Cart = sequelize.define(
    "carts",
    {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
      },
      quantity: {
        allowNull: false,
        type: DataTypes.INTEGER,
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
    },
    {
      defaultScope: {
        attributes: { exclude: ["deletedAt"] },
      },
    }
  );

  Cart.associate = (models) => {
    Cart.belongsTo(models.product_detail)
    Cart.belongsTo(models.users)
  }


  return Cart;
};
