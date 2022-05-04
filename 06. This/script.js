"use strict";

class User {
  constructor(name) {
    this.name = name;
  }

  showThis() {
    console.log(this);
  }
}

const person = new User("Alex");
console.log(person)
person.showThis();
console.log('\n')


class Student extends User {
  constructor(name, nickName) {
    super(name);
    this.nickName =nickName;
    console.log(this.name)
  }
}


const student = new Student("Nick", 'nick123');
console.log(student)
student.showThis();