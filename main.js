const emailButton = document.getElementById("email-button");
const emailPopUp = document.getElementById("email-pop-up");

emailButton.addEventListener('click', () => {

    if (emailPopUp.style.display == "block") {
        emailPopUp.style.display = "none";
    } else {
        emailPopUp.style.display = "block";
    }

});

let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => {
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
})