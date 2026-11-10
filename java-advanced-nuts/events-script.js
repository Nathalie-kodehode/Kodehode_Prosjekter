//Events, Event Listeners

//On click
const firstButton = document.getElementById("first-button");
console.log(firstButton);
firstButton.addEventListener('click', (e) => console.log(e));

//Punktum for CLASS, Hashtag for ID
const buttons = document.querySelectorAll(".btn");
console.log(buttons);
buttons.forEach(button => {

//     //på klikk, konsoll-logg tekst-innhaldet i kvar button
//     button.addEventListener('click', () => console.log(button.textContent));
//     //mouse over button
//     button.addEventListener('mouseover', () => console.log(`Mouse over: ${button.textContent}`));
//    //mouse outside button
//     button.addEventListener('mouseout', () => alert(`You stopped hovering: ${button.textContent}`));

//endre bakgrunnsfarge basert på textcontent
button.addEventListener('click', () => document.body.style.backgroundColor = button.textContent)
})

const movableObject = document.querySelector("#movable-object");

//make a moveable ovbject
document.addEventListener('keydown', (e) => {
    let x = movableObject.offsetLeft;
    let y = movableObject.offsetTop;

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

    movableObject.style.left = x + "px";
    movableObject.style.top = y + "px";
});