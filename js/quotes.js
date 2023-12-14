const LoadQuotes = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => DisplayQuotes(data));
};

const DisplayQuotes = (quotes) => {
  const getQuotesElement = document.getElementById("quotes");
  getQuotesElement.innerHTML = quotes.quote;
};

LoadQuotes();
