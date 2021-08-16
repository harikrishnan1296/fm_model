module.exports = function (sequelize, DataTypes) {
    var Branches = sequelize.define("branches", {
        id: {
            primaryKey: true,
            type: DataTypes.STRING,
            defaultValue: DataTypes.UUIDV4
        },
        name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        code : {
            type : DataTypes.STRING,
            allowNull : false
        },
        code : {
            type : DataTypes.STRING,
            allowNull : false
        },
        village_status : {
            type : DataTypes.ENUM('Active', 'Inactive'),
            allowNull : false
        },
        delivery_day : {
            type : DataTypes.STRING,
            allowNull : true
        },
        village_code : {
            type : DataTypes.STRING,
            allowNull : false
        },
        district : {
            type : DataTypes.STRING,
            allowNull : true
        },
        district_code : {
            type : DataTypes.STRING,
            allowNull : true
        },
        state : {
            type : DataTypes.STRING,
            allowNull : true
        },
        state_code : {
            type : DataTypes.STRING,
            allowNull : true
        },
        branch_string: {
            type : DataTypes.STRING
        },
        block : {
            type : DataTypes.STRING,
            allowNull : true
        },
        block_code : {
            type : DataTypes.STRING,
            allowNull : true
        },
        panchayat : {
            type : DataTypes.STRING,
            allowNull : true
        },
        village : {
            type : DataTypes.STRING,
            allowNull : true
        },
        village_url : {
            type : DataTypes.STRING
        },
        household_count : {
            type : DataTypes.INTEGER,
            defaultValue : 0
        },
        population_count : {
            type : DataTypes.INTEGER,
            defaultValue : 0
        },
        shg_group_count : {
            type : DataTypes.INTEGER,
            defaultValue : 0
        },
        shg_member_count : {
            type : DataTypes.INTEGER,
            defaultValue : 0
        },
        long_text : {
            type : DataTypes.TEXT,
            allowNull : false
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
        }
    });

    Branches.associate = (models) => {
        Branches.hasMany(models.warehouses);
        Branches.hasMany(models.users);
    }

    return Branches;
};