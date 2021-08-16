module.exports = function (sequelize, DataTypes) {
    var Leads = sequelize.define("leadlists", {
   lead_id:{
    
    type: DataTypes.STRING,

   },
   status:{
    
    type: DataTypes.STRING,

   },
   tag:{
    
    type: DataTypes.STRING,

   },
   warehouse_id:{
    
    type: DataTypes.STRING,

   },
   customer_created_at:{
    
    type: DataTypes.STRING,

   },
   customer_updated_at:{
    
    type: DataTypes.STRING,

   },
   customer_code:{
    
    type: DataTypes.STRING,

   },
   coordinator_id:{
    type: DataTypes.STRING,
   },
   first_name:{
    
    type: DataTypes.STRING,

   },
   phone_number:{
    
    type: DataTypes.STRING,

   },
   branch:{
    
    type: DataTypes.STRING,

   },
   frontier_user_ref:{
    
    type: DataTypes.STRING,

   },
   customer_stage:{
    
    type: DataTypes.STRING,

   },
   branch_name:{
    
    type: DataTypes.STRING,

   },
   branch_code:{
    
    type: DataTypes.STRING,

   },
   village_status:{
    
    type: DataTypes.STRING,

   },
   delivery_day:{
    
    type: DataTypes.STRING,

   },
   village_code:{
    
    type: DataTypes.STRING,

   },
   district:{
    
    type: DataTypes.STRING,

   },
   district_code:{
    
    type: DataTypes.STRING,

   },
   state:{
    
    type: DataTypes.STRING,

   },
   state_code:{
    
    type: DataTypes.STRING,

   },
   block:{
    
    type: DataTypes.STRING,

   },
   block_code:{
    
    type: DataTypes.STRING,

   },
   panchayat:{
    
    type: DataTypes.STRING,

   },
   village:{
    
    type: DataTypes.STRING,

   },
   vle_code:{
    
    type: DataTypes.STRING,

   },
   saheli_name:{
    
    type: DataTypes.STRING,

   },
   
   sms_result:{
    
    type: DataTypes.STRING,

   },
   ivr_result:{
    
    type: DataTypes.STRING,

   },
   tm_input:{
    
    type: DataTypes.STRING,

   },
   sjs_input:{
    
    type: DataTypes.STRING,

   },
   tm_name:{
    
    type: DataTypes.STRING,

   },
   
   saheli_number:{
    type: DataTypes.STRING,    
   }
    })
    return Leads;
  };
  