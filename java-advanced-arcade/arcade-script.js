//Arcade JS

//Fonts
const headingOne = document.querySelector("h1");
headingOne.textContent = "Picky Eater Simulator";
const headingTwo = document.querySelector("h2");
headingTwo.textContent = "You are a picky eater who wants to get BIG. EAT the delicious sweets - AVOID the yucky veggies!";

//Player, Area & Foods
const myPlayer = document.querySelector("#player");
const myArea = document.querySelector("#game-area");
const goodFood = document.querySelector(".good-food");
const badFood = document.querySelector(".bad-food");

//Moving the Player
document.addEventListener("keydown", (e) => {
  let x = myPlayer.offsetLeft;
  let y = myPlayer.offsetTop;

  if (e.key === "ArrowUp") {
    y -= 25;
  }
  if (e.key === "ArrowDown") {
    y += 25;
  }
  if (e.key === "ArrowLeft") {
    x -= 25;
  }
  if (e.key === "ArrowRight") {
    x += 25;
  }

    //Gamearea boundaries (prevents player from breaking out of box)
  x = Math.max(0, Math.min(x, myArea.clientWidth - myPlayer.offsetWidth));
  y = Math.max(0, Math.min(y, myArea.clientHeight - myPlayer.offsetHeight));

  myPlayer.style.left = x + "px";
  myPlayer.style.top = y + "px";
});

//Collision


//Get bigger, Get smaller

//if player eats GOOD FOOD (collision), the player grows in size and food vanishes
//GOOD FOOD array

//if the player eats BAD FOOD (collision), the player shrinks in size and food vanishes
//BAD FOOD array


//Screen turns red when dying(?)

//Resetting/Launching game
