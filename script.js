const quotes = [
    {
        quote:
            "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
        author: " Life"
    },
    {
        quote:
            "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
        author: "John Kenneth Galbraith"
    },
    {
        quote:
            "God save me from my friends. I can protect myself from my enemies.",
        author: "Claude Louis Hector de Villars "
    },
    {
        quote: "The price of anything is the amount of life you exchange for it.",
        author: "David Thoreau"
    },
    {
        quote:
            "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
        author: "Charles Lindbergh"
    },
    {
        quote:
            "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
        author: " Tyne Daly"
    }
];

const buttonHTML = document.querySelector("#generate-quote");
const quoteHTML = document.querySelector(".quote--text");
const authorHTML = document.querySelector(".quote--author");

// la fundcion deveria darnos una cita cada vez que pulsamos el boton
function quoteGenerator() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    const quote = quotes[randomIndex].quote;
    const author = quotes[randomIndex].author;

    // habría que modificar el texto de quoteHTML y authorHTML
    quoteHTML.textContent = quote;
    authorHTML.textContent = author;
}
// esto tiene que ocurrir cuando hacemos "click" en button
// addEventListener("que quieres que escuche?", que quieres que haga?)
buttonHTML.addEventListener("click", quoteGenerator)