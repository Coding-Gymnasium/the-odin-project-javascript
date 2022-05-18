const booksList = document.querySelector(".booksList");
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

// Add new book to myLibrary array
function addBookToLibrary(book) {
  if (book) myLibrary.push(book);
}

// display books list

const DisplayBooksList = () => {
  let newBook = myLibrary[myLibrary.length -1]
  console.log(myLibrary.length);
    if ( myLibrary[myLibrary.length - 1]  )  booksList.innerHTML += `<p>${newBook.info()}</p>`;
};

DisplayBooksList();

// Form

let form = document.querySelector(".addBook");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  new FormData(form);
});

// formdata handler to retrieve data

form.addEventListener("formdata", (e) => {
  console.log("formdata fired");

  // Get the form data from the event object
  let data = e.formData;
  let inputData = [];
  for (const value of data.values()) {
    inputData.push(value);
  }
  if (!inputData.includes('')) addBookToLibrary(new Book(...inputData));
  DisplayBooksList();
  form.reset()
  inputData = [];
  console.log("Form Cleared");
});
