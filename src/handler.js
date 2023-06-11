const products = require('./products');
const diseases = require('./diseases');
const articles = require('./articles');
import('nanoid');

const getProductById = (request, h) => {
    const {id} = request.params;
    
    if (id === "jpapula") {
        const productIds = ["9", "7", "3"];
        const product = products.filter((product) => productIds.includes(product.id));
        
        return product
    }
    else if (id === "jpustula") {
        const productIds = ["10", "6", "3"];
        const product = products.filter((product) => productIds.includes(product.id));
        
        return product
    }
    else if (id === "jcystic") {
        const productIds = ["4", "6", "7"];
        const product = products.filter((product) => productIds.includes(product.id));
        
        return product
    }
    else if (id === "jpasir") {
        const productIds = ["3", "7", "8"];
        const product = products.filter((product) => productIds.includes(product.id));
        
        return product
    }
    else if (id === "bopeng") {
        const productIds = ["11", "2", "5"];
        const product = products.filter((product) => productIds.includes(product.id));
        
        return product
    }
    else {
        const product = products.filter((product) => product.id === id);
        
        return product
    }
};

const getAllProducts = () => (products);

const getDiseaseById = (request, h) => {
  const {id} = request.params;
  
  const disease = diseases.filter((d) => d.id === id)[0];

  return disease;
};

const getAllDiseases = () => (diseases);

const getArticleById = (request, h) => {
  const {id} = request.params;
  
  const article = articles.filter((article) => article.id === id)[0];

  return article;
};

const getAllArticles = () => (articles);

module.exports = 
  {
    getProductById,
    getAllProducts,
    getAllProducts,
    getDiseaseById,
    getAllDiseases,
    getArticleById,
    getAllArticles
  };