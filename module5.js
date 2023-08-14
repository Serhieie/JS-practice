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
// const counter = {
//   value: 0,
//   increment(value) {
//     this.value += 1;
//   },
//   decrement(value) {
//     this.value -= 1;
//   },
// };

// const decrementBtn = document.querySelector(".js-decrement");
// const incrementBtn = document.querySelector(".js-increment");
// const valueEl = document.querySelector(".js-value");

// decrementBtn.addEventListener("click", function () {
//   counter.decrement();
//   console.log(counter);
//   valueEl.textContent = counter.value;
// });
// incrementBtn.addEventListener("click", function () {
//   counter.increment();
//   console.log(counter);
//   valueEl.textContent = counter.value;
// });

//ПРОТОТИПИ //ПРОТОТИПИ //ПРОТОТИПИ //ПРОТОТИПИ //ПРОТОТИПИ //ПРОТОТИПИ //ПРОТОТИПИ //ПРОТОТИПИ //ПРОТОТИПИ
//ПРОТОТИПИ //ПРОТОТИПИ //ПРОТОТИПИ //ПРОТОТИПИ //ПРОТОТИПИ //ПРОТОТИПИ //ПРОТОТИПИ //ПРОТОТИПИ //ПРОТОТИПИ //ПРОТОТИПИ
//ПРОТОТИПИ //ПРОТОТИПИ //ПРОТОТИПИ //ПРОТОТИПИ //ПРОТОТИПИ //ПРОТОТИПИ //ПРОТОТИПИ //ПРОТОТИПИ //ПРОТОТИПИ //ПРОТОТИПИ
//ПРОТОТИПИ //ПРОТОТИПИ //ПРОТОТИПИ //ПРОТОТИПИ //ПРОТОТИПИ //ПРОТОТИПИ //ПРОТОТИПИ //ПРОТОТИПИ //ПРОТОТИПИ //ПРОТОТИПИ
// const objC = {
//   z: 5,
// };

// console.log("objC ->", objC);

// const objB = Object.create(objC);
// objB.y = 2;

// console.log("objB ->", objB);

// const objA = Object.create(objB);
// objA.x = 1;

// console.log("objA ->", objA.y);

// const dummyObj = Object.create({ message: "Це характеристика обєкту прототипу" });
// dummyObj.message = "Це своя якість обєкта";

// console.log("dummyObj", dummyObj);
// console.log("dummyObj", dummyObj.message);

// const Car = function ({ model, brand, price } = {}) {
//   this.model = model;
//   this.brand = brand;
//   this.price = price;

//   this.changePrice = function (newPrice) {
//     this.price = newPrice;
//   };
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// Car.prototype.sayHi = function () {
//   console.log("Car.prototype.sayHi -> this", this);
//   console.log("Hello  ;) ");
// };

// console.log(Car.prototype);

// const myCar = new Car({
//   brand: "audi",
//   model: "q3",
//   price: 35000,
// });
// const myCar2 = new Car({
//   brand: "BMW",
//   model: "X5",
//   price: 150000,
// });
// const myCar3 = new Car({
//   brand: "Ford",
//   model: "volt",
//   price: 27000,
// });

// console.log(myCar);
// myCar.sayHi();
// myCar.changePrice(38000);
// console.log(myCar2);
// myCar2.sayHi();
// console.log(myCar3);
// myCar3.sayHi();

//Приклад з прототипом//Приклад з прототипом//Приклад з прототипом//Приклад з прототипом//Приклад з прототипом
//Приклад з прототипом//Приклад з прототипом//Приклад з прототипом//Приклад з прототипом//Приклад з прототипом//Приклад з прототипом
// //Приклад з прототипом//Приклад з прототипом//Приклад з прототипом//Приклад з прототипом//Приклад з прототипом//Приклад з прототипом
// const User = function ({ email, password } = {}) {
//   this.email = email;
//   this.password = password;
// };

// User.prototype.changeEmail = function (newMail) {
//   this.email = newMail;
// };

// const Bohd = new User({ email: "wewe12123@gmail.com", password: "12121212" });
// Bohd.changeEmail("theninjainme@gmail.com");

//СТАТИЧНІ СВОЙСТВА ТА МЕТОДИ //СТАТИЧНІ СВОЙСТВА ТА МЕТОДИ //СТАТИЧНІ СВОЙСТВА ТА МЕТОДИ //СТАТИЧНІ СВОЙСТВА ТА МЕТОДИ
//СТАТИЧНІ СВОЙСТВА ТА МЕТОДИ //СТАТИЧНІ СВОЙСТВА ТА МЕТОДИ //СТАТИЧНІ СВОЙСТВА ТА МЕТОДИ //СТАТИЧНІ СВОЙСТВА ТА МЕТОДИ //СТАТИЧНІ СВОЙСТВА ТА МЕТОДИ
//СТАТИЧНІ СВОЙСТВА ТА МЕТОДИ //СТАТИЧНІ СВОЙСТВА ТА МЕТОДИ //СТАТИЧНІ СВОЙСТВА ТА МЕТОДИ //СТАТИЧНІ СВОЙСТВА ТА МЕТОДИ
//СТАТИЧНІ СВОЙСТВА ТА МЕТОДИ //СТАТИЧНІ СВОЙСТВА ТА МЕТОДИ //СТАТИЧНІ СВОЙСТВА ТА МЕТОДИ //СТАТИЧНІ СВОЙСТВА ТА МЕТОДИ
//Cтатичні свойства та методи доступні тільки на самому  конструкторі
//В статичних методах немає this

// console.log(Bohd);
// User.message = "Я статичне свойство мене немає на єкземплярі";
// User.logInfo = function (obj) {
//   console.log("this is Bohd(User) logInfo - > obj", obj);
//   console.log("Email: ", obj.email);
//   console.log("Password: ", obj.password);
// };

// User.logInfo(Bohd);

// console.dir(User);

// console.log(Math.round(5.232));
// console.log(Math.PI);
