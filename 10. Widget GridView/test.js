class User {
  constructor(year) {
    this.year = year;
  }

  set name(name) {
    if (name !== "") {
      this._name = name;
      return true;
    }
    return false;
  }

  set surname(surname) {
    if (surname !== "") {
      this._surname = surname;
      return true;
    }
    return false;
  }

  get name() {
    return this._name;
  }
}

const person = new User('25')

// console.log(person.name = 'Bob')
// console.log(person)
// console.log('\n')


// if(person.name = ''){
//     console.log('Work!')
// }
// else{
//     console.log('Problem!')
// }

if(person.name = false){
    console.log('Work!')
}
else{
    console.log('Problem!')
}

console.log(person)
console.log(person.name)