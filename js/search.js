// Function to generate book elements based on data
function generateBookElements() {
    // Get the container where book elements will be appended
    var container = document.getElementById('bookContainer');
    // Clear existing content inside the container
    container.innerHTML = '';

    // Loop through each book in the booksData array
    booksData.forEach(function(book) {
        // Create a new div element for the book
        var bookElement = document.createElement('div');
        // Add the 'book' class to the div element
        bookElement.classList.add('book');
        // Set the inner HTML of the book element
        bookElement.innerHTML = `
            <div class="details">
                <h2 class="title">${book.title}</h2>
                <p class="author">${book.author}</p>
                <p class="page_count">${book.page_count}</p>
                <p class="price">${book.price}</p>
                <img class="cover-image" src="${book.cover}" alt="Book Cover">
            </div>
        `;
        // Append the book element to the container
        container.appendChild(bookElement);
    });
}

// Function to perform book search
function searchBooks() {
    // Get the search query from the input field and convert it to lowercase
    var query = document.getElementById('searchInput').value.toLowerCase();
    // Get all book elements
    var books = document.getElementsByClassName('book');

    // Loop through each book element
    Array.from(books).forEach(function(book) {
        // Get the title and author of the book and convert them to lowercase
        var title = book.querySelector('.title').innerText.toLowerCase();
        var author = book.querySelector('.author').innerText.toLowerCase();
        // Check if the title or author contains the search query
        if (title.includes(query) || author.includes(query)) {
            // If the book matches the search query, display it
            book.style.display = '';
        } else {
            // If the book does not match the search query, hide it
            book.style.display = 'none';
        }
    });
}

// Load books data and generate book elements when the page loads
window.onload = function() {
    // Generate book elements
    generateBookElements();
    // Listen for the input event on the search input field and perform book search
    document.getElementById('searchInput').addEventListener('input', searchBooks);
};








