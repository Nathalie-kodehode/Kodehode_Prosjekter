//DOM Manipulation

//Fonts
const headingMajor = document.querySelector("h1");
console.log(headingMajor);
headingMajor.textContent = "Dog Finder";

headingMajor.style.color = "#2c95a5";

const headingMinor = document.querySelector("h2");
console.log(headingMinor);
headingMinor.textContent = "Are you bored and just want to look at cute dogs? You've come to the right place!";

headingMinor.style.color = "#e57b17";

const dogName = document.querySelector("h3");
console.log(dogName);
dogName.textContent = "Name"

dogName.style.color = "#fe4747";




//Section


//Boxes

//Box Contents

//Buttons

//Generate Dog and Name Button


// Light/Dark Button
const toggleButton = document.getElementById("toggle-button");

toggleButton.addEventListener("click", function() {
    document.body.classList.toggle("body-background");
})