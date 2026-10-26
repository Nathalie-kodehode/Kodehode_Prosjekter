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


