"use strict";

// const a = {
//   text: "Hello",
//   color: "red",
//   bold: "true",
//   show: function () {
//     console.log(this.color);
//   },

// };

// const b = {
//   fontSize: "24px",
//   __proto__: a,
// };

// const c = {
//   fontFamily: "Roboto",
//   __proto__: b,
// };

// console.log(c);
// c.show();
// console.log(c.hasOwnProperty('fontFamily'));
// console.log(c.hasOwnProperty('bold'));

const a = {
  text: "Hello",
  color: "red",
  bold: "true",
  show: function () {
    console.log(this.color);
  },
};

const b = {
  fontSize: "24px",
  __proto__: a,
};

const c = {
  fontFamily: "Roboto",
  __proto__: b,
};

// console.log(c);
// c.show();
// console.log(c.hasOwnProperty("fontFamily"));
// console.log(c.hasOwnProperty("bold"));

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

const user = {
  login: "",
  password: "",

  validatePassword: function () {
    if (this.password.length > 6) {
      return true;
    } else {
      return false;
    }
  },
};

console.log(user.validatePassword());

const userProfile = {
  username: "",
  photo: "",
  age: 0,
  __proto__: user,
};

userProfile.password = "Some passwrod";
userProfile.age = 25;
console.log(userProfile.age);
console.log(userProfile.validatePassword());
