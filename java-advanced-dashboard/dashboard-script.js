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
    pages: "1257",
  },

  //Howard Pyle
  {
    id: "hp1883",
    title: "The Merry Adventures of Robin Hood",
    author: "Howard Pyle",
    genre: "Historical Fiction",
    pages: "129",
  },

  //Dan Brown
  {
    id: "db2009",
    title: "The Lost Symbol",
    author: "Dan Brown",
    genre: "Thriller",
    pages: "671",
  },

  //Uketsu
  {
    id: "uk2022",
    title: "Strange Pictures",
    author: "Uketsu",
    genre: "Horror",
    pages: "240",
  },
];

const { title, author, genre, pages } = bookData;
console.log(`${title} by ${author}, genre: ${genre}, pages: ${pages}`);

//Find Book button (adds a certain book)


//Add Book to Faves button (assigns class favourites to book)


//Remove Book button (removes the book/hides it from the page)

//screenshotta sander sin eksempel, sjekk skjermbilder