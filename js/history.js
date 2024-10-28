// making main div a variable
let main = document.querySelector(".main")
//fetching default box class and passing it to variable
let default_box = document.querySelector(".book_box");

// putting all the variables we wish to change in an array
var Books = [
    {
     "cover": "../bookCovers/diary_young_girl.jpg",
     "author": "Anne Frank",
     "page_count": "714 pages",
     "title": "Anne Frank: The Diary of a Young Girl",
     "price": "$11.50",
     "short_summary": "In 1942, as Nazis occupied Holland, a thirteen-year-old Jewish girl and her family fled their home in Amsterdam and went into hiding. For the next two years, until their whereabouts were betrayed to the Gestapo, they and another family lived cloistered in the secret upstairs rooms of an old office building. Cut off from the outside world, they faced hunger, boredom, the constant cruelties of living in confined quarters, and the ever-present threat of discovery and death."
    },
    {
     "cover": "../bookCovers/john_adams.jpg",
     "author": "David McCullough",
     "page_count": "752 pages",
     "title": "John Adams",
     "price": "$12.59",
     "short_summary": "In this powerful, epic biography, David McCullough unfolds the adventurous life journey of John Adams, the brilliant, fiercely independent, often irascible, always honest Yankee patriot who spared nothing in his zeal for the American Revolution; who rose to become the second president of the United States and saved the country from blundering into an unnecessary war; who was learned beyond all but a few and regarded by some as “out of his senses”; and whose marriage to the wise and valiant Abigail Adams is one of the moving love stories in American history."
    },
    {
     "cover": "../bookCovers/guns_august.jpg",
     "author": "Barbara W. Tuchman",
     "page_count": "608 pages",
     "title": "The Guns of August",
     "price": "$8.99",
     "short_summary": "In this landmark account, renowned historian Barbara W. Tuchman re-creates the first month of World War I: thirty days in the summer of 1914 that determined the course of the conflict, the century, and ultimately our present world. Beginning with the funeral of Edward VII, Tuchman traces each step that led to the inevitable clash. And inevitable it was, with all sides plotting their war for a generation. Dizzyingly comprehensive and spectacularly portrayed with her famous talent for evoking the characters of the war's key players, Tuchman's magnum opus is a classic for the ages."
    },
    {
     "cover": "../bookCovers/short_history.jpg",
     "author": "Bill Bryson",
     "page_count": "624 pages",
     "title": "A Short History of Nearly Everything",
     "price": "$4.50",
     "short_summary": "Bill Bryson describes himself as a reluctant traveller, but even when he stays safely at home he can't contain his curiosity about the world around him. A Short History of Nearly Everything is his quest to understand everything that has happened from the Big Bang to the rise of civilization - how we got from there, being nothing at all, to here, being us."
    },
    {
     "cover": "../bookCovers/battle_cry.jpg",
     "author": "John McPherson",
     "page_count": "904 pages",
     "title": "Battle Cry of Freedom: The Civil War Era",
     "price": "$11.99",
     "short_summary": "James McPherson's fast-paced narrative fully integrates the political, social, and military events that crowded the two decades from the outbreak of one war in Mexico to the ending of another at Appomattox. Packed with drama and analytical insight, the book vividly recounts the momentous episodes that preceded the Civil War--the Dred Scott decision, the Lincoln-Douglas debates, John Brown's raid on Harper's Ferry--and then moves into a masterful chronicle of the war itself--the battles, the strategic maneuvering on both sides, the politics, and the personalities. Particularly notable are McPherson's new views on such matters as the slavery expansion issue in the 1850s, the origins of the Republican Party, the causes of secession, internal dissent and anti-war opposition in the North and the South, and the reasons for the Union's victory."
    },
    {
     "cover": "../bookCovers/sapiens.jpg",
     "author": "Yuval Noah Harari",
     "page_count": "443 pages",
     "title": "Sapiens: A Brief History of Humankind",
     "price": "$11.55",
     "short_summary": "Sapiens explores the history of humankind, from the emergence of Homo sapiens in the Stone Age to the present day. Drawing on insights from biology, anthropology, paleontology, and economics, Yuval Noah Harari offers a thought-provoking perspective on the development of human societies and civilizations."
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




