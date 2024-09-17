// Check if the clicked element has the id "favorite"
if (e.target.id ==  "favorite") {
    // Check if the current color of the element is not already set to light red
    if (e.target.style.color != "rgb(255, 131, 131)") {
        // Change the color of the element to light red
        e.target.style.color = "rgb(255, 131, 131)";
    } else {
        // Change the color of the element to light gray
        e.target.style.color = "rgb(226, 223, 223)";
    }
}
