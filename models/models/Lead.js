module.exports = function (sequelize, DataTypes) {
  var Leads = sequelize.define("leads", {
    id: {
      primaryKey: true,
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
    },
    first_name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "First Name is required"
        },
      },
    },
    phone_number: {
      allowNull: false,
      type: DataTypes.BIGINT,
      unique: true,
      validate: {
        notEmpty: {
          msg: "Phone Number is required"
        },

        isInt: {
          msg: "Phone Number must be interger"
        },
      },
    },
    lead_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true,
      validate: {
        notEmpty: {
          msg: "Lead ID is required"
        },
      },
    },
    frontier_user_ref: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Vle Code is required"
        },
      },
    },
    status: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },

    tag: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    other_products: {
      allowNull: true,
      type: DataTypes.JSON,
    },

    branch: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Branch is required"
        },
      },
    },
    customer_stage: {
      allowNull: true,
      type: DataTypes.INTEGER,
      defaultValue: 1,

    },
    customer_activity: {
      allowNull: true,
      type: DataTypes.JSON,
    },

    ivr_result: {
      allowNull: true,
      type: DataTypes.INTEGER,
      defaultValue: null,
    },

    tm_input: {
      allowNull: true,
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    sjs_input: {
      allowNull: true,
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    sms_result: {
      allowNull: true,
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Address is required"
        },
      },
    },
    social_login_phone_number: {
      allowNull: true,
      type: DataTypes.BIGINT,
      validate: {
        isInt: {
          msg: "Whatsapp Number must be integer."
        },
      },
    },
    aware_stage_on: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
    consider_stage_on: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
    createdAt: {
      field: "created_at",
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("NOW()"),
    },
    updatedAt: {
      field: "updated_at",
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("NOW()"),
    },
    deletedAt: {
      field: "deleted_at",
      type: DataTypes.DATE,
      defaultValue: null,
    },
  });
  // Leads.sync({ alter: true });
  Leads.associate = (models) => {
    Leads.belongsTo(models.users, {
      foreignKey: 'frontier_user_ref'
    });
    Leads.belongsTo(models.branches, {
      foreignKey: 'branch',
      as: 'Branch'
    });
    Leads.belongsTo(models.tags, {
      foreignKey: 'tag',
      as: 'Tag'
    });
    Leads.belongsTo(models.customer_stages, {
      foreignKey: 'customer_stage',
      as: 'Customer_stage'
    });
    Leads.belongsTo(models.customer_status, {
      foreignKey: 'status'
    });
    Leads.hasMany(models.try_and_buy, {
      foreignKey: 'customer_id'
    });
  }

  return Leads;
};
