const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let inventorySchema = new Schema({
   product: String, 
   price: Number, 
   quantity: Number
});

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;