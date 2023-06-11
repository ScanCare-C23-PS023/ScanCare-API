const {
        getProductById,
        getAllProducts,
        getDiseaseById,
        getAllDiseases,
        getArticleById,
        getAllArticles
      } = require('./handler');

const routes = [
    {
        method: 'GET',
        path: '/products/{id}',
        handler: getProductById
    },
    {
        method: 'GET',
        path: '/products',
        handler: getAllProducts
    },
    {
        method: 'GET',
        path: '/diseases/{id}',
        handler: getDiseaseById
    },
    {
        method: 'GET',
        path: '/diseases',
        handler: getAllDiseases
    },
    {
        method: 'GET',
        path: '/articles/{id}',
        handler: getArticleById
    },
    {
        method: 'GET',
        path: '/articles',
        handler: getAllArticles
    },
];

module.exports = routes;


