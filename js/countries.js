const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  const countriesContainer = document.getElementById("all-countries");
  countries.forEach((country) => {
    const div = document.createElement("div");
    div.classList.add("country");
    const flag = country.flags.png;
    const name = country.name.common;
    const Capital = country.capital;
    const continents = country.continents;
    const population = country.population;

    console.log(name);
    div.innerHTML = `
                <img src=${flag}>
                 <h1>Name: ${name}</h1>
                <h3>Capital: ${Capital}</h3>
                <h3>Continents: ${continents}</h3>
                <p>Population: ${population} </p>
                
         `;
    countriesContainer.appendChild(div);
    console.log(country);
  });
};

loadCountries();
