"use strict";

class User {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log("Hello! " + this.name);
    return this.name
  }
}

console.log(typeof User);

const name = "Alex";
const person = new User(name);
console.log(person);

console.log("\n");

class Person extends User {
  constructor(name, email) {
    super(name);
    this.email = email;
  }

  sayHello() {
    console.log(super.sayHello());
    console.log(this.email);
  }

  sayBye() {
    console.log(super.sayHello());
  }
}

const people = new Person(name, "alex@mail");
console.log(people);
console.log("\n");
console.log(people.sayHello());
console.log("\n");
console.log(people.sayBye());





class Human {
 
  sayHello() {
    console.log("Hello!")
  }
}

const man = new Human();
console.log(man);

class Boy extends Human {
    constructor(name){
        super();
        this.name = name;
    }
}

const boy = new Boy('Nick');
console.log(boy);
