const droidPrice = 50;
const delivery = "free";
const fee = 3;

// console.log(droidPrice * fee);
// console.log(fee);
// console.log(delivery);

// const shouldRenew = confirm("Введіть ваше ім'я");
// console.log(shouldRenew);

// let quantity = prompt("Що, як справи? Яка зараз година?");
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// let elementWidth = "50px";
// const result = Number.parseInt(elementWidth);
// console.log(result);

// //

// let elementHeight = "200.74";
// elementHeight = Number.parseFloat(elementHeight);
// console.log(elementHeight);
// //

// let selary = 1300.16472;
// selary = Number(selary.toFixed(2));
// console.log(selary);

//

// let quantity = "30";
// let value = "цю строку неможливо привести до числа ";
// console.log(Number("value"));

//Як возвести в степень//Як возвести в степень//Як возвести в степень//Як возвести в степень//Як возвести в степень//Як возвести в степень//Як возвести в степень//Як возвести в степень//Як возвести в степень

// let base = 2;
// let power = 5;
// let result = Math.pow(base, power);

// console.log(base ** power);
// console.log(result);
// let base = prompt("число");
// base = Number(base);
// console.log(base + 20);

//

// let power = prompt("степень");
// power = Number(power);
// console.log(power);
// let result = Math.pow(base, power);
// console.log(result);

//  ГЕНЕРАТОР ВИПАДКОВИХ ЧИСЕЛ //  ГЕНЕРАТОР ВИПАДКОВИХ ЧИСЕЛ//  ГЕНЕРАТОР ВИПАДКОВИХ ЧИСЕЛ//  ГЕНЕРАТОР ВИПАДКОВИХ ЧИСЕЛ//  ГЕНЕРАТОР ВИПАДКОВИХ ЧИСЕЛ//  ГЕНЕРАТОР ВИПАДКОВИХ ЧИСЕЛ

// const max = 100;
// const min = 1;

// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

// ГЕНЕРАТОР БЄКГРАУНД КОЛЬОРУ
// const colors = ["tomato", "teal", "green", "deeppink"];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];

// document.body.style.backgroundColor = color;

// console.log(color);

// ЗАрплата для працивныкив// ЗАрплата для працивныкив// ЗАрплата для працивныкив// ЗАрплата для працивныкив// ЗАрплата для працивныкив

//
// const minSalary = 500;
// const maxSalary = 1500;
// const emloyers = 23;
// let totalSalary = 0;

// for (let i = 0; i <= emloyers; i += 1) {
//   const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//   console.log(`Salary of worker ${i} - ${salary}`);

//   totalSalary += salary;
// }

// console.log("totalSalary", totalSalary);

// Недостатьно коштів// Недостатьно коштів// Недостатьно коштів// Недостатьно коштів// Недостатьно коштів// Недостатьно коштів// Недостатьно коштів// Недостатьно коштів

// let balance = 3000;
// const payment = 2000;
// console.log(
//   `Загальна вартість замовлення ${payment} гривень. Перевіряємо кількість доступних коштів на рахунку`
// );

// if (payment <= balance) {
//   balance -= payment;
//   console.log(`Все добре, знімаємо кошти... Дякуємо за покупку!`);
//   console.log;
//   `На рахунку залишилось ${balance} гривень`;
// } else {
//   console.log(`На рахунку недостатньо коштів для виконання операції! `);
// }

// console.log(` Операція виконана`);

// awdawdad
// let totalSpent = 2000;
// let payment = 500;
// let discount = 0;

//  Всього потрачено коштів і Дісконт відносний цих коштів //  Всього потрачено коштів і Дісконт відносний цих коштів //  Всього потрачено коштів і Дісконт відносний цих коштів
// if (totalSpent < 100) {
//   console.log("Not a partner, discount 0%");
// } else if (totalSpent >= 100 && totalSpent < 1000) {
//   console.log("Bronze partner, discount 2%");
//   discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   console.log(`Silver partner, discount 5%`);
//   discount = 0.05;
// } else {
//   console.log(`Gold partner, discount 10%`);
//   discount = 0.1;
// }

// payment = payment - payment * discount;

// console.log(`making order for ${payment}  with discount ${discount * 100}`);

// totalSpent += payment;
// console.log(`Spended money ${totalSpent}`);

//  EVENT LISTENER ADDED TO BUTTON and input//  EVENT LISTENER ADDED TO BUTTON and input//  EVENT LISTENER ADDED TO BUTTON and input//  EVENT LISTENER ADDED TO BUTTON and input

