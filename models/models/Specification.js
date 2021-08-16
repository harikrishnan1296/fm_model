module.exports = function (sequelize, DataTypes) {
    var Specification = sequelize.define("specification", {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING
      },
      description : {
          type : DataTypes.STRING,
          defaultValue : 0
      },
      language : {
          type : DataTypes.STRING,
          defaultValue : 'en'
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

    Specification.associate = (models) => {
        Specification.belongsTo(models.product_detail)
    }
    return Specification;
  };
  