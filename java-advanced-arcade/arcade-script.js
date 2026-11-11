//DOM Manipulation

//Moving the Player
const myPlayer = document.querySelector("#player");

document.addEventListener('keydown', (e) => {
    let x = myPlayer.offsetLeft;
    let y = myPlayer.offsetTop;

    if (e.key === "ArrowUp") {
        y -= 10;
    }
    if (e.key === "ArrowDown") {
        y += 10;
    }
    if (e.key === "ArrowLeft") {
        x -= 10;
    }
    if (e.key === "ArrowRight") {
        x += 10;
    }

   myPlayer.style.left = x + "px";
   myPlayer.style.top = y + "px";
});

//Collision

//Get bigger, Get smaller

//Screen turns red when dying

//Resetting/Launching game