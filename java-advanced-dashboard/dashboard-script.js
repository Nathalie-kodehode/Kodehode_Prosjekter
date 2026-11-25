//Data Dashboard

//The idea is that when the user enters a certain BookID, the book assigned that ID will appear on the webpage
//The books can then be added to favourites, or be removed. Both are buttons.

//I used books that I've read personally just for fun lol
const bookData = [
  //Agatha Christie
  {
    id: "ac1939",
    title: "And Then There Were None",
    author: "Agatha Christie",
    genre: "Mystery",
    pages: 250,
  },

  //Alexandre Dumas
  {
    id: "ad1846",
    title: "The Count of Monte Cristo",
    author: "Alexandre Dumas",
    genre: "Adventure",
    pages: 1257,
  },

  //Howard Pyle
  {
    id: "hp1883",
    title: "The Merry Adventures of Robin Hood",
    author: "Howard Pyle",
    genre: "Historical Fiction",
    pages: 129,
  },

  //Dan Brown
  {
    id: "db2009",
    title: "The Lost Symbol",
    author: "Dan Brown",
    genre: "Thriller",
    pages: 671,
  },

  //Uketsu
  {
    id: "uk2022",
    title: "Strange Pictures",
    author: "Uketsu",
    genre: "Horror",
    pages: 240,
  },
];

//Find Book button (adds a certain book)
const form = document.querySelector("#book-form");
const bookInput = document.querySelector("#book-input");
const bookOutput = document.querySelector("#book-toggle");

let currentBook = null;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const bookId = bookInput.value.trim().toLowerCase();

  currentBook = bookData.find(({ id }) => id === bookId);

  if (!currentBook) {
    bookOutput.textContent = "Book not found!";
    return;
  }

  const { title, id, author, genre, pages } = currentBook;

  bookOutput.textContent = `${title} by ${author}| BookdID: ${id} | Genre: ${genre} | Pages: ${pages}`;
});

//Add Book to Faves button (assigns class favourites to book)

const addFavourite = document.querySelector("#add-book");
const favouritesList = document.querySelector("#favourites-list");

let favourites = [];

function saveFavourites() {
  localStorage.setItem("favourites", JSON.stringify(favourites));
}

function displayFavourites() {
  favouritesList.innerHTML = "";

  favourites.forEach(({ title, author, genre, pages }) => {
    const bookCard = document.createElement("div");

    bookCard.innerHTML = `
            <h3>${title}</h3>
            <p>Author: ${author}</p>
            <p>Genre: ${genre}</p>
            <p>Pages: ${pages}</p>
        `;

    favouritesList.appendChild(bookCard);
  });
}

// Load favourites from localStorage
const savedFavourites = localStorage.getItem("favourites");

if (savedFavourites) {
  favourites = JSON.parse(savedFavourites);
}

// Show favourites when page loads
displayFavourites();

// Add book to favourites
addFavourite.addEventListener("click", function () {
  if (!currentBook) {
    bookOutput.textContent = "Find a book first!";
    return;
  }

  const alreadyFavourite = favourites.some(({ id }) => id === currentBook.id);

  if (alreadyFavourite) {
    bookOutput.textContent = "This book is already a favourite!";
    return;
  }

  favourites.push(currentBook);

  saveFavourites();
  displayFavourites();

  bookOutput.textContent = `${currentBook.title} has been added to favourites!`;
});

//Sort books A-Z
const sortButton = document.querySelector("#sort-button");

sortButton.addEventListener("click", function () {
  favourites.sort((a, b) => a.title.localeCompare(b.title));

  saveFavourites();
  displayFavourites();
});

//Remove Book button (removes the book/hides it from the page)
const removeButton = document.querySelector("#remove-button");

removeButton.addEventListener("click", function () {
  if (!currentBook) {
    bookOutput.textContent =
      "Please write the ID of the book you want to remove from Favourites";
    return;
  }

  favourites = favourites.filter(({ id }) => id !== currentBook.id);

  saveFavourites();
  displayFavourites();

  bookOutput.textContent = `${currentBook.title} has been removed from favourites!`;
});


//things todo
//show id number when book displayed
//style favourites list DONE
//style error codes

//id cheatsheet (so a user can add all books) DONE