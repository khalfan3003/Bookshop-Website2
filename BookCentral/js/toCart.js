
// loading variables
topBagButton = document.querySelector("#genre_top_bag_btn");
topUserButton = document.querySelector("#genre_user_btn");
topBag = document.querySelector("#genre_shopping_bag");
allBookBoxes = document.getElementsByClassName("book_box");
allBookBoxesArray = Array.from(allBookBoxes);



// checking if book  is already in cart  and adding ligthgreen color to it
window.addEventListener("DOMContentLoaded", function(){
    if (JSON.parse(localStorage.getItem("Selected")) !== null){
        selectedTitles = JSON.parse(localStorage.getItem("Selected"));

        for (i=0;i<allBookBoxes.length; i++){
            singleBoxes = allBookBoxes[i];
            singleBoxBook = singleBoxes.querySelector("#title");
            bookNames = singleBoxBook.innerText;
            for (j = 0; j < selectedTitles.length; j++){
                selectedBooknames = selectedTitles[j][2];
                if(bookNames === selectedBooknames){
                    bigBookBox = singleBoxBook.parentElement.parentElement.parentElement;
                    bigBookBox.querySelector("#bag").style.color = "lightgreen";
                }
            }
        }    
    }
})


// to go to account or cart page
// loading variables
topBagButton.addEventListener("click",function() {
        window.location.href = "cart.html";
    });

topUserButton.addEventListener("click", function(){
  window.location.href = "user.html";
})


// cart details, to store details to be sent to to cart page
cartDetails = [];
// to add book to favorites and cart
window.addEventListener("click", function(e){
    
    // to add to cart we load some details to cart_details array 
    if (e.target.id == "bag"){

        // to check and toggle color if book add to cart is selected
        if (e.target.style.color != "lightgreen"){
            e.target.style.color = "lightgreen";

            // fetching important from the book, by navigating to the main div basket holding the book details
            big_div = e.target.parentElement.parentElement.parentElement.parentElement;
            const cover = big_div.querySelector("#cover").src;
            const author = big_div.querySelector("#author").innerText;
            const title = big_div.querySelector("#title").innerText;
            const price = big_div.querySelector("#price").innerText;
            details = [`${cover}`, author, title, price];

            // checking if cart is empty, if not, we only update it
            if (localStorage.getItem("Selected") !== null){
                currentSelected = JSON.parse(localStorage.getItem("Selected"));
                currentSelected.push(details);
                updatedSelected = JSON.stringify(currentSelected);
                localStorage.setItem("Selected",updatedSelected);

            // if cart is empty, we add new items through cart details array
            } else {
                // appending this details to cart details and saving to localStorage
                cartDetails.push(details);
                selected = JSON.stringify(cartDetails); // since we can only store strings in local storage
                localStorage.setItem("Selected", selected);
             }

            // to toggle animation of the top bag bag 
            topBag.id = "bag_notify";
            this.setTimeout(function(){
                topBag.id = "genre_shopping_bag";
            },1000);

        // if book is already selected    
        } else {
            e.target.style.color = "rgb(226, 223, 223)";

            //getting the div basket of the particlar book
            big_div = e.target.parentElement.parentElement.parentElement.parentElement;
            bookTitle = big_div.querySelector("#title").innerText;
            //to remove the book from selected array
            //lets download the array "Selected" remove the book and update "Selected"
            toUpdate = JSON.parse(localStorage.getItem("Selected"));

            for (i = 0; i < toUpdate.length; i++){
                if (toUpdate[i][2] === bookTitle){
                    toUpdate.splice(i,1);
                }  
            }
            ourUpdate = JSON.stringify(toUpdate);
            //updating local storafe after unticking book
            localStorage.setItem("Selected", ourUpdate);

        }
    }
})

//checking books already added to favorite
window.addEventListener("DOMContentLoaded",function(){
    if (localStorage.getItem("Favorites")){
        addedFavorites = JSON.parse(localStorage.getItem("Favorites"));
        // loading book divs
        bookBoxes = document.getElementsByClassName("book_box");
        for (i = 0; i < bookBoxes.length; i++){
            aBookName = bookBoxes[i].querySelector("#title").innerText;
            // if it does, we make sure the color is light red
            for (j = 0; j < addedFavorites.length; j++){
                if (aBookName === addedFavorites[j][2]){
                  bookBoxes[i].querySelector("#favorite").style.color = "rgb(255, 131, 131)"  
                }
            }
        }
    }
    console.log(this.localStorage.getItem("Favorites"))
})

// to add book to favorites
window.addEventListener("click",function(e){
    if (e.target.id === "favorite"){
        const favoriteButton = e.target;
        // switching the colors
        if (favoriteButton.style.color != "rgb(255, 131, 131)") {
            favoriteButton.style.color = "rgb(255, 131, 131)";

            favoriteDetails = [];
            //fectching infomartion to send to favorite page
            bookBasket = favoriteButton.parentElement.parentElement.parentElement.parentElement;
            bookSrc = bookBasket.querySelector("#cover").src;
            bookAuthor = bookBasket.querySelector("#author").innerText;
            bookName = bookBasket.querySelector("#title").innerText;
            details = [bookSrc,bookAuthor,bookName]

            // checking if any book has been added to favorites before
            if (localStorage.getItem("Favorites")){
                alreadyFavorite= JSON.parse(localStorage.getItem("Favorites"));
                alreadyFavorite.push(details);
                localStorage.setItem("Favorites",JSON.stringify(alreadyFavorite));
            } else {
                favoriteDetails.push(details);
                localStorage.setItem("Favorites",JSON.stringify(favoriteDetails));
            }
        // suppose book is already added to favorite 
        } else {
            favoriteButton.style.color = "rgb(226, 223, 223)";
            // removing book from local storage favorites 
            bookBasket = favoriteButton.parentElement.parentElement.parentElement.parentElement;
            bookName = bookBasket.querySelector("#title").innerText;

            alreadyFavorites = JSON.parse(localStorage.getItem("Favorites"));

            for (i = 0; i < alreadyFavorites.length; i++){
                if (alreadyFavorites[i][2] ===  bookName){
                    alreadyFavorites.splice(i,1)
                }
                
            }
            localStorage.setItem("Favorites",JSON.stringify(alreadyFavorites));            
        }
    }
})


// to go back to main page when click on little logo
smallLogo = document.querySelector("#small_logo");

smallLogo.addEventListener("click",function(){
    window.location.href = "../HTML/MainProject.html";
})