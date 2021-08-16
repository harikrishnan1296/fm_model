module.exports = function (sequelize, DataTypes) {
    var Roles = sequelize.define("roles", {
        id: {
            primaryKey: true,
            type: DataTypes.STRING,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        name_url : {
            type : DataTypes.STRING
        },
        description: {
            allowNull: true,
            type: DataTypes.STRING
        },
        is_admin_login_enabled: {
            allowNull: true,
            type: DataTypes.BOOLEAN
        },
        is_saheli_login_enabled: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        is_OE_login_enabled: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        is_saheli_coordinator_login_enabled: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            defaultValue: false
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
        role_permission : {
            type : DataTypes.TEXT,
            allowNull : false
        }
    });

    Roles.associate =  (models) => {
        Roles.hasMany(models.users)
    }

    return Roles;
};