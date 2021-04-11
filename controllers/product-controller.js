const { Product } = require('../models');

const ProductController = {
  // get all products
  getAllProducts(req, res) {
    Product.find({})
      .populate({
        path: 'tags',
        select: '-__v'
      })
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbProductData => res.json(dbProductData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get one Product by id
  getProductsById({ params }, res) {
    Product.findOne({ _id: params.id })
      .populate({
        path: 'tags',
        select: '-__v'
      })
      .select('-__v')
      .then(dbProductData => res.json(dbProductData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // createProduct
  createProduct({ body }, res) {
    Product.create(body)
      .then(dbProductData => res.json(dbProductData))
      .catch(err => res.json(err));
  },

  // update Product by id
  updateProduct({ params, body }, res) {
  Product.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
    .then(dbProductData => {
      if (!dbProductData) {
        res.status(404).json({ message: 'No Product found with this id!' });
        return;
      }
      res.json(dbProductData);
    })
    .catch(err => res.status(400).json(err));
  },

  // delete Product
  deleteProduct({ params }, res) {
    Product.findOneAndDelete({ _id: params.id })
      .then(dbProductData => res.json(dbProductData))
      .catch(err => res.json(err));
  }
};

module.exports = ProductController;