const uuid = require('uuid/v4')

const todos = []

const getAll = () => {
  console.log(todos)

  return todos
}

const getOne = (params) => {
  const errors = []
  let id = params.id
  let todo = todos.find(todo => todo.id === id)
  let response

  if(!todo) {
    errors.push('Id not found')
    response = { errors }
  } else {
    response = todo
  }
  return response
}

const create = (body) => {
  const errors = []
  const title = body.title
  const priority = body.priority
  const description = body.description

  let response

  if(title && priority) {
    const todo = {
      id: uuid(),
      title: title,
      priority: priority,
      description: description,
      date: new Date(),
      done: false
    }

    todos.push(todo)
    response = todo
    console.log(todos)
  } else {
    errors.push('title and priority are required')
    response = { errors }
  }
  return response
}

const update = (params, body) => {
  let errors = []
  let id = params.id
  let title = body.title
  let priority = body.priority
  let description = body.description
  let done = body.done

  if(!title || !priority) {
    errors.push('title and priority are required')
    response = { errors }
  } else {
    let todoFound = todos.find(todo => todo.id === id)

    if(todoFound) {
      todoFound.id = id,
      todoFound.title = title,
      todoFound.priority = priority,
      todoFound.description = description,

      response = todoFound
    }
  }

  return response
}

const del = (params) => {
  let errors = []
  let id = params.id
  let response
  let todo = todos.find(todo => todo.id === id )

  if(todo) {
    let index = todos.indexOf(todo)
    todos.splice(index, 1)
    response = todos
  } else {
    errors.push('id not found')
    response = { errors }
  }

  return response
}

module.exports = { getAll, getOne, create, update, del }
