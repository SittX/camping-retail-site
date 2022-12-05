// Hamburger menu open and close event listeners 
let menu = document.getElementById("mobile-menu");
let closeMenu = () => {
    menu.style.right = "-1080px";
}
let openMenu = () => {
    menu.style.right = "0";
}

// Modal modal menu event listeners
var modal = document.getElementById("modal-container");
let loadModal = () => {
    console.log(modal);
    console.log("before timer");
    // Open the modal after 2s of visiting the website
    var timer = setTimeout(() => {
        modal.classList.add("modal--active");
        console.log("Hello world");
    }, 5000);
    timer();
}

// Trigger loadModal function once the window has been loaded in the browser
window.onload = function () {
    loadModal();
}

// Close event for the closing the modal
let closeModal = () => {
    modal.classList.remove("modal--active");
}