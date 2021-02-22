const orm = require('../config/orm');


const burger = {
    selectAll() {
      return orm.selectAll('burgers');
      
    },
    // The variables cols and vals are arrays.
    insertOne(burgerName) {
      return orm.insertOne('burgers', burgerName);
    },
  
    updateOne(burgerID, newDevoured) {
      return orm.updateOne('burgers', burgerID, newDevoured);
    },

    deleteOne(burgerID){
      return orm.deleteOne('burgers', burgerID);
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;

 
  