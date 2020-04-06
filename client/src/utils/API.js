import axios from 'axios';

export default {
   // Gets all Inventorys
   getInventory: function () {
      return axios.get('/api/inventory');
   },
   // Gets the Inventory with the given id
   getInventoryItem: function (id) {
      return axios.get("/api/inventory/" + id);
   },
   // Saves a Inventory to the database
   saveInventory: function (inventoryData) {
      return axios.post("/api/inventory/", inventoryData);
   },
}