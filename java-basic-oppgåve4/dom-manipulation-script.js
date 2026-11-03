//DOM Manipulation

//FONTS

//Heading Styling
const headingMajor = document.querySelector("h1");
console.log(headingMajor);
headingMajor.textContent = "Dog Finder";

headingMajor.style.color = "#2c95a5";

const headingMinor = document.querySelector("h2");
console.log(headingMinor);
headingMinor.textContent =
  "Are you bored and just want to look at cute dogs? You've come to the right place!";

headingMinor.style.color = "#e57b17";

//Starting text when loading in page. "???" will change into a dog name when the button is pressed.
const dogName = document.querySelector("h3");
console.log(dogName);
dogName.textContent = "???";

dogName.style.color = "#fe4747";

//BUTTONS

//Generate Dog and Name Button
const dogs = [
  {
    name: "Åshild",
    image: "dommy-mommy-images/Åshild.jpg",
  },
  {
    name: "Baguette",
    image: "dommy-mommy-images/Baguette.jpg",
  },
  {
    name: "Balthazar",
    image: "dommy-mommy-images/Balthazar.jpg",
  },
  {
    name: "Bernie",
    image: "dommy-mommy-images/Bernie.jpg",
  },
  {
    name: "Cæsar",
    image: "dommy-mommy-images/Cæsar.jpg",
  },
  {
    name: "Daisy",
    image: "dommy-mommy-images/Daisy.jpg",
  },
  {
    name: "Frode",
    image: "dommy-mommy-images/Frode.jpg",
  },
  {
    name: "Loffen",
    image: "dommy-mommy-images/Loffen.jpg",
  },
  {
    name: "Pablo",
    image: "dommy-mommy-images/Pablo.jpg",
  },
  {
    name: "Rosmarin",
    image: "dommy-mommy-images/Rosmarin.jpg",
  },
];

function findDog() {
  const randomIndex = Math.floor(Math.random() * dogs.length);

  const selectedDog = dogs[randomIndex];

  document.getElementById("hundebilde").src = selectedDog.image;

  document.getElementById("hundenamn").textContent = selectedDog.name;
}

// Light/Dark Mode Button
//The button is set to Dark Mode by default!
const toggleButton = document.getElementById("toggle-button");

toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("body-background");
});
