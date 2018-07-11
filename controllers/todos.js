const model = require('../models/todos')

const getAll = (req, res, next) => {
  const data = model.getAll()
  res.status(200).json({ data })
}

const getOne = (req, res, next) => {
  const data = model.getOne(req.params)
  if(data.errors) {
    return next({ status: 404, message: 'Could not find id', erroors: data.errors})
  }
  res.status(200).json({ data })
}

const create = (req, res, next) => {
  const result = model.create(req.body)
  if(result.errors) {
    return next({ status: 400, message: 'Could not create new todo', errors: result.errors })
  }
  res.status(201).json({ data: result })
}

const update = (req, res, next) => {
  const data = model.update(req.params, req.body)
  if(data.errors) {
    return next({ status: 400, message: 'Could not update todo info', errors: data.errors })
  }
  res.status(200).json({ data })
}

const del = (req, res, next) => {
  const data = model.del(req.params)
  if(data.errors) {
    return next({ status: 404, message: 'Could not find id', errors: data.errors })
  }
 res.status(204).json({ data })
}

module.exports = { getAll, getOne, create, update, del }
