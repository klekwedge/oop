"use strict";

class User {
  static testStatic = true;
  constructor(name) {
    this.name = name;
  }

  static getRole(email) {
    console.log(email);
    return "student";
  }

  getCourses() {
    console.log("Course!");
  }
}

const person = new User("Alex");
console.log(person);
console.log(person.getCourses());
console.log(person.testStatic);
// console.log(person.getRole('person@mail'));
console.log('\n');
console.log(User.getRole("User@mail"));
console.log(User.testStatic);
console.log('\n');

class Student extends User {
  constructor(name) {
    super(name);
  }
}

console.log(Student.getRole("Student@mail"));
console.log(Student.testStatic);