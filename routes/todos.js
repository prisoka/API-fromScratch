const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todos')

//require knex:
const knex = require('../db/knex');

router.get('/', todosController.getAll)
router.get('/:id', todosController.getOne)
router.post('/', todosController.create)
router.put('/:id', todosController.update)
router.delete('/:id', todosController.del)

module.exports = router;
