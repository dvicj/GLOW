const { ProductTag } = require('../models');

const productTagData = [
    {
        product_id: 1,
        tag_id: 22
    },
    {
        product_id: 1,
        tag_id: 10
    },
    {
        product_id: 2,
        tag_id: 22
    },
    {
        product_id: 3,
        tag_id: 22
    },
    {
        product_id: 4,
        tag_id: 22
    },
    {
        product_id: 5,
        tag_id: 22
    },
    {
        product_id: 6,
        tag_id: 3
    },
    {
        product_id: 6,
        tag_id: 5
    },
    {
        product_id: 6,
        tag_id: 9
    },
    {
        product_id: 6,
        tag_id: 13
    },
    {
        product_id: 6,
        tag_id: 16
    },
    {
        product_id: 7,
        tag_id: 9
    },
    {
        product_id: 7,
        tag_id: 14
    },
    {
        product_id: 7,
        tag_id: 16
    },
    {
        product_id: 7,
        tag_id: 17
    },
    {
        product_id: 7,
        tag_id: 18
    },
    {
        product_id: 8,
        tag_id: 1
    },
    {
        product_id: 8,
        tag_id: 3
    },
    {
        product_id: 8,
        tag_id: 5
    },
    {
        product_id: 8,
        tag_id: 20
    }
];

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags; 