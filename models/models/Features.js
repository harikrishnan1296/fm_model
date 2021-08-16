module.exports = function (sequelize, DataTypes) {
    var Features = sequelize.define("features", {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        trim: true,
        unique:true
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      language : {
        type : DataTypes.STRING,
        allowNull : false
      },
      feature_id : {
        allowNull : false,
        type : DataTypes.STRING
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

    Features.associate = (models) => {
      Features.belongsToMany(models.product_detail, {through: models.product_feature })
    }

    return Features;
  };
  