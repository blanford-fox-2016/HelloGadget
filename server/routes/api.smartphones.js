const express = require('express');
const router = express.Router();

const controller = require('../controllers/api.smartphones')

/* Create dummy smartphones data. */
router.get('/seed', controller.seedSmartphones);

/* Create 1 smartphone. */
router.post('/', controller.addNewSmartphones)

/* Get all smartphones. */
router.get('/', controller.getAllSmartphones);

/* Get smartphone by name. */
router.get('/:name', controller.getOneSmartphones);

/* 	Delete all smartphones. */
router.delete('/', controller.deleteAllSmartphones);

/* Delete smartphones by id. */
router.delete('/:id', controller.deleteOneSmartphones);

/* Update smartphones by id. */
router.put('/:id', controller.updateOneSmartphones);

module.exports = router;
