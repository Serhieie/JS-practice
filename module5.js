//THIS ТА ГОЛОВНІ БОЛІ//THIS ТА ГОЛОВНІ БОЛІ//THIS ТА ГОЛОВНІ БОЛІ//THIS ТА ГОЛОВНІ БОЛІ//THIS ТА ГОЛОВНІ БОЛІ
//THIS ТА ГОЛОВНІ БОЛІ//THIS ТА ГОЛОВНІ БОЛІ//THIS ТА ГОЛОВНІ БОЛІ//THIS ТА ГОЛОВНІ БОЛІ//THIS ТА ГОЛОВНІ БОЛІ
//THIS ТА ГОЛОВНІ БОЛІ//THIS ТА ГОЛОВНІ БОЛІ//THIS ТА ГОЛОВНІ БОЛІ//THIS ТА ГОЛОВНІ БОЛІ//THIS ТА ГОЛОВНІ БОЛІ
// const user = {
//   tag: "mango",
//   showTag() {
//     console.log("showtag - this ", this);
//     console.log("showtag - this.tag ", this.tag);
//   },
// };
// user.showTag();

// const xyz = user.showTag;

// xyz(); //undefind this.tag та ссилка на window у this

// // трохи сложніше// // трохи сложніше// // трохи сложніше// // трохи сложніше// // трохи сложніше
// const invokeAction = function (action) {
//   console.log(action);

//   action();
// };

// invokeAction(user.showTag); // теж андефайнд

//ЩЕ ПРИКЛАД THIS //ЩЕ ПРИКЛАД THIS //ЩЕ ПРИКЛАД THIS //ЩЕ ПРИКЛАД THIS //ЩЕ ПРИКЛАД THIS //ЩЕ ПРИКЛАД THIS
// const fn = function () {
//   console.log("fn -> this ", this);
// };
// fn(); //знову андевайнд

// const book = {
//   title: "react for beginers ",
//   showThis() {
//     console.log("show -> this", this);
//   },
//   showTitle() {
//     console.log("show -> this.title", this.title);
//   },
// };

// book.showThis();
// book.showTitle();
//ЗНОВУ ТРОХИ THIS //ЗНОВУ ТРОХИ THIS //ЗНОВУ ТРОХИ THIS //ЗНОВУ ТРОХИ THIS //ЗНОВУ ТРОХИ THIS
// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log("changeColor -> this ", this);
//   };
//   return changeColor;
// };

// const updateColor = makeChangeColor();
// updateColor("yellow");

// const hat = {
//   color: "blue",
//   updateColor,
// };

// ОСЬ ТАК ТРЕБА ВИЗИВАТИ ЗИС // ОСЬ ТАК ТРЕБА ВИЗИВАТИ ЗИС // ОСЬ ТАК ТРЕБА ВИЗИВАТИ ЗИС // ОСЬ ТАК ТРЕБА ВИЗИВАТИ ЗИС
// ОСЬ ТАК ТРЕБА ВИЗИВАТИ ЗИС // ОСЬ ТАК ТРЕБА ВИЗИВАТИ ЗИС // ОСЬ ТАК ТРЕБА ВИЗИВАТИ ЗИС // ОСЬ ТАК ТРЕБА ВИЗИВАТИ ЗИСc
// const counter = {
//   value: 0,
//   increment(value) {
//     console.log("increment -> this ", this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log("decrement -> this", this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };
// updateCounter(5, counter.increment.bind(counter));
// updateCounter(10, counter.decrement.bind(counter));

//ще варіанти//ще варіанти//ще варіанти//ще варіанти//ще варіанти//ще варіанти//ще варіанти//ще варіанти//ще варіанти//ще варіанти
//ще варіанти//ще варіанти//ще варіанти//ще варіанти//ще варіанти//ще варіанти//ще варіанти//ще варіанти//ще варіанти//ще варіанти

// const showThis = function () {
//   //   console.log("show ->this", this);
// };

// showThis();

// const objA = {
//   a: 5,
//   b: 10,
// };

// showThis.call(objA, 10, 20, 3, 4, 15, 20);

// const changeColor = function (color) {
//   console.log("changeColor ->this ", this);
//   this.color = color;
// };

// const hat = {
//   color: "black",
// };

// // changeColor.call(hat, "orange");

// // console.log(hat);

// const sweater = {
//   color: "green",
// };

// // changeColor.call(sweater, "pink");
// // console.log(sweater);

// const changeHatColor = changeColor.bind(hat);
// changeHatColor("orange");
// console.log(hat);

// const changeSweaterColor = changeColor.bind(sweater);
// changeSweaterColor("deep pink");
// console.log(sweater);

// ЗБИТИ ЛІЧИЛЬНИК// ЗБИТИ ЛІЧИЛЬНИК// ЗБИТИ ЛІЧИЛЬНИК// ЗБИТИ ЛІЧИЛЬНИК// ЗБИТИ ЛІЧИЛЬНИК// ЗБИТИ ЛІЧИЛЬНИК// ЗБИТИ ЛІЧИЛЬНИК// ЗБИТИ ЛІЧИЛЬНИК
// ЗБИТИ ЛІЧИЛЬНИК// ЗБИТИ ЛІЧИЛЬНИК// ЗБИТИ ЛІЧИЛЬНИК// ЗБИТИ ЛІЧИЛЬНИК// ЗБИТИ ЛІЧИЛЬНИК// ЗБИТИ ЛІЧИЛЬНИК// ЗБИТИ ЛІЧИЛЬНИК// ЗБИТИ ЛІЧИЛЬНИК
// ЗБИТИ ЛІЧИЛЬНИК// ЗБИТИ ЛІЧИЛЬНИК// ЗБИТИ ЛІЧИЛЬНИК// ЗБИТИ ЛІЧИЛЬНИК// ЗБИТИ ЛІЧИЛЬНИК// ЗБИТИ ЛІЧИЛЬНИК// ЗБИТИ ЛІЧИЛЬНИК// ЗБИТИ ЛІЧИЛЬНИК
// ЗБИТИ ЛІЧИЛЬНИК// ЗБИТИ ЛІЧИЛЬНИК// ЗБИТИ ЛІЧИЛЬНИК// ЗБИТИ ЛІЧИЛЬНИК// ЗБИТИ ЛІЧИЛЬНИК// ЗБИТИ ЛІЧИЛЬНИК// ЗБИТИ ЛІЧИЛЬНИК// ЗБИТИ ЛІЧИЛЬНИК
const counter = {
  value: 0,
  increment(value) {
    this.value += 1;
  },
  decrement(value) {
    this.value -= 1;
  },
};

const decrementBtn = document.querySelector(".js-decrement");
const incrementBtn = document.querySelector(".js-increment");
const valueEl = document.querySelector(".js-value");

decrementBtn.addEventListener("click", function () {
  counter.decrement();
  console.log(counter);
  valueEl.textContent = counter.value;
});
incrementBtn.addEventListener("click", function () {
  counter.increment();
  console.log(counter);
  valueEl.textContent = counter.value;
});
