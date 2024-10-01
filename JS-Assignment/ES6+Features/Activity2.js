// Use array destructuring to extract the first and second elements from an array of numbers and log them to the console

const arrayNumbers = [10, 20, 30, 40, 50, 60, 70, 80]

let [first, last] = arrayNumbers;

console.log(first);
console.log(last);

// Use object destructuring to extract the title and author from a book object and log them to the console

const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
  };

let {title, author} = book
console.log(title);
console.log(author);


