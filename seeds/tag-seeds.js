const { Tag } = require('../models');

const tagData = [
    {
        tag_name: 'Brightening' //1
    },
    {
        tag_name: 'Lifting' //2
    },
    {
        tag_name: 'Hydrating' //3
    },
    {
        tag_name: 'Soothing' //4
    },
    {
        tag_name: 'Moisturizing' //5
    },
    {
        tag_name: 'Whitening' //6
    },
    {
        tag_name: 'Nourishing' //7
    },
    {
        tag_name: 'Firming' //8
    },
    {
        tag_name: 'Toning' //9
    },
    {
        tag_name: 'Softening' //10
    },
    {
        tag_name: 'Revitalizing' //11
    },
    {
        tag_name: 'Refining' //12
    }, 
    {
        tag_name: 'Tightening' //13
    },
    {
        tag_name: 'Clearing' //14
    },
    {
        tag_name: 'Rejuvinating' //15
    },
    {
        tag_name: 'AHA' //16
    },
    {
        tag_name: 'Acid' //17
    },
    {
        tag_name: 'Exfoliating' //18
    }, 
    {
        tag_name: 'BHA' //19
    },
    {
        tag_name: 'Plumping' //20
    },
    {
        tag_name: 'Defence' //21
    },
    {
        tag_name: 'Cleansing' //22
    }
];

const seedTags = () => Tag.bulkCreate(tagData);
module.exports = seedTags; 
