"use strict";

class Rectangle {
  constructor(w, h) {
    this.width = w;
    this.height = h;
  }

  calcArea() {
    return this.width * this.height;
  }
}

const rect = new Rectangle(5, 10);

////////////////////////////////////////////////////////////////////////
// Наследование
////////////////////////////////////////////////////////////////////////

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `Фамилия: ${this.lastName}, Имя: ${this.firstName}`;
  }

  greeting() {
    console.log(`Привет, я человек и меня зовут ${this.firstName}`);
  }
}

const people = new Person("Alex", "Smith", 20);

console.log(people);
console.log(people.fullName);

class Employee extends Person {
  constructor(firstName, lastName, age, inn, phone, snils) {
    super(firstName, lastName, age);
    this.inn = inn;
    this.phone = phone;
    this.snils = snils;
  }

  greeting() {
    console.log(`Привет, я работник и меня зовут ${this.firstName}`);
  }
}

const employee = new Employee(
  "Micle",
  "Smith",
  20,
  "15",
  "8 999 999 99 99",
  "123"
);
console.log(employee);

class Developer extends Employee {
  constructor(firstName, lastName, age, inn, phone, snils, level) {
    super(firstName, lastName, age, inn, phone, snils);
    this.level = level;
  }

  greeting() {
    console.log(`Привет, я программист и меня зовут ${this.firstName}`);
  }
}

const programmer = new Developer(
  "Mike",
  "Smith",
  20,
  "15",
  "8 999 999 99 99",
  "123",
  "Junior"
);
console.log(programmer);
console.log(programmer.fullName);

////////////////////////////////////////////////////////////////////////
// Полиморфизм
////////////////////////////////////////////////////////////////////////
people.greeting();
employee.greeting();
programmer.greeting();

const personList = [people, employee, programmer];

function massGreeting(persons) {
  for (let i = 0; i < persons.length; i++) {
    const person = persons[i];
    person.greeting();
  }
}

massGreeting(personList);

////////////////////////////////////////////////////////////////////////
// Композиция и Агрегация
////////////////////////////////////////////////////////////////////////

class Engine {
  drive() {
    console.log("Двигатель работает!");
  }
}

class Wheel {
  drive() {
    console.log("Колесо работает!");
  }
}

class Freshener {}

class Car {
  constructor(freshener) {
    // Агрегация
    this.freshener = freshener;
    // Композиция
    this.engine = new Engine();
    this.wheels = [];
    this.wheels.push(new Wheel());
    this.wheels.push(new Wheel());
    this.wheels.push(new Wheel());
    this.wheels.push(new Wheel());
  }

  // Делегирование
  drive() {
    this.engine.drive();
    for (let i = 0; i < this.wheels.length; i++) {
      this.wheels[i].drive();
    }
  }
}

const audi = new Car(new Freshener());
console.log(audi);
audi.drive();

////////////////////////////////////////////////////////////////////////
// Интерфейсы и абстрактные классы
////////////////////////////////////////////////////////////////////////
