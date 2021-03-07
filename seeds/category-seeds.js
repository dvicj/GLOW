const { Category } = require('../models');

const categoryData = [
    {
        category_name: 'Cleansing Balms',
    },
    {
        category_name: 'Skin Cleansers'
    },
    {
        category_name: 'Toners'
    },
    {
        category_name: 'Serums'
    },
    {
        category_name: 'Oils'
    },
    {
        category_name: 'Moisturizers'
    },
    {
        category_name: 'Masks'
    },
    {
        category_name: 'Sheet Masks'
    }, 
    {
        category_name: 'Eye Products'
    },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories; 