// const btnAdd = document.querySelector("button[data-add]");
// const valueInput = document.querySelector("input[data-value]");
// const valueOutput = document.querySelector(".js-output span");
// const valueReset = document.querySelector("button[data-reset]");
// let total = 0;

// console.log(valueOutput);

// btnAdd.addEventListener("click", function () {
//   console.log("click !!!@#!#@!#");
//   const value = Number(valueInput.value);
//   console.log(value);
//   total += value;
//   valueOutput.textContent = total;

//   valueInput.value = "";
// });

// valueReset.addEventListener("click", function () {
//   valueOutput.textContent = 0;
// });

// Як багато символів у повідомленні // Як багато символів у повідомленні // Як багато символів у повідомленні
// const message = "how many symbols is here?";
// console.log(message.length);
// //
// const firstName = "Gilbert";
// const secondName = "Jimbo";
// const fullName = firstName + " " + secondName;

// console.log(fullName);

// //
// const room = 716;
// const type = "VIP";
// const welcoming = " Welcome " + fullName;
// console.log(welcoming);
// //
// const quantity = 5;

// МАССІВИ ТА РОБОТА З ІНДЕКСАМИ // МАССІВИ ТА РОБОТА З ІНДЕКСАМИ // МАССІВИ ТА РОБОТА З ІНДЕКСАМИ// МАССІВИ ТА РОБОТА З ІНДЕКСАМИ// МАССІВИ ТА РОБОТА З ІНДЕКСАМИ

//
// const orderMsg = "You ordered some 5 things";
// const friends = ["mangol", "max", "Karina", "Eva"];
// console.table(friends);

// friends[1] = "13123123";
// console.table(friends);

// const lastIndex = friends.length - 1;
// console.log(lastIndex);

//Пам'ять передача по значенню //Пам'ять передача по значенню //Пам'ять передача по значенню //Пам'ять передача по значенню //Пам'ять передача по значенню
// let a = 10;
// let b = a;

// console.log(a);
// console.log(b);

// a = 20;

// console.log(a);
// console.log(b);

//Пам'ять передача по ссилці //Пам'ять передача по ссилці//Пам'ять передача по ссилці//Пам'ять передача по ссилці//Пам'ять передача по ссилці

// let a = ["mango", "arial", "bingo"];

// const b = a;
// console.log("a", a);
// console.log("b", b);

// a[0] = 500;

// console.log("a", a);
// console.log("b", b);
// console.log(a === b); //true

// console.log([1, 2, 3] === [1, 2, 3]); //false

//Перебираємо масив//Перебираємо масив//Перебираємо масив//Перебираємо масив//Перебираємо масив//Перебираємо масив//Перебираємо масив//Перебираємо масив
// const friends = ["mango", "arial", "bingo"];
// console.table(friends);

// // const lastIndex = friends.length - 1;//довгий варіант перечислення

// for (let i = 0; i < friends.length; i += 1) {
//   //короткий варіант перечислення
//   // console.log(friends[i]);//перечислюємо список
//   friends[i] += "-1"; //Доповвнюємо єлементи списку
// }

// console.table(friends);

//Коротке перечислення друзів //Коротке перечислення друзів //Коротке перечислення друзів //Коротке перечислення друзів //Коротке перечислення друзів //Коротке перечислення друзів
//Коротке перечислення друзів //Коротке перечислення друзів //Коротке перечислення друзів //Коротке перечислення друзів //Коротке перечислення друзів //Коротке перечислення друзів
// const friends = ["mango", "arial", "bingo"];
// // console.table(friends);
// for (const friend of friends) {
// }
// console.table(friends);

//ПОСЧІТАТЬ ПРОДУКТИ В КОРЗІНЕ СУММУ массіва //ПОСЧІТАТЬ ПРОДУКТИ В КОРЗІНЕ СУММУ массіва //ПОСЧІТАТЬ ПРОДУКТИ В КОРЗІНЕ СУММУ массіва //ПОСЧІТАТЬ ПРОДУКТИ В КОРЗІНЕ СУММУ массіва
//ПОСЧІТАТЬ ПРОДУКТИ В КОРЗІНЕ СУММУ массіва //ПОСЧІТАТЬ ПРОДУКТИ В КОРЗІНЕ СУММУ массіва //ПОСЧІТАТЬ ПРОДУКТИ В КОРЗІНЕ СУММУ массіва //ПОСЧІТАТЬ ПРОДУКТИ В КОРЗІНЕ СУММУ массіва
//ПОСЧІТАТЬ ПРОДУКТИ В КОРЗІНЕ СУММУ массіва //ПОСЧІТАТЬ ПРОДУКТИ В КОРЗІНЕ СУММУ массіва //ПОСЧІТАТЬ ПРОДУКТИ В КОРЗІНЕ СУММУ массіва //ПОСЧІТАТЬ ПРОДУКТИ В КОРЗІНЕ СУММУ массіва

