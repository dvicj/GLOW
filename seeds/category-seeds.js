const { Category } = require('../models');

const categoryData = [
    {
        category_name: 'Cleansing Balms', //1
    },
    {
        category_name: 'Skin Cleansers' //2
    },
    {
        category_name: 'Toners' //3
    },
    {
        category_name: 'Serums' //4
    },
    {
        category_name: 'Oils' //5
    },
    {
        category_name: 'Moisturizers' //6
    },
    {
        category_name: 'Masks' //7
    },
    {
        category_name: 'Sheet Masks' //8
    }, 
    {
        category_name: 'Eye Products' //9 
    },
    {
        category_name: 'Treatments' //10
    },
    {
        category_name: 'Lip Products' //11
    }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories; 