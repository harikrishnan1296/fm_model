module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define("users", {
    id: {
      primaryKey: true,
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique : true
    },
    phone_number_2: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    phone_number_3: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    first_name: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    last_name: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    vle_code: {
      type: DataTypes.STRING,
      defaultValue: null,
      unique : true
    },
    status: {
      type: DataTypes.ENUM('ACTIVE', 'INACTIVE'),
      defaultValue: null
    },
    classification: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    coordinator_id: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    eko_user_code: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()')
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()')
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()')
    },
    deletedAt: {
      type: DataTypes.DATE,
      defaultValue: null
    },
    logedIn: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    vle_code_url : {
      type : DataTypes.STRING,
      defaultValue : null
    },
    origin: {
      type: DataTypes.ENUM('Web', 'mobile'),
      defaultValue: 'Web'
    },
    cognito_user_id:{
      type : DataTypes.STRING,
      defaultValue : null
    }
  })

  Users.associate = (models) => {
    Users.belongsTo(models.roles);
    Users.belongsTo(models.branches);
    Users.belongsTo(models.warehouses,{
      as: 'assignedWarehouse',
      foreignKey: 'assignedWarehouseFK'
    });
    Users.belongsToMany(models.warehouses, {
      through : 'user_warehouse'
    })
    Users.belongsTo(models.users,{as:'coordinator',foreignKey:'coordinator_id'});
    Users.hasMany(models.carts);
    Users.hasMany(models.demo_orders, { foreignKey: 'demo_product_assigned_fm_user_id'})
    Users.hasMany(models.demo_orders, { foreignKey: 'fm_user_id'})
    Users.hasMany(models.try_and_buy, { foreignKey: 'fm_user_id'})
  }


  return Users;
};
