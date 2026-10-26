// DOM Manipulation

//Section 1. What is a DOM?
//Document Object Model Manipulation

// The DOM (Document Object Model) is how JavaScript interacts with HTML on a web page.
// It turns your HTML into a structure of objects you can access and change using JS.

//Section 2: Targeting exisitng HTML elements in JS

//queryselector for selecting an element in my html
const heading = document.querySelector("h1");
console.log(heading);

//document.getElementByID(#ID);
const button = document.querySelector("#my-button");
console.log(button);

//const listItems = document.querySelectorAll(".list-item");
const listItems = document.getElementsByClassName("list-item");
console.log(listItems);

//Section 3: Changing text or HTML content

//We change the text in HTML, but cannot really style it ;/
//Always use textContent instead of innerHTML
heading.textContent = "Welcome to the DOM lesson!";

//Here we can change the color and style it. 
//SECURITY RISK
heading.innerHTML = "<span style='color:red'>DOM Manipulation";

// textContent sets or gets the plain text inside an element (no HTML tags)
heading.textContent =
  "<span style='color:blue'>Welcome to the DOM lesson!</span>";

// innerHTML sets or gets the HTML inside an element (can include tags)
heading.innerHTML = "<span style='color:red'>DOM Manipulation</span>";

// ⚠️ Security Warning:
// Be careful when using innerHTML with content that comes from the user or an external source.
// As a general rule, always use textContent where possible.
// It can create a security risk called XSS (Cross-Site Scripting).
// Always use textContent if you're not intentionally adding HTML tags.

button.textContent = "Send Form";

//Section 4: Changing styling using JS

heading.style.fontSize = "36px";
heading.style.textTransform = "uppercase";
//inline takes priority
heading.style.color = "blue";

//Section 5: Create and add new html elelemtns using js

//step 1 create a new element (font, div, section, anything)
const newParagraph = document.createElement("p");

//step 2 set the textContent (styling font, color, content)
newParagraph.textContent = "I was created using JS!";

//Step 3 give it a class
newParagraph.classList.add("new-paragraph");

//step 4 put it on the page using append, prepend, insertBefore
document.body.append(newParagraph);
console.log(newParagraph);

// Prepend, similar to append, but places the element at the start rather than the end

const firstParagraph = document.createElement("p");
firstParagraph.textContent = "I was added to the top of the body!";
document.body.prepend(firstParagraph);

// insertBefore lets us pick an lement to inset our new element before.

const midParagraph = document.createElement("p");
midParagraph.textContent = "I'm in the middle of the list and the button!";
document.body.insertBefore(midParagraph, button);
console.log(midParagraph);

// 📌 Summary of placement methods:
// append() → adds to the end
// prepend() → adds to the beginning
// insertBefore(newNode, referenceNode) → inserts before a specific node

// 🧠 What is a DOM node?
// A DOM node is any single part of the document tree:
// - An element (like <p> or <div>)
// - A text node (plain text)
// - A comment node (<!-- like this -->)
// Most of the time, when you're working with elements, you're using element nodes.

//Add a new list item to the exisintg list

const newListItem = document.createElement("li");

newListItem.textContent = "Item 3";
newListItem.classList.add("list-item");

const list = document.querySelector("#my-list");

list.append(newListItem);

//Section 6: Removing Elements
const firstListItem = document.querySelector("li");
// firstListItem.remove();
list.removeChild(firstListItem);

//Section 7: Targeting elements (parents, children, etc) 
console.log(list.parentElement);
console.log(list.children);
console.log(list.firstElementChild);
console.log(list.lastElementChild);

//Section 8: classlist Methods

const box = document.querySelector(".box");

//add a class

box.classList.add("blue-box");
box.classList.add("box");

//remove a class
box.classList.remove("blue-box");

//toggle a class (on and off)
//add
box.classList.toggle("border");
//remove
box.classList.toggle("border");
//add again
box.classList.toggle("border");

//check if an element has the class or not (returns true if it does)
console.log(box.classList.contains("border"));

//Section 9: Creating a list using a loop

//Lets create a list of our favourite movies!

const favouriteMovies = ["The Matrix", "Backrooms", "The Gentlemen", "Ford vs Ferrari", "Clue!", "The Empire Strikes Back", "Snatch", "Spiderman: Brand New Day"];

//make ul
const movieList = document.createElement("ul");
movieList.classList.add("movie-list");
document.body.append(movieList);

for (let movie of favouriteMovies) {
//1. create the element (bake the cake)
const newLi = document.createElement("li");

//2. add textContent and class (decorate the cake)
newLi.textContent = movie;
newLi.classList.add("list-item");

//3. append our li to the ul (serve the cake)
movieList.append(newLi);
//dont be a fucking chud and duplicate this, MAKE A LOOP!
}

console.log(movieList);

// --------------------------------------
// Summary
// --------------------------------------

// ✅ The DOM is how JavaScript connects to HTML
// ✅ Use querySelector, getElementById, etc. to select elements
// ✅ Use .textContent, .innerHTML, and .style to change content and appearance
// ✅ Use createElement + appendChild to add elements
// ✅ Use removeChild to delete elements
// ✅ DOM has a parent/child/sibling structure you can navigate
// ✅ classList helps manage CSS classes
// ✅ You can attach event listeners like click or mouseover

//Bonus: Clicklble button to toggle a class

const toggleButton = document.createElement("button");

toggleButton.textContent = "Click me to change BG color!";

document.body.append(toggleButton);

toggleButton.addEventListener("click", function() {
    document.body.classList.toggle("body-background");
})