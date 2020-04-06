const router = require('express').Router();
const inventoryRoutes = require('./inventory');

// Inventory routes
router.use('/inventory', inventoryRoutes);

module.exports = router;