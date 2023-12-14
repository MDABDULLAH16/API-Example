const loadMeals = (searchText) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};
const displayMeals = (meals) => {
  const mealContainer = document.getElementById("card-container");
  mealContainer.innerText = "";

  meals.forEach((meal) => {
    const div = document.createElement("div");
    div.classList.add("col");
    // console.log(meals);
    const img = meal.strMealThumb;
    const title = meal.strMeal;
    const descriptionsFull = meal.strInstructions;
    const descriptions = descriptionsFull.slice(0, 120) + "...";
    // console.log(img);

    div.innerHTML = `
     <div class="card h-100">
                        <img src='${img}' class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p title='${descriptionsFull}' class="card-text">${descriptions}</p>
                        </div>
                    </div>
    `;
    mealContainer.appendChild(div);
  });
  //   console.log(meals[0].strMeal);
};

const searchMeal = () => {
  const searchText = document.getElementById("search-field").value;
  loadMeals(searchText);
};

loadMeals("chicken");
