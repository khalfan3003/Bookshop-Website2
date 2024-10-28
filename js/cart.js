// Loading variables from the DOM
bookSaleBox = document.querySelector(".booksale"); // Container for individual book sale boxes
mainBox = document.querySelector(".main"); // Main container for book sale boxes
noBook = document.querySelector(".no_book"); // Placeholder for when there are no books in the cart
logoBack = document.querySelector("#tiny_logo"); // Logo used for navigation
footBasket = document.querySelector(".foot"); // Footer containing cart details
totalPrice = document.querySelector(".total"); // Total price of all items in the cart
checkoutButton = document.querySelector(".proceed"); // Button to proceed to checkout

// Check if any books have been saved in localStorage and fetch them
window.addEventListener("DOMContentLoaded", function(){
    selected = JSON.parse(localStorage.getItem("Selected")); // Retrieve selected books from localStorage

    // Checking if no book has been added to the cart
    if (selected === null || selected.length == 0){
        noBook.style.display = "block"; // Display the placeholder
        footBasket.style.display = "none"; // Hide the footer containing cart details
    } else {
        // If there are books, clone the book sale box for each book and display them
        for (i = 0; i < selected.length; i++){
            var newBookSaleBoxes = bookSaleBox.cloneNode(true);
            newBookSaleBoxes.style.display = "flex"; // Make the cloned box visible
            newBookSaleBoxes.querySelector("#bookface").src = selected[i][0]; // Set book cover image
            newBookSaleBoxes.querySelector("#author").innerText = selected[i][1]; // Set author name
            newBookSaleBoxes.querySelector("#name").innerText = selected[i][2]; // Set book title
            newBookSaleBoxes.querySelector("#price").innerText = selected[i][3]; // Set book price
            // Add each book to the cart main div
            mainBox.append(newBookSaleBoxes);
        }
    }
});

// Event listener to handle book removal from the cart
window.addEventListener("click", function(e){
    // If user clicks on the remove icon
    if (e.target.id == "remove"){
        selected = JSON.parse(localStorage.getItem("Selected"));
        const cartBookBox = e.target.parentElement.parentElement.parentElement;

        // Iterate through selected books to find the one being removed
        for(j = 0; j < selected.length; j++){
            if (cartBookBox.querySelector("#name").innerText == selected[j][2]){
                cartBookBox.style.display = "none"; // Hide the book sale box
                selected.splice(j,1); // Remove the book from the selected books array

                // Update local storage after deleting a book from the cart
                update = JSON.stringify(selected);
                localStorage.setItem("Selected", update);
            }
        }
        // If all books have been deleted, display placeholder and hide footer
        if (selected.length === 0){
            noBook.style.display = "block";
            footBasket.style.display = "none";
        }
    }
});

// Event listener to handle book price update based on quantity change through clicking
window.addEventListener("click", function(e){
    if (e.target.id === "number"){
        selected = JSON.parse(localStorage.getItem("Selected"));
        bigBasket = e.target.parentElement.parentElement;
        currentPrice = bigBasket.querySelector("#price");
        bookName = bigBasket.querySelector("#name").innerText;
        quantity = e.target.value;
        for(j = 0; j < selected.length; j++){
            if (selected[j][2] == bookName){
                priceValue = selected[j][3];
                price = Number(priceValue.slice(1));
                newPrice = quantity * price;
                currentPrice.innerText = "$ " + newPrice.toFixed(2);
            }   
        }
    }
});

// Event listener to handle book price update based on quantity change directly
window.addEventListener("change", function(e){
    if (e.target.id === "number"){
        selected = JSON.parse(localStorage.getItem("Selected"));
        bigBasket = e.target.parentElement.parentElement;
        currentPrice = bigBasket.querySelector("#price");
        bookName = bigBasket.querySelector("#name").innerText;
        quantity = e.target.value;
        for(j = 0; j < selected.length; j++){
            if (selected[j][2] == bookName){
                priceValue = selected[j][3];
                price = Number(priceValue.slice(1));
                newPrice = quantity * price;
                currentPrice.innerText = "$ " + newPrice.toFixed(2);
            }
        }
    }
});

// Function to update total price on cart page load or book quantity change
function updateTotalPrice() {
    const selected = JSON.parse(localStorage.getItem("Selected"));
    if (selected.length !== 0){
        let sum = 0;
        bookBaskets = document.getElementsByClassName("booksale");
        for( i = 0; i<bookBaskets.length; i++){
            if (bookBaskets[i].style.display === "flex"){
                let price = Number(bookBaskets[i].querySelector("#price").innerText.slice(1));
                sum += price;
                total ="$ "+ sum.toFixed(2);
            }
        }
        totalPrice.innerText = total;
    }
}

// Update total price when the DOM is loaded
window.addEventListener("DOMContentLoaded", updateTotalPrice);

// Update total price when book quantity is changed
window.addEventListener("change", updateTotalPrice);

// Update total price when a book is removed
window.addEventListener("click", updateTotalPrice);

// Event listener for checkout button click
checkoutButton.addEventListener("click", function(){
    // Display alert with total cost upon checkout
    const totalCost = totalPrice.innerText;
    window.alert(`Your books have been Purchased! Total cost was ${totalCost}`);
    
    // Add purchase details
    bookBaskets = document.querySelectorAll(".booksale");
    purchaseDetails = [];
    const dateTime = new Date();
    for (i = 0;i < bookBaskets.length; i++){
        if (bookBaskets[i].style.display === "flex"){
            nameTitle = bookBaskets[i].querySelector("#name").innerText;
            titleUnit = bookBaskets[i].querySelector("#number").value;
            titleprice = bookBaskets[i].querySelector("#price").innerText;
            purchaseDetails.push([dateTime,nameTitle,titleUnit,titleprice]);
        }
    }
    // Update local storage with purchase details
    if (localStorage.getItem("Purchased")){
        alreadyPurchased = JSON.parse(localStorage.getItem("Purchased"));
        for (i = 0; i < purchaseDetails.length; i++){
            alreadyPurchased.push(purchaseDetails[i]);
            // Update local Storage
            localStorage.setItem("Purchased",JSON.stringify(alreadyPurchased));
        }
    } else {
        // Save to local storage if it's the first purchase
        localStorage.setItem("Purchased",JSON.stringify(purchaseDetails));
    }

    // Clear the screen after purchase
    bookBoxes = document.getElementsByClassName("booksale");
    for (i = 0; i < bookBoxes.length; i++){
        bookBoxes[i].style.display = "none";
    }
    // Empty local storage
    clearCart = JSON.parse(localStorage.getItem("Selected"));
    clearCart.length = 0;
    localStorage.setItem("Selected",JSON.stringify(clearCart));
    // Update screen
    noBook.style.display = "block";
    footBasket.style.display = "none"; 
});

// Event listener to navigate back to the home page when the tiny logo is clicked
logoBack.addEventListener("click", function(){
    window.location.href = "MainProject.html"; // Redirect to home page
});