// const cart = [54, 23, 22, 332, 421, 24, 1123];
// let total = 0;
// // for (let i = 0; i < cart.length; i += 1) {
// // console.log(cart[i]);
// //   total += cart[i];
// // }
// // console.log("total: ", total);

// //ПОСЧІТАТЬ ПРОДУКТИ В КОРЗІНЕ СУММУ массіва КОРОТКО //ПОСЧІТАТЬ ПРОДУКТИ В КОРЗІНЕ СУММУ массіва //ПОСЧІТАТЬ ПРОДУКТИ В КОРЗІНЕ СУММУ массіва
// //ПОСЧІТАТЬ ПРОДУКТИ В КОРЗІНЕ СУММУ массіва КОРОТКО //ПОСЧІТАТЬ ПРОДУКТИ В КОРЗІНЕ СУММУ массіва //ПОСЧІТАТЬ ПРОДУКТИ В КОРЗІНЕ СУММУ массіва
// //ПОСЧІТАТЬ ПРОДУКТИ В КОРЗІНЕ СУММУ массіва КОРОТКО //ПОСЧІТАТЬ ПРОДУКТИ В КОРЗІНЕ СУММУ массіва //ПОСЧІТАТЬ ПРОДУКТИ В КОРЗІНЕ СУММУ массіва
// for (const value of cart) {
//   total += value;
// }

// console.log("total: ", total);

// РОБИМО НАЦІНКУ АБО НАЛОГ НА ТОВАРИ В КОРЗИНІ ВИЩЕ// РОБИМО НАЦІНКУ АБО НАЛОГ НА ТОВАРИ В КОРЗИНІ ВИЩЕ// РОБИМО НАЦІНКУ АБО НАЛОГ НА ТОВАРИ В КОРЗИНІ ВИЩЕ
// РОБИМО НАЦІНКУ АБО НАЛОГ НА ТОВАРИ В КОРЗИНІ ВИЩЕ// РОБИМО НАЦІНКУ АБО НАЛОГ НА ТОВАРИ В КОРЗИНІ ВИЩЕ// РОБИМО НАЦІНКУ АБО НАЛОГ НА ТОВАРИ В КОРЗИНІ ВИЩЕ
// РОБИМО НАЦІНКУ АБО НАЛОГ НА ТОВАРИ В КОРЗИНІ ВИЩЕ// РОБИМО НАЦІНКУ АБО НАЛОГ НА ТОВАРИ В КОРЗИНІ ВИЩЕ// РОБИМО НАЦІНКУ АБО НАЛОГ НА ТОВАРИ В КОРЗИНІ ВИЩЕ
// const cart = [54, 23, 22, 332, 421, 24, 1123];
// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = Math.round(cart[i] * 1.1); //10% НАЦІНКА
// }

// console.log(cart);

// РОБИМО НАЦІНКУ АБО НАЛОГ НА ТОВАРИ В КОРЗИНІ  НЕ ЗМІНИТЬСЯ З "FOR OF"
// РОБИМО НАЦІНКУ АБО НАЛОГ НА ТОВАРИ В КОРЗИНІ  НЕ ЗМІНИТЬСЯ З "FOR OF"
// РОБИМО НАЦІНКУ АБО НАЛОГ НА ТОВАРИ В КОРЗИНІ  НЕ ЗМІНИТЬСЯ З "FOR OF"
// const cart = [54, 23, 22, 332, 421, 24, 1123];
// for (value of cart) {
//   value = Math.round(cart[i] * 1.1); //10% НАЦІНКА
// }
// console.log(cart);

// РАХУЄМО УСІ ЧОТНІ ЧИСЛА У МАССИВІ
// РАХУЄМО УСІ ЧОТНІ ЧИСЛА У МАССИВІ
// РАХУЄМО УСІ ЧОТНІ ЧИСЛА У МАССИВІ
// РАХУЄМО УСІ ЧОТНІ ЧИСЛА У МАССИВІ

