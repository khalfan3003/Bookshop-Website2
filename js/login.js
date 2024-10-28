// Variables for DOM elements
loginName = document.querySelector("#loginName"); // Username input field
loginPass = document.querySelector("#loginPass"); // Password input field
loginButton = document.querySelector("#login"); // Login button
noUser = document.querySelector("#noUser"); // Error message for missing username
noPass = document.querySelector("#noPass"); // Error message for incorrect password

// Event listener for login button click
loginButton.addEventListener("click",function(e){
    // Prevent form resubmission to navigate to the main page
    e.preventDefault();
    // Get username and password from input fields
    username = loginName.value;
    password = loginPass.value;

    // Check if users exist in localStorage
    if(localStorage.getItem("Users")){
        // Retrieve users from localStorage
        users = JSON.parse(localStorage.getItem("Users"));

        // Check if username and password match any user in storage
        correctUser = users.some(user => user[0] === username && user[1] === password);

        // If correct username and password, set user as current user and navigate to main page
        if (correctUser === true){
            localStorage.setItem("CurrentUser",JSON.stringify([username,password])); // Set current user
            window.location.href = "MainProject.html"; // Navigate to main page
        } else {
            noPass.style.display = "block"; // Display error message for incorrect password
            // Hide error message after 3 seconds
            window.setTimeout(function(){
                noPass.style.display = "none";
            },3000);
        }
    }
});
