const products = require('./products');
const diseases = require('./diseases');
import('nanoid');

const getPapula = () => {
  const brand1 = products.filter((product) => product.id === '9');
  const brand2 = products.filter((product) => product.id === '7');
  const brand3 = products.filter((product) => product.id === '3');

  return {brand1, brand2, brand3};
};

const getPustula = () => {
  const brand1 = products.filter((product) => product.id === '10');
  const brand2 = products.filter((product) => product.id === '6');
  const brand3 = products.filter((product) => product.id === '3');

  return {brand1, brand2, brand3};
};

const getKistik = () => {
  const brand1 = products.filter((product) => product.id === '4');
  const brand2 = products.filter((product) => product.id === '6');
  const brand3 = products.filter((product) => product.id === '7');

  return {brand1, brand2, brand3};
};

const getPasir = () => {
  const brand1 = products.filter((product) => product.id === '3');
  const brand2 = products.filter((product) => product.id === '7');
  const brand3 = products.filter((product) => product.id === '8');

  return {brand1, brand2, brand3};
};

const getBopeng = () => {
  const brand1 = products.filter((product) => product.id === '11');
  const brand2 = products.filter((product) => product.id === '2');
  const brand3 = products.filter((product) => product.id === '5');

  return {brand1, brand2, brand3};
};

const getAllProducts = () => (products);

const getDiseaseById = (request, h) => {
  const {id} = request.params;
  
  const disease = diseases.filter((d) => d.id === id)[0];

  return disease;
};

const getAllDiseases = () => (diseases);

module.exports = 
  {
    getPapula, 
    getPustula,
    getKistik,
    getPasir,
    getBopeng,
    getAllProducts,
    getDiseaseById,
    getAllDiseases
  };