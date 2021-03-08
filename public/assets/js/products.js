const $productForm = document.querySelector('#products-form');
const $displayArea = document.querySelector('#display-area');

const printResults = resultArr => {
  console.log(resultArr);

  const productsHTML = resultArr.map(({ id, product_name, brand, stock }) => {
    return `
    <div>
    <div data-id=${id}>
        <h4>${product_name}</h4>
        <h4>${brand}</h4>
        <h4>${stock}</h4>
    </div>
    </div>
    `;
  });

  $displayArea.innerHTML = productsHTML.join('');
};

const getProducts = (formData = {}) => {
  let queryUrl = '/api/products?';

  Object.entries(formData).forEach(([key, value]) => {
    queryUrl += `${key}=${value}&`;
  });

  console.log(queryUrl);
  //11.3.7
  fetch(queryUrl)
  .then(response => {
    if (!response.ok) {
      return alert('Error: ' + response.statusText);
    }
    return response.json();
  })
  .then(productData => {
    console.log(productData);
    printResults(productData);
  });

};

const handleGetProductsSubmit = event => {
    event.preventDefault(); 
    const name = $categoryForm.querySelector('[name="product-name"');
    const brand = $categoryForm.querySelector('[name="product-brand"');
    const stock = $categoryForm.querySelector('[name="product-stock"');
    const categoryObject = { name, brand, stock };
    getCategories(categoryObject);
};

$animalForm.addEventListener('submit', handleGetProductsSubmit);

getAnimals();