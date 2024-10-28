// Variables for DOM elements
registerButton = document.querySelector("#register"); // Register button
registerName = document.querySelector("#registerName"); // Username input field
registerPass = document.querySelector("#registerPass"); // Password input field
noInfo = document.querySelector("#noInfo"); // Error message element

// Array to store user details
users = []

// Event listener for registering a new user
registerButton.addEventListener("click",function(e){
    // Prevent form resubmission to navigate to login page
    e.preventDefault();

    // Check if username and password are provided
    if (registerName.value !== "" && registerPass.value !== ""){
        username = registerName.value;
        password = registerPass.value;
        userDetails = [username, password];
        // Check if there are other users
        if (localStorage.getItem("Users")){
            currentUsers = JSON.parse(localStorage.getItem("Users"));
            currentUsers.push(userDetails);
            localStorage.setItem("Users",JSON.stringify(currentUsers));
        } else {
            users.push(userDetails);
            localStorage.setItem("Users",JSON.stringify(users))
        }
        window.location.href = "HTML/login.html"; // Redirect to login page
    } else {
        noInfo.style.display = "block"; // Display error message if username or password is missing
        window.setTimeout(function(){
            noInfo.style.display = "none"; // Hide error message after 3 seconds
        }, 3000)
    }
})
