const orm = require('../config/orm');


const burger = {
    selectAll() {
      orm.selectAll('burgers');
    },
    // The variables cols and vals are arrays.
    insertOne(burgerName) {
      orm.insertOne('burgers', burgerName);
    },
  
    updateOne(burgerID) {
      orm.updateOne(burgerID);
    },
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;
  