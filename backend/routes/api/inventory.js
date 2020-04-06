const router = require('express').Router();
const controller = require('../../controllers/inventoryController');


router.get('/inventory', function(req, res, next) {
   controller.list(req, res, next);
});

router.get('/inventory/:id', function(req, res, next) {
   controller.remainingInventory(req, res, next);
});

router.get('/inventory/:id', function(req, res, next) {
   controller.buyDrinks(req, res, next);
});

router.post('/inventory/:id', function(req, res, next) {
   controller.list(req, res, next);
});

router.post('/inventory/:id', function(req, res, next) {
   controller.getTransactions(req, res, next);
});

module.exports = router;