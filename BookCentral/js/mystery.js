// making main div a variable
let main = document.querySelector(".main")
//fetching default box class and passing it to variable
let default_box = document.querySelector(".book_box");

// putting all the variables we wish to change in an array
var mysteryBooks = [
    {
    "cover":"../bookCovers/rebecca.jpg",
    "author":"Daphne du Maurier",
    "page_count":"448 pages",
    "title":"Rebecca",price:"$15.70",
    "short_summary":'Rebecca is a 1938 Gothic novel written by English author Daphne du Maurier. The novel depicts an unnamed young woman who impetuously marries a wealthy widower, before discovering that both he and his household are haunted by the memory of his late first wife, Rebecca. A bestseller which has never gone out of print, Rebecca sold 2.8 million copies between its publication in 1938 and 1965. It has been adapted numerous times for stage and screen, including a 1939 play by du Maurier herself, the film Rebecca (1940), directed by Alfred Hitchcock, which won the Academy Award for Best Picture, and the 2020 remake directed by Ben Wheatley for Netflix. The story is also a successful musical production.The novel is remembered[2] for the character Mrs Danvers, the West Country estate Manderley, and its opening line: "Last night, I dreamt I went to Manderley again."'
    },
    {
      "cover": "../bookCovers/maltese_falcon.jpg",
      "author": "Dashiell Hammett",
      "page_count": "217 pages",
      "title": "The Maltese Falcon",
      "price": "$12.99",
      "short_summary": "The Maltese Falcon is a classic detective novel featuring private investigator Sam Spade. Spade becomes embroiled in a complex web of deception and murder as he searches for a priceless statuette, the Maltese Falcon, in 1920s San Francisco."
    },
    {
      "cover": "../bookCovers/gone_girl.jpg",
      "author": "Gillian Flynn",
      "page_count": "419 pages",
      "title": "Gone Girl",
      "price": "$14.95",
      "short_summary": "On their fifth wedding anniversary, Amy Dunne disappears, leaving behind a series of clues that incriminate her husband, Nick. As the media frenzy escalates, Nick's innocence comes into question, and the true nature of their marriage is revealed."
    },
    {
      "cover": "../bookCovers/hound_baskervilles.jpg",
      "author": "Arthur Conan Doyle",
      "page_count": "190 pages",
      "title": "The Hound of the Baskervilles",
      "price": "$8.99",
      "short_summary": "Sherlock Holmes and Dr. Watson are called to investigate the mysterious death of Sir Charles Baskerville, whose demise is rumored to be the result of a curse haunting the Baskerville family. As they delve into the case, they encounter supernatural elements and sinister characters."
    },
    {
      "cover": "../bookCovers/in_woods.jpg",
      "author": "Tana French",
      "page_count": "429 pages",
      "title": "In the Woods",
      "price": "$13.50",
      "short_summary": "Detective Rob Ryan investigates the murder of a young girl in the same woods where he experienced a traumatic event as a child. As he delves into the case, he grapples with his own past and uncovers shocking truths about the community he thought he knew."
    },
    {
      "cover": "../bookCovers/big_little_lies.jpg",
      "author": "Liane Moriarty",
      "page_count": "460 pages",
      "title": "Big Little Lies",
      "price": "$11.99",
      "short_summary": "Set in a tranquil seaside town, Big Little Lies follows the lives of three women whose seemingly perfect lives unravel amid secrets, lies, and betrayal. When a murder occurs during a school trivia night, the truth about their relationships comes to light."
    },
    {
      "cover": "../bookCovers/ladies_detective_agency.jpg",
      "author": "Alexander McCall Smith",
      "page_count": "235 pages",
      "title": "The No. 1 Ladies' Detective Agency",
      "price": "$10.50",
      "short_summary": "Precious Ramotswe, Botswana's first female detective, solves mysteries with wit and wisdom in this charming series debut. From missing husbands to suspicious neighbors, Precious navigates the complexities of life and crime in her beloved homeland."
    },
    {
      "cover": "../bookCovers/secret_history.jpg",
      "author": "Donna Tartt",
      "page_count": "559 pages",
      "title": "The Secret History",
      "price": "$16.99",
      "short_summary": "When a group of elite college students commits a murder, they grapple with the consequences of their actions and the dark secrets that bind them together. Told through the eyes of their enigmatic classmate, Richard Papen, The Secret History is a haunting exploration of guilt, obsession, and the allure of power."
    },
    {
      "cover": "../bookCovers/murder_orient_express.jpg",
      "author": "Agatha Christie",
      "page_count": "274 pages",
      "title": "Murder on the Orient Express",
      "price": "$7.99",
      "short_summary": "Renowned detective Hercule Poirot is aboard the luxurious Orient Express when a wealthy American passenger is found murdered. With a train full of suspects and an alibi for each one, Poirot must use his unparalleled deductive skills to solve the perplexing case."
    },
    {
      "cover": "../bookCovers/cuckoos_calling.jpg",
      "author": "Robert Galbraith",
      "page_count": "455 pages",
      "title": "The Cuckoo's Calling",
      "price": "$14.75",
      "short_summary": "Private investigator Cormoran Strike is hired to investigate the supposed suicide of supermodel Lula Landry. As he delves into the glamorous and treacherous world of high fashion, Strike uncovers a web of lies, betrayal, and hidden motives."
    },
    {
      "cover": "../bookCovers/dark_places.jpg",
      "author": "Gillian Flynn",
      "page_count": "349 pages",
      "title": "Dark Places",
      "price": "$12.99",
      "short_summary": "Libby Day was just seven years old when her mother and two sisters were brutally murdered in their rural Kansas home. Twenty-five years later, Libby, who survived the massacre, is forced to confront her traumatic past as she investigates what really happened that fateful night."
    },
    {
      "cover": "../bookCovers/da_vinci_code.jpg",
      "author": "Dan Brown",
      "page_count": "689 pages",
      "title": "The Da Vinci Code",
      "price": "$9.99",
      "short_summary": "Harvard symbologist Robert Langdon is thrust into a perilous quest to unravel a centuries-old mystery surrounding the death of a curator at the Louvre. With the help of cryptologist Sophie Neveu, Langdon follows a trail of clues that lead to dark secrets hidden within the works of Leonardo da Vinci."
    }
];
 
// using for loop to loop through array
for(let i = 0; i < mysteryBooks.length; i++){
    // cloning default box class so we can duplicate it for as many books we have
    var newBookBox = default_box.cloneNode(true);
    // changing the inner text of all the ids so we have a new book in a clone div of the original
    // show my box boxes
    newBookBox.style.display = "flex";
    newBookBox.querySelector("#cover").src = mysteryBooks[i].cover;
    newBookBox.querySelector("#author").innerText = mysteryBooks[i].author;
    newBookBox.querySelector("#page_count").innerText = mysteryBooks[i].page_count;
    newBookBox.querySelector("#title").innerText = mysteryBooks[i].title;
    newBookBox.querySelector("#price").innerText = mysteryBooks[i].price;
    newBookBox.querySelector("#short_summary").innerText = mysteryBooks[i].short_summary;
    // appending new book box to main div
    main.append(newBookBox);
}




