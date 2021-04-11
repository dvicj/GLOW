const { Category } = require('../models');

const CategoryController = {
  // get all Categorys
  getAllCategories(req, res) {
    Category.find({})
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbCategoryData => res.json(dbCategoryData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get one Category by id
  getCategoriesById({ params }, res) {
    Category.findOne({ _id: params.id })
      .select('-__v')
      .then(dbCategoryData => res.json(dbCategoryData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // createCategory
  createCategory({ body }, res) {
    Category.create(body)
      .then(dbCategoryData => res.json(dbCategoryData))
      .catch(err => res.json(err));
  },

  // update Category by id
  updateCategory({ params, body }, res) {
  Category.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No Category found with this id!' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => res.status(400).json(err));
  },

  // delete Category
  deleteCategory({ params }, res) {
    Category.findOneAndDelete({ _id: params.id })
      .then(dbCategoryData => res.json(dbCategoryData))
      .catch(err => res.json(err));
  }
};

module.exports = CategoryController;