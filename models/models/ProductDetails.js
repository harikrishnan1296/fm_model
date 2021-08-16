module.exports = function (sequelize, DataTypes) {
    var ProductDetails = sequelize.define("product_detail", {
        id: {
            primaryKey: true,
            type: DataTypes.STRING,
            defaultValue: DataTypes.UUIDV4,
        },
        title : {
            type : DataTypes.STRING,
            allowNull : false
        },
        description : {
            type : DataTypes.STRING
        },
        actual_price: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        mrp: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        discount_price: {
            type : DataTypes.INTEGER,
            defaultValue : 0
        },
        extra_price: {
            type : DataTypes.INTEGER,
            defaultValue : 0
        },
        combo_price: {
            type : DataTypes.INTEGER, // Value exist if Product detail type is 1
            defaultValue : 0
        },
        type: {
            type : DataTypes.INTEGER, // 0 - Single Product Detail, 1 - Combo Product Details
            defaultValue : 0
        },
        images : {
            type : DataTypes.JSON,
            defaultValue : []
        },
        is_disabled : { // Make the product detail variant as disabled - false/true
            type : DataTypes.BOOLEAN,
            defaultValue : false
        },
        discount_percentage : {
            type : DataTypes.INTEGER,
            defaultValue : 0
        },
        is_default : { // Make the product details as default varient - false/true
            type : DataTypes.BOOLEAN,
            defaultValue : false
        },
        delivery_price : {
            type : DataTypes.INTEGER,
            allowNull : false,
            defaultValue : 0
        },
        origin_location : {
            type : DataTypes.STRING
        },
        description : {
            type : DataTypes.STRING,
            allowNull : true
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

    ProductDetails.associate = (models) => {
        ProductDetails.hasMany(models.tax_details)
        ProductDetails.hasMany(models.warehouse_stocks)
        ProductDetails.hasMany(models.product_detail_translation)
        ProductDetails.hasMany(models.specification)
        ProductDetails.hasMany(models.transfer_order_items,{foreignKey:'product_detail_id'})
        ProductDetails.belongsTo(models.products,{foreignKey : 'product_id',as : 'product'})
        ProductDetails.belongsToMany(models.features, { through: models.product_feature })
        ProductDetails.hasMany(models.combo_offers, {
            foreignKey : 'combo_product',
            as : 'comboDetail',
        })
        ProductDetails.hasMany(models.combo_offers, {
            foreignKey : 'reference_product',
            as : 'referenceDetail'
        })
        ProductDetails.hasMany(models.carts, { foreignKey: 'product_detail_id'})
        ProductDetails.hasMany(models.try_and_buy, { foreignKey: 'product_detail_id'})
        ProductDetails.hasMany(models.demo_orders, { foreignKey: 'product_detail_id'})

        ProductDetails.hasMany(models.banners, { foreignKey: 'product_detail_id'})

        ProductDetails.hasMany(models.warehouse_product_details,{foreignKey : 'product_detail_id',as : 'warehouse_details'})
    }

    return ProductDetails;
};