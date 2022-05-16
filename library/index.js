const booksList = document.querySelector('.booksList');

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read || false;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? "read" : "not read yet"
    }`;
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

for (let i = 1; i <= 5; i++) {
 addBookToLibrary( new Book(`Title ${i}`, 'Nico', Math.floor(Math.random() * 100), true) )
}

console.log(myLibrary)

// display books list

myLibrary.forEach(book => {
  booksList.innerHTML += `<p>${book.info()}</p>`
});
