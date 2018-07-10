const express = require('express');
const router = express.Router();

//require knex:
const knex = require('../db/knex');

// get all todos
router.get('/', (req, res) => {
  // the client req all
  // the server get all from db
  knex('todo')
  .then((todos) => {
    // console.log('todos', todos);
    // response all & if not found, send empty arr
    res.render('alltodos', { todos: todos })
    // res.status(200).send(todos); // 200 = ok
  })
  .catch((err) => {
    console.log('err', err);
    res.status(500).send({error: {message: 'Something went wrong!'}}) // if can't find the req
  })
});

// get one todo
router.get('/:id', function(req, res, next) {
  // the client req one single todo
  const id = req.params.id;
  // the server gets the given id and search for sgl item n DB
  knex('todo')
  .where('id', id) // 'id' --> table column
  .then((data) => {
    // if found, response data
    if(data.length > 0){
      res.status(200).send(data[0]) // [0] --> calls just (expected) SINGLE item, not whole array
    } else {
      res.status(404).send({error: {message: 'Not Found!'}})
    }
  })
  .catch((err) => {
    console.log('err', err);
    // if not found: 404
    res.status(500).send({error: {message: 'Something went wrong!'}}) // if can't find the req
  })
});

// create one
router.post('/', function(req, res, next) {
  // client req a new
  // authorization (could actually be in any/all router)
  // server collects information
  const newTodo = {
      title: req.body.title,
      priority: req.body.priority,
      date: new Date()
  }
  // if all good, server send information to DB
  knex('todo')
  .insert(newTodo)
  .then((id) => {
    // if created, server response with 202
    res.status(202).send({ message: 'Created!' })
  })
  // if not able to be stored in DB server send 500 - Internal Server Error
  .catch((err) => {
    res.status(500).send({error: {message: 'Something went wrong!'}});
  })
});

module.exports = router;
