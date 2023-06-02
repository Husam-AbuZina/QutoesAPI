document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const quoteList = document.getElementById("quoteList");
    const apiUrl = "https://quotes.free.beeceptor.com/quotes"; // Replace The API endpoint with new Link to make it work
    
    //https://dummyjson.com/quotes // always gives me undefined
  
    // Fetch data from the API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const quotes = data.map(item => item.quote);
  
        // Display all quotes initially
        //displayQuotes(quotes);
  
        // Filter quotes based on user input
        searchInput.addEventListener("input", function () {
          const searchTerm = searchInput.value.toLowerCase();
          const filteredQuotes = quotes.filter(quote =>
            quote.toLowerCase().includes(searchTerm)
          );
          displayQuotes(filteredQuotes);
        });
      })
      .catch(error => {
        // Display error message if API call fails
        quoteList.innerHTML = "Error loading quotes.";
        console.error("Error:", error);
      });
  
    // Display quotes in the quote list
    function displayQuotes(quotes) {
      quoteList.innerHTML = "";
      if (quotes.length > 0) {
        quotes.forEach(quote => {
          const li = document.createElement("li");
          li.textContent = quote;
          quoteList.appendChild(li);
        });
      } else {
        const li = document.createElement("li");
        li.textContent = "No quotes found.";
        li.classList.add("no-quotes");
        quoteList.appendChild(li);
      }
    }
  });
  