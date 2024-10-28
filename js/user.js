//loading variables to enable use switch categories
favoriteContent = document.querySelector(".favoriteContent");
purchasedContent = document.querySelector(".purchasedContent");
purchasedBook = document.querySelector(".purchasedBook");
favoriteBook = document.querySelector(".favoriteBook");
greeting = document.querySelector("#greeting")

// to keep user from returning to this page if user logouts
window.history.forward();
 


window.addEventListener("DOMContentLoaded",function(){
    currentUser = JSON.parse(localStorage.getItem("CurrentUser"));
    currenthour = new Date().getHours();
    
    time = ""
    // checking hour to differentiate between morning, afternoon and evening
    if (currenthour <= 12){
        time = "Morning";
    } else if (currenthour <= 17){
        time = "Afternoon";
    } else {
        time = "Evening";
    }
    greeting.innerText = "Good " + time + " " + currentUser[0]; 
})
// switching menu between favorites and purchased by toggling their divs display on/off
window.addEventListener("click", function(e){
    if (e.target.id === "purchasedInActive"){
        let favorites = document.querySelector("#myFavorites");
        e.target.id = "purchased";
        favorites.id = "myFavoritesInActive";
        favoriteContent.style.display = "none";
        purchasedContent.style.display = "flex";
        
    } 
    if (e.target.id === "myFavoritesInActive"){
        let purchased = document.querySelector("#purchased");
        e.target.id = "myFavorites";
        purchased.id = "purchasedInActive";
        favoriteContent.style.display = "flex";
        purchasedContent.style.display = "none";

    }
})

// adding books with purchased and favorite books on windows load
window.addEventListener("DOMContentLoaded",function(){
    // adding favorite books from storage
    favoriteBooks = JSON.parse(localStorage.getItem("Favorites"));
    for (i= 0; i < favoriteBooks.length; i++){
        favoriteBookBox = favoriteBook.cloneNode(true);
        favoriteBookBox.style.display = "flex";
        favoriteBookBox.querySelector("#bookImage").src = favoriteBooks[i][0];
        favoriteBookBox.querySelector("#bookAuthor").innerText = favoriteBooks[i][1];
        favoriteBookBox.querySelector("#bookName").innerText = favoriteBooks[i][2];
        favoriteContent.insertBefore(favoriteBookBox,favoriteContent.children[0]);
    }

     // adding purchased books from storage
    purchasedBooks = JSON.parse(localStorage.getItem("Purchased"));
    for (i= 0; i < purchasedBooks.length; i++){
        purchasedBookBox = purchasedBook.cloneNode(true);
        purchasedBookBox.style.display = "flex";
        purchasedBookBox.querySelector("#dateTime").innerText = new Date(purchasedBooks[i][0]);
        purchasedBookBox.querySelector("#title").innerText = purchasedBooks[i][1];
        purchasedBookBox.querySelector("#quantityBought").innerText = purchasedBooks[i][2];
        purchasedBookBox.querySelector("#bookprice").innerText = purchasedBooks[i][3];
        purchasedContent.insertBefore(purchasedBookBox,purchasedContent.children[0]);
    }

})



// to remove a book for the favorites list if user wants to
window.addEventListener("click",function(e){
    if (e.target.id === "checkFavorite"){
        favoriteButton = e.target;
        favoriteBookDiv = favoriteButton.parentElement;
        favoriteBookName = favoriteBookDiv.querySelector("#bookName").innerText;
        favoriteBooksStore = JSON.parse(localStorage.getItem("Favorites"));

        for (i = 0; i < favoriteBooksStore.length; i++){
            if( favoriteBooksStore[i][2]  === favoriteBookName){
                console.log(favoriteBooksStore)
                favoriteBooksStore.splice(i,1);
            }
        }
        localStorage.setItem("Favorites", JSON.stringify(favoriteBooksStore));
        favoriteBookDiv.style.display = "none";
    }
})

// to change profile picture of user
// fetching variable
const photoChanger = document.querySelector("#photochanger");
const profileImage = document.querySelector("#profileImage");
const changePhoto = document.querySelector("#changePhoto");

if (localStorage.getItem("ProfilePicture")){
    const profilePicture = localStorage.getItem("ProfilePicture");
    profileImage.src = profilePicture;
}

// if users clicks change image
changePhoto.addEventListener("click",function(){
    changePhoto.style.display = "none";
    photoChanger.style.display = "block";
})

// if user wishes to change profile image
photoChanger.addEventListener("change",function(e){

    file = e.target.files[0];
    // using the FileReader API
    reader = new FileReader();
    // when we load file reader
    reader.onload = function(e) {
        // change img source to new image source
        profileImage.src = e.target.result;
        // save new image source in local storage
        localStorage.setItem("ProfilePicture", e.target.result);
    }
    // reader object parsing the new image file to read as image source
    reader.readAsDataURL(file);

    changePhoto.style.display = "block";
    photoChanger.style.display = "none";

})



// to go back to register
// fetching variables
const logOut = document.querySelector("#logout");

logOut.addEventListener("click",function(){
    window.location.href = "../index.html";
    
})