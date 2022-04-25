function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? "read" : "not read yet"
    }`;
  };
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(theHobbit.info());


// ----- Prototypal inheritance

function Student(name, grade) {
  this.name = name;
  this.grade = grade;
}

Student.prototype.sayName = function () {
  console.log(this.name);
};

Student.prototype.goToProm = function () {
  console.log("Eh.. go to prom?");
};

const mario = new Student("Mario", "7th");

console.log(mario.sayName())
console.log(mario.goToProm())

// Using [ Object.create ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

function Estudiante() {}

Estudiante.prototype.sayName = function() {
  console.log(this.name);
}

function EightGrader(name) {
  this.name = name;
  this.grade = 8;
}

EightGrader.prototype = Object.create(Student.prototype);

const pedro = new EightGrader("Pedro");
pedro.sayName()
console.log( pedro.grade );

