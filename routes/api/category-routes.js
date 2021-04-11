const router = require('express').Router();
const {
  getAllCategories,
  getCategoriesById,
  createCategory,
  updateCategory,
  deleteCategory
} = require('../../controllers/category-controller');

// /api/Categorys
router
  .route('/')
  .get(getAllCategories)
  .post(createCategory);

// /api/Categorys/:id
router
  .route('/:id')
  .get(getCategoriesById)
  .put(updateCategory)
  .delete(deleteCategory);

module.exports = router;