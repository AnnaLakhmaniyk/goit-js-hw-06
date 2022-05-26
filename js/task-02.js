const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients")


const element = ingredients.map(element => {
  const ingredientsListEl = document.createElement("li")
  ingredientsListEl.classList.add("item");
 ingredientsListEl.textContent = element
  // console.log(ingredientsListEl);
  return ingredientsListEl
});

ingredientsEl.append(...element)
