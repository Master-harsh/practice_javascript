// Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method

const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  
    getTitleAndYear() {
      return `${this.title} was published in ${this.year}.`;
    }
  };
  
  // Log the result of calling the method
  console.log(book.getTitleAndYear());