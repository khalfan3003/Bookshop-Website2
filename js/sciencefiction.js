// making main div a variable
let main = document.querySelector(".main")
//fetching default box class and passing it to variable
let default_box = document.querySelector(".book_box");

// putting all the variables we wish to change in an array
var Books = [
    {
     "cover": "../bookCovers/lightning_thief.jpg",
     "author": "Rick Riordan",
     "page_count": "377 pages",
     "title": "The Lightning Thief ",
     "price": "$7.20",
     "short_summary": "Twelve-year-old Percy Jackson is on the most dangerous quest of his life. With the help of a satyr and a daughter of Athena, Percy must journey across the United States to catch a thief who has stolen the original weapon of mass destruction — Zeus’ master bolt. Along the way, he must face a host of mythological enemies determined to stop him. Most of all, he must come to terms with a father he has never known, and an Oracle that has warned him of betrayal by a friend."
    },
    {
     "cover": "../bookCovers/girl_dragon_tattoo.jpg",
     "author": "Stieg Larsson",
     "page_count": "590 pages",
     "title": "The Girl with the Dragon Tattoo",
     "price": "$9.99",
     "short_summary": "In this gripping thriller, journalist Mikael Blomkvist and hacker Lisbeth Salander join forces to solve the disappearance of a wealthy industrialist's niece. As they dig deeper, they uncover dark secrets that lead to shocking revelations."
    },
    {
     "cover": "../bookCovers/dune.jpg",
     "author": "Frank Herbert",
     "page_count": "896 pages",
     "title": "Dune",
     "price": "$10.99",
     "short_summary": "Set on the desert planet Arrakis, Dune is the story of Paul Atreides—who would become known as Muad'Dib—and of a great family's ambition to bring to fruition mankind's most ancient and unattainable dream."
    },
    {
     "cover": "../bookCovers/1984.jpg",
     "author": "George Orwell",
     "page_count": "328 pages",
     "title": "1984",
     "price": "$6.99",
     "short_summary": "Winston Smith works for the Ministry of Truth in London, chief city of Airstrip One. Big Brother stares out from every poster, the Thought Police uncover every act of betrayal. When Winston finds love with Julia, he discovers that life does not have to be dull and deadening, and awakens to new possibilities. Despite the police helicopters that hover and circle overhead, Winston and Julia begin to question the Party; they are drawn towards conspiracy. Yet Big Brother will not tolerate dissent - even in the mind. For those with original thoughts they invented Room 101. . ."
    },
    {
     "cover": "../bookCovers/2001.jpg",
     "author": "Arthur C. Clarke",
     "page_count": "256 pages",
     "title": "2001: a Space Odyssey",
     "price": "$13.50",
     "short_summary": "From the savannas of Africa at the dawn of mankind to the rings of Saturn as man ventures to the outer rim of our solar system, 2001: A Space Odyssey is a journey unlike any other."
    }
 ];
 
// using for loop to loop through array
for(let i = 0; i < Books.length; i++){
    // cloning default box class so we can duplicate it for as many books we have
    var newBookBox = default_box.cloneNode(true);
    // changing the inner text of all the ids so we have a new book in a clone div of the original
    // show my book boxes
    newBookBox.style.display = "flex";
    newBookBox.querySelector("#cover").src = Books[i].cover;
    newBookBox.querySelector("#author").innerText = Books[i].author;
    newBookBox.querySelector("#page_count").innerText = Books[i].page_count;
    newBookBox.querySelector("#title").innerText = Books[i].title;
    newBookBox.querySelector("#price").innerText = Books[i].price;
    newBookBox.querySelector("#short_summary").innerText = Books[i].short_summary;
    // appending new book box to main div
    main.append(newBookBox);
};




