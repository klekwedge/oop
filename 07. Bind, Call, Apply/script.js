"use strict";

const b1 = document.querySelector(".b1");
const b2 = document.querySelector(".b2");
const b3 = document.querySelector(".b3");
const b4 = document.querySelector(".b4");

function orange() {
  console.log(this);
  this.style.background = "orange";
  console.log("\n");
}

function red(message) {
  console.log(this);
  console.log(message);
  console.log("\n");
  this.style.background = "red";
}

function green(message) {
  console.log(this);
  console.log(message);
  console.log("\n");
  this.style.background = "green";
}

b1.addEventListener("click", orange);

b2.addEventListener("click", () => {
  red.call(b1, "Red!");
});

b3.addEventListener("click", () => {
  green.apply(b1, ["Green"]);
});

const instanceFunc = red.bind(b1, "instanceFunc - 1");
b4.addEventListener("click", instanceFunc);
