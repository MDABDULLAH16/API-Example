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
    // dynamic details transfer
    const code = country.cca2;
    // console.log(code);
    // console.log(name);
    // distracturing ui

    div.innerHTML = `
                
                 <h1>Name: ${name}</h1>
                
                <button class ='button-73' onclick="loadDetails('${code}')" type="">Details</button>

         `;
    countriesContainer.appendChild(div);
    // console.log(country);
  });
};
const loadDetails = (code) => {
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDetails(data[0]));
};

const displayDetails = (details) => {
  const getDetailsContainer = document.getElementById("details-container");

  // distructuring
  const flag = details.flags.png;
  const name = details.name.common;
  const Capital = details.capital;
  const continents = details.continents;
  const population = details.population;
  // set ui

  getDetailsContainer.innerHTML = `
                <img src=${flag}>
                 <h1>Name: ${name}</h1>
                <h3>Capital: ${Capital}</h3>
                <h3>Continents: ${continents}</h3>
                <p>Population: ${population}</p>
                

         `;
  // console.log(details.name.common);
};
loadCountries();