// const numbers = [54, 23, 22, 332, 421, 24, 1123, 20, 2, 4, 8, 102, 144, 356, 3, 7, 99];
// let total = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
//   if (numbers[i] % 2 === 0) {
//     //(numbers[i] % 2 !== 0) ТАК НОХОДИТИ НЕ ЧОТНІ
//     console.log("Четное!!!");
//     total += numbers[i];
//   }
// }

// console.log("TOTAL:  :", total);

//ЛОКАЛЬНА ПЕРЕМЕННА//ЛОКАЛЬНА ПЕРЕМЕННА
////ЛОКАЛЬНА ПЕРЕМЕННА//ЛОКАЛЬНА ПЕРЕМЕННА

// const numbers = [54, 23, 22, 332, 421, 24, 1123, 20, 2, 4, 8, 102, 144, 356, 3, 7, 99];
// let total = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//   const number = numbers[i];
//   console.log(number);
//   if (number % 2 === 0) {
//     //(numbers[i] % 2 !== 0) ТАК НОХОДИТИ НЕ ЧОТНІ
//     console.log("Четное!!!");
//     total += number;
//   }
// }

// console.log("TOTAL:  :", total);

// РАХУЄМО УСІ ЧОТНІ ЧИСЛА У МАССИВІ СПОЧАТКУ НЕ ЧОТНІ
// РАХУЄМО УСІ ЧОТНІ ЧИСЛА У МАССИВІСПОЧАТКУ НЕ ЧОТНІ
// РАХУЄМО УСІ ЧОТНІ ЧИСЛА У МАССИВІСПОЧАТКУ НЕ ЧОТНІ
// РАХУЄМО УСІ ЧОТНІ ЧИСЛА У МАССИВІ СПОЧАТКУ НЕ ЧОТНІ

// const numbers = [54, 23, 22, 332, 421, 24, 1123, 20, 2, 4, 8, 102, 144, 356, 3, 7, 99];
// let total = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//   const number = numbers[i];
//   if (number % 2 !== 0) {
//     //(numbers[i] % 2 !== 0) ТАК НОХОДИТИ НЕ ЧОТНІ
//     console.log("Цю єтерацію треба пропустити!", number);
//     continue;
//   }
//   console.log(`${number} - Чотне!`);
//   total += number;
// }

// console.log("TOTAL:  :", total);

//ПЕРЕБЫРАЭМО ЛОГІН
//ПЕРЕБЫРАЭМО ЛОГІН
//ПЕРЕБЫРАЭМО ЛОГІН
//ПЕРЕБЫРАЭМО ЛОГІН

// const logins = [
//   "Drinya 64",
//   "BATYA@24",
//   "MortalDROID",
//   "FIaskO010",
//   "Lasossi",
//   "PikaPER",
// ];
// const loginToFind = "Lasossi";
// let message = "";
// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];

//   if (login === loginToFind) {
//     message = `Користувач ${loginToFind} Знайден!`;
//     break;
//   } else {
//     message = `Користувач ${loginToFind} Не знайден!`;
//   }
// }
// console.log(message);

//ПЕРЕБЫРАЭМО ЛОГІН З 'FOR OF"
//ПЕРЕБЫРАЭМО ЛОГІН З 'FOR OF"
//ПЕРЕБЫРАЭМО ЛОГІН З 'FOR OF"
//ПЕРЕБЫРАЭМО ЛОГІН З 'FOR OF" та includes
// const logins = [
//   "Drinya 64",
//   "BATYA@24",
//   "MortalDROID",
//   "FIaskO010",
//   "Lasossi",
//   "PikaPER",
// ];
// const loginToFind = "Lasossi";
// let message = "";

// // for (const login of logins) {
// //   console.log("Login    :", login);
// //   console.log(`${login} === ${loginToFind}: `, login === loginToFind);
// //   if (login === loginToFind) {
// //     console.log("FINDED");
// //     message = `користувач ${loginToFind} Знайден!`;
// //     break;
// //   }
// // }

// console.log(logins.includes("Lasossi"));

//ПЕРЕБЫРАЭМО ЛОГІН З  Тернальний вираз
//ПЕРЕБЫРАЭМО ЛОГІН З  Тернальний вираз
//ПЕРЕБЫРАЭМО ЛОГІН З  Тернальний вираз
//ПЕРЕБЫРАЭМО ЛОГІН З  Тернальний вираз абстракція

