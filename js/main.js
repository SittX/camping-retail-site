let menu = document.getElementById("mobile-menu");

let closeMenu = () => {
    menu.style.right = "-1080px";
}
let openMenu = () => {
    menu.style.right = "0";
}

// Popup menu OnLoad function
let modalPopUp = () => {
    var popup = document.getElementById("myPopup");
    popup.style.display = "block";
}

let popupClose = () => {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}