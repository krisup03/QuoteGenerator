

const API_URL = "https://quotes-api-self.vercel.app/quote";
const quoteText = document.querySelector(".quote-text");
const authorText = document.querySelector(".author-text");
const generatorBtn = document.getElementById("generator");

// Fetch quote from API
async function getQuote() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch quote: ${response.status}`);
    }

    const data = await response.json(); 
    // The new API returns a single object directly
    const quote = data.quote;
    const author = data.author;

    quoteText.textContent = `"${quote}"`;
    authorText.textContent = `- ${author}`;
    
  } catch (error) {
    console.error("Error fetching quote:", error);
    quoteText.textContent = "Oops! Couldn't fetch a new quote.";
    authorText.textContent = "";
  }
}

// Event listener for button
generatorBtn.addEventListener("click", getQuote);

// Load a quote on first page load
getQuote();