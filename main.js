// get quotes from api with asynchronous fetch request 

let apiQuotes = [];

// Show new quote
function newQuote() {

    // Pick a random quote from the apiQuotes array
   const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
   console.log(quote);
}




// Get the quotes
async function getQuotes() {

    // API url
    const apiUrl = 'https://type.fit/api/quotes';

    try {

        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();

    } catch (error) {

        // Handle error

    }
}

getQuotes();