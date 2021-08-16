var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var config = require("./config/connection").db;
var sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    logging: false,
    define: {
      charset: "utf8",
      collate: "utf8_general_ci",
      timestamps: true,
    },
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  }
);
var db = {};

// Export all models in the current directory

let SaheliViews = ["leadlists","product_stocks_counts","warehouse_stocks_counts"]

fs.readdirSync(path.join(__dirname, 'models'))
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = require(path.join(__dirname, 'models', file))(sequelize, Sequelize.DataTypes)
    // if(SaheliViews.indexOf(model.name)==-1){
      db[model.name] = model;
    // }
  });


Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});


sequelize.sync({ });


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
