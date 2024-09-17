// making main div a variable
let main = document.querySelector(".main")
//fetching default box class and passing it to variable
let default_box = document.querySelector(".book_box");

// putting all the variables we wish to change in an array
var Books = [
    {
     "cover": "../bookCovers/shining.jpg",
     "author": "Stephen King",
     "page_count": "447 pages",
     "title": "The Shining",
     "price": "$17.00",
     "short_summary": "Jack Torrance's new job at the Overlook Hotel is the perfect chance for a fresh start. As the off-season caretaker at the atmospheric old hotel, he’ll have plenty of time to spend reconnecting with his family and working on his writing. But as the harsh winter weather sets in, the idyllic location feels ever more remote . . . and more sinister. And the only one to notice the strange and terrible forces gathering around the Overlook is Danny Torrance, a uniquely gifted five-year-old."
    },
    {
     "cover": "../bookCovers/ring.jpg",
     "author": "Koji Suzuki",
     "page_count": "590 pages",
     "title": "Ring",
     "price": "$13.25",
     "short_summary": "Asakawa is a hardworking journalist who has climbed his way up from local-news beat reporter to writer for his newspaper’s weekly magazine. A chronic workaholic, he doesn’t take much notice when his seventeen-year-old niece dies suddenly – until a chance conversation reveals that another healthy teenager died at exactly the same time, in chillingly similar circumstances."
    },
    {
     "cover": "../bookCovers/frankenstein.jpg",
     "author": "Mary Shelley",
     "page_count": "288 pages",
     "title": "Frankenstein",
     "price": "$6.99",
     "short_summary": "When obsessed university student Victor Frankenstein finds the secret of animating dead flesh, he tries to create the first of a master race, stitching rotting corpses into a superhuman giant. Then the ghastly thing opens its hideous, soulless eyes and Frankenstein flees into the night, shrieking with horror--"
    },
    {
     "cover": "../bookCovers/loop.jpg",
     "author": "Jeremy Robert Johnson",
     "page_count": "320 pages",
     "title": "The Loop",
     "price": "$13.19",
     "short_summary": "Turner Falls is a small tourist town nestled in the hills of central Oregon. When a terrifying outbreak rapidly develops, this idyllic town becomes the epicenter of an epidemic of violence."
    },
    {
     "cover": "../bookCovers/house_next_door.jpg",
     "author": "Anne Rivers Siddons",
     "page_count": "448 pages",
     "title": "The House Next Door",
     "price": "$14.74",
     "short_summary": "Thirtysomething Colquitt and Walter Kennedy live in a charming, peaceful suburb of newly bustling Atlanta, Georgia. Life is made up of enjoyable work, long, lazy weekends, and the company of good neighbors. Then, to their shock, construction starts on the vacant lot next door, a wooded hillside they'd believed would always remain undeveloped. Disappointed by their diminished privacy, Colquitt and Walter soon realize something more is wrong with the house next door. Surely the house can’t be haunted, yet it seems to destroy the goodness of every person who comes to live in it, until the entire heart of this friendly neighborhood threatens to be torn apart."
    }
 ];
 
 
// using for loop to loop through array
for(let i = 0; i < Books.length; i++){
    // cloning default box class so we can duplicate it for as many books we have
    var newBookBox = default_box.cloneNode(true);
    // changing the inner text of all the ids so we have a new book in a clone div of the original
    // show my box boxes
    newBookBox.style.display = "flex";
    newBookBox.querySelector("#cover").src = Books[i].cover;
    newBookBox.querySelector("#author").innerText = Books[i].author;
    newBookBox.querySelector("#page_count").innerText = Books[i].page_count;
    newBookBox.querySelector("#title").innerText = Books[i].title;
    newBookBox.querySelector("#price").innerText = Books[i].price;
    newBookBox.querySelector("#short_summary").innerText = Books[i].short_summary;
    // appending new book box to main div
    main.append(newBookBox);
}




