const router = require('express').Router();
const {
  getAllProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../../controllers/product-controller');

// /api/Products
router
  .route('/')
  .get(getAllProducts)
  .post(createProduct);

// /api/Products/:id
router
  .route('/:id')
  .get(getProductsById)
  .put(updateProduct)
  .delete(deleteProduct);

module.exports = router;