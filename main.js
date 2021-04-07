// get quotes from api with asynchronous fetch request 

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter'); 
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// set the apiQuotes aas a blank array
let apiQuotes = [];

// Loader
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide loading 
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// Show new quote function
function newQuote() {

    loading();

    // Pick a random quote from the apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // console.log(quote);

    // Check if author field is blank and replace with 'unknown'
    // if there is not author text present ...
    if(!author.text) {

        // set the text content of author 'unknown'
        authorText.textContent = 'Unknown';

        // else set the content to author
    } else {
        authorText.textContent = quote.author;
    }

    // css content for quote length to determin style
    if(quote.text.length > 120) {
        
        // add the class of long-quote to quote
        quoteText.classList.add('long-quote');

        // remove the class of long-quote
    } else {
        quoteText.classList.remove('long-quote');
    }

    // Set quote, hide loader
    // Populate text content
    quoteText.textContent = quote.text;

    complete();
}

// Get the quotes
async function getQuotes() {
    
    // API url
    const apiUrl = 'https://type.fit/api/quotes';
    try {

        // fetch() to get data from the API
        // await the data so its not fired off straight away
        // assign the data into a response variable
        const response = await fetch(apiUrl);

        // set the data response JSON format
        // await the response
        // assign the respoinse to apiQuotes
        apiQuotes = await response.json();

        // pick a random quote
        newQuote();
    } 
    
    // if there is an error log or alert the error
    catch (error) {
        console.log(error);
    }
}

// tweet quote 
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event listener for share button
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote)

// On page load fires this function
getQuotes();
