const router = require('express').Router();
const inventoryController = require('../../controllers/inventoryController');
const mongoose = require('mongoose');
const Inventory = mongoose.model('Inventory');

router.param('inventory', (req, res, next, id) => {
   Inventory.findById(id).then(function (inventory) {
      if (!inventory) {
         return res.sendStatus(404);
      }
      return next();
   }).catch(next);
});

router.get('/inventory', function (req, res, next) {
   Inventory.find({})
      .then(function (results) {
         res.sendStatus(200);
         console.log("Results: ", results);
         let inventory = results;

         return res.json({
            inventory
         });
      })
      .catch(next);
});

router
   .route(':/id')
   .get(inventoryController.findById)
   .put(inventoryController.update)
   .delete(inventoryController.remove);

module.exports = router;