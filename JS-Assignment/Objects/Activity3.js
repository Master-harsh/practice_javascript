// Nested Objects
// Create a nested object representing a library with properties like name and books (an array of book object), and log the library object to console

const library = {
    name: "City Library",
    books: [
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960
      },
      {
        title: "1984",
        author: "George Orwell",
        year: 1949
      },
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925
      }
    ]
  };
  
  console.log(library);
  
// Access and log the name of the library and the title of all the books in the library

console.log("Library Name:", library.name);
console.log("Book Titles:");
library.books.forEach(book => {
  console.log(book.title);
});

