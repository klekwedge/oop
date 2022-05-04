"use strict";

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  validatePassword() {
    console.log('Hello!')
    if (this.password.length > 6) {
      return true;
    }

    return false;
  }
}

const login = "Ivan";
const pass = "Password";

const person = new User(login, pass);

console.log(person);
console.log(person.password);
console.log(person.validatePassword());

console.log('\n');


class Student extends User {
  constructor(username, password, nickname) {
    super(username, password);
    this.nickname = nickname;
  }

  validatePassword() {
    super.validatePassword();
    if (this.password.length > 10) {
      return true;
    }

    return false;
  }

  getStudentCourses() {
    return [1, 2];
  }
}

const firstStudent = new Student(login, pass, "Ivan101");

console.log(firstStudent);
console.log(firstStudent.password);
console.log(firstStudent.validatePassword());
console.log(firstStudent.getStudentCourses());