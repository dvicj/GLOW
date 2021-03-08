const $categoryForm = document.querySelector('#category-form');
const $productForm = document.querySelector('#product-form');
const $tagForm = document.querySelector('#tag-form');

const handleCategoryFormSubmit = event => {
    event.preventDefault(); 

    //get category data and organize it
    const name = $categoryForm.querySelector('[name=category-name').value;
    const categoryObject = { name };
    fetch('./api/categories', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(categoryObject)
    }).then(response => {
        if(response.ok) {
            return response.json(); 
        }
        alert ('Error: ' + response.statusText);
    }).then(postResponse => {
        console.log(postResponse);
        alert('Thank you for adding a category!');
    });
};

const handleProductFormSubmit = event => {
    event.preventDefault(); 

    //get product data and organize it
    const name = $productForm.querySelector('[name="product-name"]').value;
    const brand = $productForm.querySelector('[name="product-brand"]').value;
    const stock = $productForm.querySelector('[name="product-stock"]').value; 
    
    const productObj = { name, brand, stock };
    console.log(productObj);
    fetch('api/products', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productObj)
    }).then(response => {
        if(response.ok) {
            return response.json(); 
        }
        alert ('Error: ' + response.statusText);
    }).then (postResponse => {
        console.log(postResponse);
        alert('Thank you for adding a product!');
    });
};

const handleTagFormSubmit = event => {
    event.preventDefault(); 

    //get category data and organize it
    const name = $tagForm.querySelector('[name=category-name').value;
    const tagObject = { name };
    fetch('./api/tags', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tagObject)
    }).then(response => {
        if(response.ok) {
            return response.json(); 
        }
        alert ('Error: ' + response.statusText);
    }).then(postResponse => {
        console.log(postResponse);
        alert('Thank you for adding a tag!');
    });
};


$categoryForm.addEventListener('submit', handleCategoryFormSubmit);
$productForm.addEventListener('submit', handleProductFormSubmit);
$tagForm.addEventListener('submit', handleTagFormSubmit);