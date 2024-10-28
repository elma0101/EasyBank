function displayMenu() {
    var menuIcon = document.getElementById("menu");
    var menuBlock = document.querySelector(".container2");

    // Check current icon source to toggle
    if (menuIcon.src.endsWith("/images/bank-landing-page-images/icon-hamburger.svg")) {
        menuBlock.style.visibility = "visible";
        menuBlock.style.animation = "scaleAnimation 0.2s linear";
        menuIcon.src = "./images/bank-landing-page-images/icon-close.svg";
    } else {
        
        menuBlock.style.animation = "scaleAnimationReverse 0.2s linear";
        menuBlock.style.visibility = "hidden";
        menuIcon.src = "./images/bank-landing-page-images/icon-hamburger.svg";
    }
}

// Add a single click event listener on load
document.getElementById("menu").addEventListener("click", displayMenu);
