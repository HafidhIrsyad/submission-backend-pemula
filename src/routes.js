const {
  createBooksHandler, getAllBooksHandler, getBooksByIdHandler, editBooksHandler, deletBooksHandler,
} = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBooksByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBooksHandler,
  },
  {
    method: 'POST',
    path: '/books',
    handler: createBooksHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deletBooksHandler,
  },
];

module.exports = routes;
