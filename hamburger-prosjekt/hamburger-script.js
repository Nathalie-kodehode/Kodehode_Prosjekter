//DOM Manipulation Stuff

//h1
const headingOne = document.querySelector("h1");
console.log(headingOne);
headingOne.textContent = "Welcome to Burger Crimes";
headingOne.style.fontSize = "64px";
headingOne.style.color = "white";

//h2
const headingTwo = document.querySelector("h2");
console.log(headingTwo);
headingTwo.textContent = "The 1# Spot for Food Poisoning in the US";
headingTwo.style.fontSize = "42px";
headingTwo.style.color = "white";

//h3
//The function automatically applies 18px for each button which is nice
const buttonText = document.querySelectorAll("h3");
buttonText.forEach(function (button) {
  button.style.fontSize = "18px";
});

//Hamburger Menu
const burgerButton = document.getElementById("menu-button");
const burgerMenu = document.getElementById("burger-menu");
const menuIcon = document.getElementById("menu-icon");
const menuContainer = document.querySelector(".menu-container");

//This function does the folllowing:
//Opens menu
//Toggles it on and off
//Changes hamburger icon to a cross (showing it can exit the menu)
burgerButton.addEventListener("click", function () {
  burgerMenu.classList.toggle("active");

  const isOpen = burgerMenu.classList.contains("active");

  burgerButton.setAttribute("aria-expanded", isOpen);

  if (isOpen) {
    menuIcon.src = "hamburger-images/exit-hamburger.svg";
    menuIcon.alt = "Close menu";
  } else {
    menuIcon.src = "hamburger-images/hamburger.svg";
    menuIcon.alt = "Open menu";
  }
});

// This function allows the users to click outside the button to exit the menu, not being constricted to only the button to escape.
document.addEventListener("click", function (event) {
  if (!menuContainer.contains(event.target)) {
    burgerMenu.classList.remove("active");

    burgerButton.setAttribute("aria-expanded", "false");
  }
});