// const logins = [
//   "Drinya 64",
//   "BATYA@24",
//   "MortalDROID",
//   "FIaskO010",
//   "Lasossi",
//   "PikaPER",
// ];
// const loginToFind = "Lasossi";
// // const message = " ";
// const message = logins.includes(loginToFind)
//   ? `User ${loginToFind} are finded`
//   : `User ${loginToFind} are not finded`;
// console.log(message);

//САМОЕ МАЛЕНЬКОЕ ЧІСЛО В СПІСКЕ
//САМОЕ МАЛЕНЬКОЕ ЧІСЛО В СПІСКЕ
//САМОЕ МАЛЕНЬКОЕ ЧІСЛО В СПІСКЕ
//САМОЕ МАЛЕНЬКОЕ ЧІСЛО В СПІСКЕ

// const numbers = [54, 23, 22, 332, 421, 24, 1123, 20, 2, 4, 8, 102, 144, 356, 3, 7, 99];
// let smallestNumber = numbers[0];
// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }

// console.log("smallestNumber:  ", smallestNumber);

//CШИТИ МАССИВИ//CШИТИ МАССИВИ //CШИТИ МАССИВИ//CШИТИ МАССИВИ
//CШИТИ МАССИВИ//CШИТИ МАССИВИ//CШИТИ МАССИВИ//CШИТИ МАССИВИ
//CШИТИ МАССИВИ//CШИТИ МАССИВИ//CШИТИ МАССИВИ//CШИТИ МАССИВИ
//CШИТИ МАССИВИ//CШИТИ МАССИВИ//CШИТИ МАССИВИ//CШИТИ МАССИВИ

// const friends = ["mangol", "max", "Karina", "Eva"];
// // let string = "";

// // for (const friend of friends) {
// //   string += friend + ",";
// // }

// // string = string.slice(0, string.length - 1);

// const string = friends.join("---");
// console.log(string);
// console.log(friends);

//Замінити регістри у массиві //Замінити регістри у массиві  //Замінити регістри у массиві //Замінити регістри у массиві
//Замінити регістри у массиві //Замінити регістри у массиві //Замінити регістри у массиві //Замінити регістри у массиві
//Замінити регістри у массиві //Замінити регістри у массиві
//Замінити регістри у массиві //Замінити регістри у массиві
//Замінити регістри у массиві //Замінити регістри у массиві

// const string = "JavaScript";
// const letters = string.split("");
// let invertedString = " ";
// console.log(letters);

// for (const letter of letters) {
//   console.log(letter);

//   // if (letter === letter.toLowerCase()) {
//   //   console.log(`ця ббуква у нижньому регістрі!!! - `, letter);
//   //   invertedString += letter.toUpperCase();
//   // } else {
//   //   invertedString += letter.toLowerCase();
//   // }

//   invertedString +=
//     letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
// }

// console.log(invertedString);

// зробити зшиту строку з символами // зробити зшиту строку з символами // зробити зшиту строку з символами
// зробити зшиту строку з символами // зробити зшиту строку з символами // зробити зшиту строку з символами
// зробити зшиту строку з символами // зробити зшиту строку з символами // зробити зшиту строку з символами
// зробити зшиту строку з символами // зробити зшиту строку з символами // зробити зшиту строку з символами
// зробити зшиту строку з символами // зробити зшиту строку з символами // зробити зшиту строку з символами
// зробити зшиту строку з символами // зробити зшиту строку з символами // зробити зшиту строку з символами

// const title = "Top 10 benefits of React Framework";
// // const normalizedTitle = title.toLowerCase();
// // console.log(normalizedTitle);
// // const words = normalizedTitle.split(" ");
// // console.log(words);

// // const slug = words.join("-");
// // console.log(slug);

// const slug1 = title.toLowerCase().split(" ").join("-"); //метод визову
// console.log(slug1);

