//DASHBOARD

//The idea is that when the user enters a certain BookID, the book assigned that ID will appear on the webpage
//The books can then be added to favourites, or be removed. Both are buttons.
//The books can also be sorted alphabetically via a button.

//BookID: author's initials + the year the book was published
//For example, the Agatha Christie book came out in 1939, so her book's BookID is ac1939

// BOOK ARRAY
//I used books that I've read personally just for fun lol
const bookData = [
  //Agatha Christie
  {
    id: "ac1939",
    title: "And Then There Were None",
    author: "Agatha Christie",
    year: 1939,
    genre: "Mystery",
    pages: 250,
  },

  //Alexandre Dumas
  {
    id: "ad1846",
    title: "The Count of Monte Cristo",
    author: "Alexandre Dumas",
    year: 1846,
    genre: "Adventure",
    pages: 1257,
  },

  //Howard Pyle
  {
    id: "hp1883",
    title: "The Merry Adventures of Robin Hood",
    author: "Howard Pyle",
    year: 1883,
    genre: "Historical Fiction",
    pages: 129,
  },

  //Dan Brown
  {
    id: "db2009",
    title: "The Lost Symbol",
    author: "Dan Brown",
    year: 2009,
    genre: "Thriller",
    pages: 671,
  },

  //Uketsu
  {
    id: "uk2022",
    title: "Strange Pictures",
    author: "Uketsu",
    year: 2022,
    genre: "Horror",
    pages: 240,
  },
];

//Find book button
const form = document.querySelector("#book-form");
//Book input (user types in the bookid)
const bookInput = document.querySelector("#book-input");
//Book output (displays various information on the page)
const bookOutput = document.querySelector("#book-toggle");

// Find a Book
//The user types in the bookid
//If done correctly, the book will be displayed
//If done wrong, an error message will be displayed

let currentBook = null;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const bookId = bookInput.value.trim().toLowerCase();
  currentBook = bookData.find(({ id }) => id === bookId);
  if (!currentBook) {
    bookOutput.textContent = "Book not found!";
    return;
  }

  const { title, author, year, genre, pages, id } = currentBook;
  bookOutput.textContent = `${title} by ${author} | Year: ${year} | Genre: ${genre} | Pages: ${pages} | BookID: ${id}`;
});

//Saves a favourited book to localstorage
//The favourites list is also displayed when a book has been assigned to it

const addFavourite = document.querySelector("#add-book");
const favouritesList = document.querySelector("#favourites-list");

//When there are no books in the list, the fav list be empty
let favourites = [];

function saveFavourites() {
  localStorage.setItem("favourites", JSON.stringify(favourites));
}

function displayFavourites() {
  favouritesList.innerHTML = " ";

  favourites.forEach(({ title, author, year, genre, pages, id }) => {
    const bookCard = document.createElement("div");

    bookCard.innerHTML = `
            <h3>${title}</h3>
            <p>Author: ${author}</p>
            <p>Year: ${year}</p>
            <p>Genre: ${genre}</p>
            <p>Pages: ${pages}</p>
            <p>BookID: ${id}</p>
        `;

    favouritesList.appendChild(bookCard);
  });
}

// Loading favourites from localStorage
//The books in the fav lists are saved in localstorage
const savedFavourites = localStorage.getItem("favourites");

if (savedFavourites) {
  favourites = JSON.parse(savedFavourites);
}

// Show favourites when page loads
//The books in fav lists, if there are any, will still be displayed even during a page refresh.
displayFavourites();

// Add Book to Favourites List
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
//The function looks at the favourites list, checks the items and them sorts them alphabetically
const sortButton = document.querySelector("#sort-button");

sortButton.addEventListener("click", function () {
  favourites.sort((a, b) => a.title.localeCompare(b.title));
  saveFavourites();
  displayFavourites();
});

//Remove Book button (removes the book/hides it from the page)
//The user must write the BookID of the book they want to remove, and then press the Remove Book button again
//This fully deletes the book from the favourites list
//The user can reassign the book if they want
//The user is not able to add multiple copies of the same book
const removeButton = document.querySelector("#remove-button");

removeButton.addEventListener("click", function () {
  if (!currentBook) {
    bookOutput.textContent =
      "Write the ID of the book you want to remove, before pressing the button";
    return;
  }

  favourites = favourites.filter(({ id }) => id !== currentBook.id);

  saveFavourites();
  displayFavourites();

  bookOutput.textContent = `${currentBook.title} has been removed from favourites!`;
});
