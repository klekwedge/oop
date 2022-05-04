"use strict";

// Приватные (#)
// Защищенные (_) Protected
// Public

class User {
  constructor() {
    // this._name = name;
  }

  // setNameObj(name) {
  //   this._name = name.trim().toLowerCase();
  // }

  #test = "Private #";
  set name(name) {
    console.log(this.#test);
    this._name = name.trim().toLowerCase();
  }

  get name() {
    return this._name;
  }
}

// const person = new User('Ivan');
const person = new User();
// person.setNameObj("Alex");
console.log(person);
person.name = "Nick";
console.log(person.name);
console.log('\n');


class NewObjUser extends User {
  
}

const newPerson = new NewObjUser();
console.log(newPerson);
newPerson.name = 'Mike'