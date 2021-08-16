module.exports = function (sequelize, DataTypes) {
  var Manufacturer = sequelize.define(
    "manufacturers",
    {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        trim: true,
        unique: true,
      },
      address: {
        type: DataTypes.STRING
      },
      code: {
        type: DataTypes.STRING
      },
      gst_code: {
        type: DataTypes.STRING
      },
      reference_code: {
        type: DataTypes.STRING
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


  return Manufacturer;
};
