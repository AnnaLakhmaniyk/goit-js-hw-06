

const categoriesEl = document.querySelectorAll('#categories .item')
console.log(`Number of categories:${categoriesEl.length}`);

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

categoriesEl.forEach(element => {
    console.log(`Category: ${element.querySelector("h2").textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
})
