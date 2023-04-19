class Person {
  constructor(name, age, occupation) {
    this.name = name;
    this.age = occupation;
  }
  introduce() {
    console.log(`My name is ${this.name} , I am a ${this.occupation}`);
  }
}

let persone1 = new Person("Madina", "37", "program developer");

persone1.introduce();

//////////

class Animal {
  constructor(name, species, sound) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }

  makeSound() {
    console.log(this.sound);
  }
}

let animal1 = new Animal("cat", "cat", "meow");

animal1.makeSound();

animal1.makeSound();
///////////////////

class Book {
  constructor(title, author, numberOfPages) {
    this.title = title;
    this.author = author;
    this.numberOfPages;
  }
  read() {
    console.log(`${this.title} book has been read`);
  }
}

let book1 = new Book("One Hundred Years of Solitude");

book1.read();

///////////

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  start() {
    console.log(`This ${this.model} has been started`);
  }
}

let car1 = new Car("MCLaren", "MC", 1995);
car1.start();

///////////
class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    let a = this.height * this.height;
    console.log(a);
  }
  getPerimeter() {
    let a = 2 * this.height + 2 * this.width;
    console.log(a);
  }
}

let shape1 = new Shape(10, 20);
shape1.getArea();
shape1.getPerimeter();
/////////

class Movie {
  constructor(title, director, rating) {
    this.title = title;
    this.director = director;
    this.rating = rating;
  }
  paly() {
    console.log(`${this.title} is palying`);
  }
}

let movie1 = new Movie("The 5th element", "Luc Besson", 7.6);

movie1.paly();
///////

class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }
  dispay() {
    console.log(
      `the product's name is ${this.name}, price is${this.price}, product's description is ${this.description}`
    );
  }
}

let product1 = new Product("Almond milk", "5 dollars per gallon", "plant base");
product1.dispay();