//ЗАДАЧА ПОРПХУВАТИ СУММУ ДВУХ МАСИВІВ //ЗАДАЧА ПОРПХУВАТИ СУММУ ДВУХ МАСИВІВ //ЗАДАЧА ПОРПХУВАТИ СУММУ ДВУХ МАСИВІВ
//ЗАДАЧА ПОРПХУВАТИ СУММУ ДВУХ МАСИВІВ //ЗАДАЧА ПОРПХУВАТИ СУММУ ДВУХ МАСИВІВ //ЗАДАЧА ПОРПХУВАТИ СУММУ ДВУХ МАСИВІВ
//ЗАДАЧА ПОРПХУВАТИ СУММУ ДВУХ МАСИВІВ //ЗАДАЧА ПОРПХУВАТИ СУММУ ДВУХ МАСИВІВ //ЗАДАЧА ПОРПХУВАТИ СУММУ ДВУХ МАСИВІВ
//ЗАДАЧА ПОРПХУВАТИ СУММУ ДВУХ МАСИВІВ //ЗАДАЧА ПОРПХУВАТИ СУММУ ДВУХ МАСИВІВ //ЗАДАЧА ПОРПХУВАТИ СУММУ ДВУХ МАСИВІВ //ЗАДАЧА ПОРПХУВАТИ СУММУ ДВУХ МАСИВІВ
// const numbers = [54, 23, 22, 332, 421, 24, 1123, 20, 2, 4, 8, 102, 144, 356, 3, 7, 99];
// const numbers1 = [541, 123, 222, 332, 20, 22, 42, 38, 102, 144, 356, 33, 71, 999];
// let total = 0;

// // for (let i = 0; i < numbers.length; i += 1) { //Зплюсовуємо 2 массиви
// //   total += numbers[i];//Зплюсовуємо 2 массиви
// // }//Зплюсовуємо 2 массиви

// // for (let i = 0; i < numbers1.length; i += 1) {//Зплюсовуємо 2 массиви
// //   total += numbers1[i];//Зплюсовуємо 2 массиви
// // }//Зплюсовуємо 2 массиви
// const allNumbers = numbers.concat(numbers1);
// console.log(allNumbers);

// for (const number of allNumbers) {
//   total += number;
// }

// console.log(total);

// ВИДАЛЕННЯ ЄЛЕМЕНТІВ ПО ІНДЕКСУ// ВИДАЛЕННЯ ЄЛЕМЕНТІВ ПО ІНДЕКСУ// ВИДАЛЕННЯ ЄЛЕМЕНТІВ ПО ІНДЕКСУ// ВИДАЛЕННЯ ЄЛЕМЕНТІВ ПО ІНДЕКСУ// ВИДАЛЕННЯ ЄЛЕМЕНТІВ ПО ІНДЕКСУ
// ВИДАЛЕННЯ ЄЛЕМЕНТІВ ПО ІНДЕКСУ// ВИДАЛЕННЯ ЄЛЕМЕНТІВ ПО ІНДЕКСУ// ВИДАЛЕННЯ ЄЛЕМЕНТІВ ПО ІНДЕКСУ// ВИДАЛЕННЯ ЄЛЕМЕНТІВ ПО ІНДЕКСУ
// ВИДАЛЕННЯ ЄЛЕМЕНТІВ ПО ІНДЕКСУ// ВИДАЛЕННЯ ЄЛЕМЕНТІВ ПО ІНДЕКСУ// ВИДАЛЕННЯ ЄЛЕМЕНТІВ ПО ІНДЕКСУ// ВИДАЛЕННЯ ЄЛЕМЕНТІВ ПО ІНДЕКСУ
// ВИДАЛЕННЯ ЄЛЕМЕНТІВ ПО ІНДЕКСУ// ВИДАЛЕННЯ ЄЛЕМЕНТІВ ПО ІНДЕКСУ// ВИДАЛЕННЯ ЄЛЕМЕНТІВ ПО ІНДЕКСУ// ВИДАЛЕННЯ ЄЛЕМЕНТІВ ПО ІНДЕКСУ

const cards = ["Карточка-1", "Карточка-2", "Карточка-3", "Карточка-4", "Карточка-5"];
console.table(cards);
// const cardToRemove = "Карточка-3"; //DELETE CARD
// const index = cards.indexOf(cardToRemove);
// console.log(index);
// // console.log(cards.splice(index, 1));
// cards.splice(index, 1);
// console.table(cards);

// const cardToInsert = "Карточка-6"; //ВСТАВЛЯЄМО КАРТОЧКУ
// const index = 3;
// cards.splice(3, 0, "Карточка-6");
// console.table(cards);

const cardToUpdate = "Карточка-4"; //Замінюємо карточку
const index = cards.indexOf(cardToUpdate);
cards.splice(index, 1, "Карточка-4.1");
console.table(cards);
