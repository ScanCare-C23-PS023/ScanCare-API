const {
        getPapula, 
        getPustula,
        getKistik,
        getPasir,
        getBopeng,
        getAllProducts,
        getDiseaseById,
        getAllDiseases
      } = require('./handler');

const routes = [
    {
        method: 'GET',
        path: '/products/jpapula',
        handler: getPapula
    },
    {
        method: 'GET',
        path: '/products/jpustula',
        handler: getPustula
    },
    {
        method: 'GET',
        path: '/products/jcystic',
        handler: getKistik
    },
    {
        method: 'GET',
        path: '/products/jpasir',
        handler: getPasir
    },
    {
        method: 'GET',
        path: '/products/bopeng',
        handler: getBopeng
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
];

module.exports = routes;


