const $categoryForm = document.querySelector('#categories-form');
const $displayArea = document.querySelector('#display-area');

const printResults = resultArr => {
    console.log(resultArr);

    const categoryHTML = resultArr.map(({ id, category_name }) => {
        return `
        
        <div>
            <div data-id=${id}>
                <h4>${category_name}</h4>
            </div>
        </div>
        
        `;
    });

    $displayArea.innerHTML = categoryHTML.join('');
};

const getCategories = (formData = {}) => {
    let queryUrl = '/api/categories?';

    Object.defineProperties(formData).forEach(([key, value]) => {
        queryUrl += `${key}=${value}&`;
    });

    console.log(queryUrl);
    fetch(queryUrl)
    .then(response => {
        if(!response.ok) {
            return aler('Error: ' + response.statusText);
        }
        return response.json(); 
    }).then(categoryData => {
        console.log(categoryData);
        printResults(categoryData);
    });
};

const handleGetCategoriesSubmit = event => {
    event.preventDefault(); 
    const name = $categoryForm.querySelector('[name="category-name"');
    const categoryObject = { name };
    getCategories(categoryObject);
};

$categoryForm.addEventListener('submit', handleGetCategoriesSubmit);

getCategories(); 