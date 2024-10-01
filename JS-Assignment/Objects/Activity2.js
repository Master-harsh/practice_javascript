// Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method
const book = {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}.`;
    }
};

// console.log(book.getSummary());

// Add a method to the book object that takes a parameter (year) and update the book's year property, then log the updated object

const book1 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,

    ToUpdateYear(Year){
        this.year = Year
    }
  };

  book1.ToUpdateYear(1947)
  console.log(book1);
  
  