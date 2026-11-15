//PLAYER & AREA

//The player's element
const movePlayer = document.querySelector("#player");
//The gamearea's element
const gameArea = document.querySelector("#area");

//ARROW CODE

//Making the player move with arrow buttons
document.addEventListener("keydown", (e) => {
  let x = movePlayer.offsetLeft;
  let y = movePlayer.offsetTop;

  //Each arrow key moves the player 20px when pressed or held down
  if (e.key === "ArrowUp") {
    y -= 20;
  }
  if (e.key === "ArrowDown") {
    y += 20;
  }
  if (e.key === "ArrowLeft") {
    x -= 20;
  }
  if (e.key === "ArrowRight") {
    x += 20;
  }

  //Prevents player from breaking out of gamearea, arrowkey version
  x = Math.max(0, Math.min(x, gameArea.clientWidth - movePlayer.offsetWidth));
  y = Math.max(0, Math.min(y, gameArea.clientHeight - movePlayer.offsetHeight));

  // Move the player, arrowkey version
  movePlayer.style.left = x + "px";
  movePlayer.style.top = y + "px";
});

//MOUSE CODE

//Making the player move when clicking
gameArea.addEventListener("click", (e) => {

  //Using Rect to figure out gamearea's size and position
  //Rect stands for RECTANGLE, its to figure out where an element is and how big it is.
  const areaRect = gameArea.getBoundingClientRect();

  //Figures out where player is in game area when clicking
  let x = e.clientX - areaRect.left - movePlayer.offsetWidth / 2;
  let y = e.clientY - areaRect.top - movePlayer.offsetHeight / 2;

  // Keeps player inside the game area, click version
  x = Math.max(0, Math.min(x, gameArea.clientWidth - movePlayer.offsetWidth));
  y = Math.max(0, Math.min(y, gameArea.clientHeight - movePlayer.offsetHeight));

  // Move the player, click version
  movePlayer.style.left = x + "px";
  movePlayer.style.top = y + "px";
});
