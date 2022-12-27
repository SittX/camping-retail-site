// Navbar hamburger menu open and close event listeners 
let menu = document.getElementById("mobile-menu");
let closeMenu = () => {
    menu.style.right = "-1080px";
}
let openMenu = () => {
    menu.style.right = "0";
}

// Home page modal menu event listeners
var modal = document.getElementById("modal-container");
let loadModal = () => {
    // Open the modal after 2s of visiting the website by adding 'model--active' class to the HTML element
    var timer = setTimeout(() => {
        modal.classList.add("modal--active");
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


// Product filter fieldset toggle button event listeners
let filter = document.getElementById("catalogue__filter");
let catalogueFilterToggle = () => {
    if (filter.style.display == "block") {
        filter.style.display = "none";
    } else {
        filter.style.display = "block";
    }
}

// Product slider
let slides = document.getElementsByClassName('slide');
let slider = document.getElementById('slide__container');

let buttonRight = document.getElementById('slider__right-arrow');
let buttonLeft = document.getElementById('slider__left-arrow');

buttonLeft.addEventListener('click', function () {
    slider.scrollLeft -= 125;
})

buttonRight.addEventListener('click', function () {
    slider.scrollLeft += 125;
})

