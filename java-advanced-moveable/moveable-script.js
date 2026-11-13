
//the player's element
const movePlayer = document.querySelector("#player");

//making the player move with arrow buttons
document.addEventListener('keydown', (e) => {
    let x = movePlayer.offsetLeft;
    let y = movePlayer.offsetTop;

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

    movePlayer.style.left = x + "px";
    movePlayer.style.top = y + "px";
});

//making the player move when clicking