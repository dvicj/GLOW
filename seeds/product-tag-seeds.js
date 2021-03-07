const { ProductTag } = require('../models');

const ProductTagData = [

];

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags; 