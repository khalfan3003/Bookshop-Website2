// making main div a variable
let main = document.querySelector(".main")
//fetching default box class and passing it to variable
let default_box = document.querySelector(".book_box");

// putting all the variables we wish to change in an array
var Books = [
    {
     "cover": "../bookCovers/a_game_of_thrones.jpg",
     "author": "George R.R. Martin",
     "page_count": "694 pages",
     "title": "A Game of Thrones",
     "price": "$11.71",
     "short_summary": "Winter is coming. Such is the stern motto of House Stark, the northernmost of the fiefdoms that owe allegiance to King Robert Baratheon in far-off King’s Landing. There Eddard Stark of Winterfell rules in Robert’s name. There his family dwells in peace and comfort: his proud wife, Catelyn; his sons Robb, Brandon, and Rickon; his daughters Sansa and Arya; and his bastard son, Jon Snow. Far to the north, behind the towering Wall, lie savage Wildings and worse—unnatural things relegated to myth during the centuries-long summer, but proving all too real and all too deadly in the turning of the season."
    },
    {
     "cover": "../bookCovers/fellowship_ring.jpg",
     "author": "J.R. Tolkien",
     "page_count": "423 pages",
     "title": "The Fellowship of the Ring",
     "price": "$19.47",
     "short_summary": "Sauron, the Dark Lord, has gathered to him all the Rings of Power – the means by which he intends to rule Middle-earth. All he lacks in his plans for dominion is the One Ring – the ring that rules them all – which has fallen into the hands of the hobbit, Bilbo Baggins. In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as his elderly cousin Bilbo entrusts the Ring to his care. Frodo must leave his home and make a perilous journey across Middle-earth to the Cracks of Doom, there to destroy the Ring and foil the Dark Lord in his evil purpose."
    },
    {
     "cover": "../bookCovers/lion_witch.jpg",
     "author": "C.S. Lewis",
     "page_count": "208 pages",
     "title": "The Lion, the Witch and the Wardrobe",
     "price": "$7.64",
     "short_summary": "Four adventurous siblings—Peter, Susan, Edmund, and Lucy Pevensie—step through a wardrobe door and into the land of Narnia, a land frozen in eternal winter and enslaved by the power of the White Witch. But when almost all hope is lost, the return of the Great Lion, Aslan, signals a great change . . . and a great sacrifice."
    },
    {
     "cover": "../bookCovers/harry_potter.jpg",
     "author": "J.K. Rowling",
     "page_count": "320 pages",
     "title": "Harry Potter and the Sorcerer's Stone",
     "price": "$7.99",
     "short_summary": "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!"
    },
    {
     "cover": "../bookCovers/mistborn.jpg",
     "author": "Brandon Sanderson",
     "page_count": "672 pages",
     "title": "Mistborn: The Final Empire",
     "price": "$8.99",
     "short_summary": "For a thousand years the ash fell and no flowers bloomed. For a thousand years the Skaa slaved in misery and lived in fear. For a thousand years the Lord Ruler, the 'Sliver of Infinity,' reigned with absolute power and ultimate terror, divinely invincible. Then, when hope was so long lost that not even its memory remained, a terribly scarred, heart-broken half-Skaa rediscovered it in the depths of the Lord Ruler's most hellish prison. Kelsier 'snapped' and found in himself the powers of a Mistborn. A brilliant thief and natural leader, he turned his talents to the ultimate caper, with the Lord Ruler himself as the mark."
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




