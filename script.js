const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("links")[0]
function navbarHandler(){
navbarLinks.classList.toggle("active");
if (navbarLinks.classList.contains("active")) {
    toggleButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
} else {
    toggleButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
}
}



function handlePopup(card) {
// Get the elements in the popup
var popupImage = document.getElementById("popup-image");
var popupTitle = document.getElementById("popup-title");
var popupAuthor = document.getElementById("popup-author");
var popupDescription = document.getElementById("popup-description");

// Get the details from the clicked card
var bookImage = card.querySelector(".book-image img");
var bookTitle = card.querySelector(".book-title-author h3");
var bookAuthor = card.querySelector(".book-title-author h5");
var bookDescription = card.querySelector(".short-desc p");

// Set the details in the popup
popupImage.src = bookImage.src;
popupTitle.textContent = bookTitle.textContent;
popupAuthor.textContent = bookAuthor.textContent;
popupDescription.textContent = bookDescription.textContent;

// Show the popup
var popup = document.getElementById("popup");
popup.style.display = "grid";
}

function handlePopupClose() {
// Hide the popup
var popup = document.getElementById("popup");
popup.style.display = "none";
}
