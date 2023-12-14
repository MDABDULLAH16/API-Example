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
    const mealId = meal.idMeal;
    // console.log(img);

    div.innerHTML = `
     <div class="card h-100">
                        <img src='${img}' class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p title='${descriptionsFull}' class="card-text">${descriptions}</p>
                            <button onclick = 'loadDetails(${mealId})' type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealsModal">
                            Details
                             </button>
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

const loadDetails = (mealId) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDetails(data.meals[0]));
};
const displayDetails = (details) => {
  const mealContainer = document.getElementById("details-container");
  document.getElementById("details-title").innerText = details.strMeal;
  mealContainer.innerHTML = `
    <img class= "img-fluid" src='${details.strMealThumb}'>
    `;
};

loadMeals("chicken");
