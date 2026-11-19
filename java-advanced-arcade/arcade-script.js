//Fonts
const headingOne = document.querySelector("h1");
headingOne.textContent = "Picky Eater Simulator";
const headingTwo = document.querySelector("h2");
headingTwo.textContent = "You are a picky eater who wants to get BIG & ROUND. EAT the delicious sweets - AVOID the yucky veggies!";

//Player, Area & Foods
const myPlayer = document.querySelector("#player");
const myArea = document.querySelector("#game-area");
const startButton = document.querySelector("#start-button");

//GOOD FOOD array
const goodFood = [
  "icecream.svg",
  "muffin.svg",
  "lollipop.svg",
  "chocolate.svg",
  "candy.svg"
]

//BAD FOOD array
const badFood = [
  "aubergine.svg",
  "broccoli.svg",
  "onion.svg",
  "salad.svg",
  "tomato.svg"
]

// Default Player Size
let playerSize = 50;
let gameRunning = false;

// Start / New Round
startButton.addEventListener("click", startGame);

function startGame() {

    // Reset player size
    playerSize = 50;

    myPlayer.style.width = playerSize + "px";
    myPlayer.style.height = playerSize + "px";

    // Reset player position
    myPlayer.style.left = "50%";
    myPlayer.style.top = "50%";
    myPlayer.style.transform = "translate(-50%, -50%)";

    // Remove food when eaten
    document.querySelectorAll(".food").forEach(food => food.remove());

    // Create new food
    createFood(goodFood, "good");
    createFood(badFood, "bad");

    // Start game
    gameRunning = true;

    startButton.textContent = "New Round";
}

// Create food items
function createFood(foodArray, type) {

    foodArray.forEach(food => {

        const foodItem = document.createElement("div");

        foodItem.classList.add("food", type);

        foodItem.style.backgroundImage =
            `url("arcade-images/${food}")`;

        // Random position
        const x = Math.random() * (myArea.clientWidth - 50);
        const y = Math.random() * (myArea.clientHeight - 50);

        foodItem.style.left = x + "px";
        foodItem.style.top = y + "px";

        myArea.appendChild(foodItem);
    });
}

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

   myPlayer.style.transform = "none";
  myPlayer.style.left = x + "px";
  myPlayer.style.top = y + "px";

  checkCollision();
});

// Collision detection
function checkCollision() {

    const foods = document.querySelectorAll(".food");

    foods.forEach(food => {

        const playerRect = myPlayer.getBoundingClientRect();
        const foodRect = food.getBoundingClientRect();

        if (
            playerRect.left < foodRect.right &&
            playerRect.right > foodRect.left &&
            playerRect.top < foodRect.bottom &&
            playerRect.bottom > foodRect.top
        ) {

            if (food.classList.contains("good")) {
                playerSize += 15;
            }

            if (food.classList.contains("bad")) {
                playerSize = Math.max(20, playerSize - 15);
            }

            // Update player size
            myPlayer.style.width = playerSize + "px";
            myPlayer.style.height = playerSize + "px";

            // Remove eaten food
            food.remove();
        }
    });
}

