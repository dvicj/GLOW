const { Tag } = require('../models');

const tagData = [
    {
        tag_name: 'Brightening'
    },
    {
        tag_name: 'Lifting'
    },
    {
        tag_name: 'Hydrating'
    },
    {
        tag_name: 'Soothing'
    },
    {
        tag_name: 'Moisturizing'
    },
    {
        tag_name: 'Whitening'
    },
    {
        tag_name: 'Nourishing'
    },
    {
        tag_name: 'Firming'
    },
    {
        tag_name: 'Toning'
    },
    {
        tag_name: 'Softening'
    },
    {
        tag_name: 'Revitalizing'
    },
    {
        tag_name: 'Refining'
    }, 
    {
        tag_name: 'Tightening'
    },
    {
        tag_name: 'Clearing'
    },
    {
        tag_name: 'Rejuvinating'
    },
    {
        tag_name: 'AHA'
    },
    {
        tag_name: 'Acid'
    },
    {
        tag_name: 'Exfoliating'
    }, 
    {
        tag_name: 'BHA'
    },
    {
        tag_name: 'Plumping'
    },
    {
        tag_name: 'Defence'
    }
];

const seedTags = () => Tag.bulkCreate(tagData);
module.exports = seedTags; 
