const path = require('path');
const router = require('express').Router();

router.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
})

router.get('/categories', (req,res) => {
  res.sendFile(path.join(__dirname, '../../public/categories.html'));
});

router.get('/products', (req,res) => {
  res.sendFile(path.join(__dirname, '../../public/products.html'));
});

router.get('/tags', (req,res) => {
  res.sendFile(path.join(__dirname, '../../public/tags.html'));
});

module.exports = router;