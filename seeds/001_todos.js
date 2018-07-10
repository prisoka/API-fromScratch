
exports.seed = function(knex, Promise) {
  return knex('todo')
    .del()   // Deletes ALL existing entries
    .then(function () {
      const todos = [{
        title: 'Build a CRUD App',
        priority: 1,
        date: new Date()
      }, {
        title: 'Learn MVC',
        priority: 1,
        date: new Date()
      }, {
        title: 'Review CRUD',
        priority: 1,
        date: new Date()
      }, {
        title: 'Learn Authentication and Authorization',
        priority: 1,
        date: new Date()
      }, {
        title: 'Rest',
        priority: 5,
        date: new Date()
      }];

      return knex('todo').insert(todos); // DONT forget to return!!!
    });
};
