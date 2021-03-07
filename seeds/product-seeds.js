const { Product } = require('../models');

const productData = [
  {//cleansing balm 1
    product_name: 'Papaya Sorbet Smoothing Enzyme Cleansing Balm & Makeup Remover',
    brand: 'Glow Recipe',
    category_id: 1
  },
  {//cleansing balm 1
    product_name: 'Day Dissolve Cleansing Balm',
    brand: 'Versed',
    category_id: 1
  },
  {//skin cleanser 2
    product_name: 'Blueberry Bounce Gentle Cleanser',
    brand: 'Glow Recipe',
    category_id: 2,
  },
  {//skin cleanser 2
    product_name: 'Cerave Foaming Facial Cleanser',
    brand: 'Cerave',
    category_id: 2,
  },
  {//skin cleanser 2
    product_name: 'Micellar Water ',
    brand: 'Garnier',
    category_id: 2,
  },
  {//toner 3
    product_name: 'Watermelon Glow PHA+BHA Pore-Tight Toner',
    brand: 'Glow Recipe',
    category_id: 3, 
  },
  {//toner 3
    product_name: 'Glycolic Acid 7% Toning Solution',
    brand: 'The Ordinary',
    category_id: 3, 
  },
  {//serum 4
    product_name: 'Watermelon Glow Niacinimide Dew Drops',
    brand: 'Glow Recipe',
    category_id: 4,
  },
  {//serum 4
    product_name: 'Mandelic Acid 10% + HA',
    brand: 'The Ordinary',
    category_id: 4.
  },
  {//serum 4
    product_name: 'Marine Hyaluronics',
    brand: 'The Ordinary',
    category_id: 4
  },
  {//serum 4
    product_name: "Niacinimide 10% + Zinc 1%",
    brand: 'The Ordinary',
    category_id: 4, 
  },
  {//serum 4
    product_name: 'Reservatol 3% + Ferulic Acid 3%',
    brand: 'The Ordinary',
    category_id: 4
  },
  {//serum 4
    product_name: 'Amino Acids + B5',
    brand: 'The Ordinary',
    category_id: 4,
  },
  {//serum 4
    product_name: 'Ascorbic Acid 8% + Alpha Arbutin 2%',
    brand: 'The Ordinary',
    category_id: 4, 
  },
  {//serum 4
    product_name: 'Granactive Retinoid 2% Emulsion',
    brand: 'The Ordinary',
    category_id: 4
  },
  {//oils 5
    product_name: '100% Plant Derived Hemi-Squalane',
    brand: 'The Ordinary',
    category_id: 5,
  },
  {//oils 5
    product_name: 'UFO Ultra Clarify Face Oil',
    brand: 'Sunday Riley',
    category_id: 5, 
  },
  {//moisturizer 6
    product_name: 'Watermelon Glow Pink Juice Moisturizer',
    brand: 'Glow Recipe',
    category_id: 6,
  },
  {//moisturizer 6
    product_name: 'Watermelon Glow Sleeping Mask',
    brand: 'Glow Recipe',
    category_id: 6,
  },
  {//moisturizer 6
    product_name: 'Avocado Melt Retinol Sleeping Mask',
    brand: 'Glow Recipe',
    category_id: 6, 
  },
  {//moisturizer 6
    product_name: 'Watermelon Glow Ultra-Fine Mist',
    brand: 'Glow Recipe',
    category_id: 6,
  }, 
  {//moisturizer 6
    product_name: 'Magic Food Banana Sleeping Pack',
    brand: 'TONYMOLY',
    category_id: 6,
  },
  {//moisturizer 6
    product_name: "Panda's Dream White Sleeping Mask",
    brand: 'TONYMOLY',
    category_id: 6, 
  },
  {//masks 7 
    category_name: 'Salicylic Acid 2% Masque',
    brand: 'The Ordinary',
    category_id: 7,
  },
  {//masks 7
    product_name: 'AHA 30% + BHA 2% Peeling Solution',
    brand: 'The Ordinary',
    category_id: 7
  },
  {//masks 7
    product_name: 'Saturn Sulfur Acne Treatment Mask',
    brand: 'Sunday Riley',
    category_id: 7, 
  },
  {//masks 7 
    product_name: 'Ultra Violet Brightening Purple Clay Mask',
    brand: 'Generation Clay',
    category_id: 7, 
  },
  {//masks 7
    product_name: 'Pore Tightening Clay Mask',
    brand: 'Biorace',
    category_id: 7, 
  },
  {//masks 7
    product_name: 'Rejuvinating Mask',
    brand: 'EvioSkin',
    category_id: 7,
  },
  {//masks 7
    product_name: 'Take Away the Drama',
    brand: 'Hey Honey',
    category_id: 7, 
  },
  {//sheet masks 8
    product_name: 'Pink',
    brand: 'Piggy Head',
    category_id: 8, 
  },
  {//sheet masks 8
    product_name: 'Blue',
    brand: 'Piggy Head',
    category_id: 8 
  },
  {//sheet mask 8
    product_name: 'Daily Fresh Squeeze',
    brand: 'Avette',
    category_id: 8
  },
  {//sheet mask 8
    product_name: 'Fermentation Mask Pack',
    brand: 'Benton',
    category_id: 8, 
  },
  {//sheet mask 8
    product_name: 'Plain Yogurt Mask',
    brand: "A'pieu",
    category_id: 8, 
  },
  {//sheet mask 8
    product_name: 'Rose Hybrida Whitening Mask Sheet',
    brand: 'From Taiwan',
    category_id: 8, 
  },
  {//sheet mask 8
    product_name: 'Strawberry Yogurt Mask',
    brand: "A'pieu",
    category_id: 8, 
  },
  {//sheet mask 8
    product_name: 'White Flowers',
    brand: 'Etude House',
    category_id: 8, 
  },
  {//sheet mask 8
    product_name: 'Black Face and Neck Mask',
    brand: 'Sexy Look',
    category_id: 8, 
  },
  {//sheet mask 8 
    product_name: 'Pumpkin Mask Sheet',
    brand: 'TONYMOLY',
    category_id: 8, 
  },
  {//sheet mask 8
    product_name: 'Pomegranate Mask Sheet',
    brand: 'TONYMOLY',
    category_id: 8, 
  },
  {//sheet mask 8
    product_name: 'Pineapple Mask Sheet',
    brand: 'TONYMOLY',
    category_id: 8, 
  },
  {//sheet mask 8
    product_name: 'Coconut Mask Sheet',
    brand: 'TONYMOLY',
    category_id: 8,
  },
  {//sheet mask 8
    product_name: 'Shea Butter Nourish Mask',
    brand: 'Dr.Huang Beauty Lab',
    category_id: 8,
  },
  {//sheet mask 8
    product_name: 'Pink Milk Mask',
    brand: 'Duft & Doft',
    stock: 2,
    category_id: 8, 
  },
  {//sheet mask 8
    product_name: '24K Gold Glow Sheet Mask',
    brand: 'Kazu Beauty',
    category_id: 8,
  },
  {//sheet mask 8
    product_name: 'Chamomile Real Nature Sleep Mask',
    brand: 'Nature Republic',
    category_id: 8, 
  },
  {//sheet mask 8
    product_name: 'Shea Butter',
    brand: 'Missha',
    category_id: 8,
  },
  {//sheet mask 8
    product_name: 'Cucumber',
    brand: 'Missha',
    category_id: 8, 
  },
  {//sheet mask 8
    product_name: 'Red Ginseng',
    brand: 'Missha',
    category_id: 8, 
  },
  {//sheet mask 8 
    product_name: 'Potato',
    brand: 'Missha',
    category_id: 8, 
  },
  {//sheet mask 8
    product_name: 'Lemongrass and Green Tea Sheet Mask',
    brand: 'Bubble T Cosmetics',
    category_id: 8, 
  },
  {//sheet mask 8 
    product_name: 'Real Nature Rice',
    brand: 'The Face Shop',
    category_id: 8, 
  },
  {//sheet mask 8
    product_name: 'Lily', 
    brand: 'The Face Shop',
    category_id: 8, 
  },
  {//sheet mask 8
    product_name: 'Pureness 100 Hyaluronic Mask',
    brand: 'TONYMOLY',
    category_id: 8, 
  },
  {//sheet mask 8
    product_name: 'Pureness 100 Caviar Mask Sheet',
    brand: 'TONYMOLY',
    category_id: 8, 
  },
  {//sheet mask 8
    product_name: 'White Milk One-Pack',
    brand: "A'pieu",
    category_id: 8, 
  },
  {//sheet mask 8
    product_name: 'Collagen Impact Mask',
    brand: 'MediHeal',
    category_id: 8, 
  },
  {//sheet mask 8
    product_name: 'Egg Essence Mask Sheet',
    brand: 'Esfolio',
    stock: 3, 
    category_id: 8, 
  },
  {//eye product 9
    product_name: 'Avocade Melt Retinol Eye Sleeping Mask',
    brand: 'Glow Recipe',
    category_id: 9, 
  }, 
  {//eye product 9 
    product_name: 'Caffeine Solution 5% + EGCG',
    brand: 'The Ordinary',
    category_id: 9,

  },
  {//treatment 10
    product_name: 'Salicylic Acid 2% Solution',
    brand: 'The Ordinary',
    category_id: 10, 
  },
  {//treatment 10
    product_name: '100% L-Ascorbic Acid Powder',
    brand: 'The Ordinary',
    category_id: 10,

  }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;