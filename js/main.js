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

let filter = document.getElementById("catalogue__filter");
let catalogueFilterToggle = () => {
    if (filter.style.display == "block") {
        filter.style.display = "none";
    } else {
        filter.style.display = "block";
    }
}

// const imgWrapper = document.getElementById("img-wrapper")
// let currentPosition = 0;

// let leftSide = () => {
//     console.log("left");
//     let translateX = currentPosition += 50;
//     imgWrapper.style.transform = "translateX(" + translateX + "px )";
// }

// let scrollRight = () => {
//     console.log("right")
//     let translateX = currentPosition -= 50;
//     imgWrapper.style.transform = "translateX(" + translateX + "px )";
//     console.log(currentPosition);
// }


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

const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

//AUTO PLAY THE SLIDER 
// function autoPlay() {
//     if (slider.scrollLeft > (maxScrollLeft - 1)) {
//         slider.scrollLeft -= maxScrollLeft;
//     } else {
//         slider.scrollLeft += 1;
//     }
// }
// let play = setInterval(autoPlay, 50);

// PAUSE THE SLIDE ON HOVER
// for (var i = 0; i < slides.length; i++) {

//     slides[i].addEventListener('mouseover', function () {
//         clearInterval(play);
//     });

//     slides[i].addEventListener('mouseout', function () {
//         return play = setInterval(autoPlay, 50);
//     });
// }
