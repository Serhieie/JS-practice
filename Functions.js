//Як працює функція та return//Як працює функція та return//Як працює функція та return//Як працює функція та return//Як працює функція та return
//Як працює функція та return//Як працює функція та return//Як працює функція та return//Як працює функція та return
//Як працює функція та return//Як працює функція та return//Як працює функція та return//Як працює функція та return

// const add = function (x, y) {
//   console.log(x);
//   console.log(y);

//   const result = x + y;
//   console.log(x + y);
//   return result;
// };
// const r1 = add(52, 28);

// add(5, 3);
// add(1313231, 141342555);
// const fn = function () {
//   console.log("1");
//   console.log("2");
//   return;
//   console.log("3");
// };
// console.log(fn());

//Стєк визовів//Стєк визовів//Стєк визовів//Стєк визовів//Стєк визовів//Стєк визовів
//Стєк визовів//Стєк визовів//Стєк визовів//Стєк визовів//Стєк визовів//Стєк визовів
//Стєк визовів//Стєк визовів//Стєк визовів//Стєк визовів//Стєк визовів//Стєк визовів

// const fnA = function () {
//   console.log("aeaeaeweaweaweawea function A");
// };
// const fnB = function () {
//   console.log("aeaeaeweaweaweawea function B");
// };
// const fnC = function () {
//   console.log("aeaeaeweaweaweawea function C");
// };

// fnA();
// fnB();
// fnC();

/// Плюсуємо массиви за допомогою функції/// Плюсуємо массиви за допомогою функції
/// Плюсуємо массиви за допомогою функції/// Плюсуємо массиви за допомогою функції
/// Плюсуємо массиви за допомогою функції/// Плюсуємо массиви за допомогою функції
// const numbers = [54, 23, 22, 332, 421, 24, 1123, 20, 2, 4, 8, 102, 144, 356, 3, 7, 99];
// const numbers1 = [541, 123, 222, 332, 20, 22, 42, 38, 102, 144, 356, 33, 71, 999];
// const numbers2 = [541, , 38, 102, 144, 356, 33, 71, 999];
// let total = 0;
// for (const number of allNumbers) {
//   total += number;
// }

// console.log("total:  ", total);

// const calculateTotalPrice = function (items) {
//   console.log("items всередині функції:   ", items);

//   let total = 0;

//   for (const item of items) {
//     total += item;
//   }
//   return total;
// };

// console.log(calculateTotalPrice([3, 4, 5, 3, 34, 242, 42, 42, 34, 254, 32, 523]));
// console.log(calculateTotalPrice([3, 4, 5, 3, 34, 242, 42, 42, 34, 25]));
// console.log(calculateTotalPrice([3, 4, 5, 3, 34, 242, 254, 32, 523]));
// console.log(calculateTotalPrice([3, 13, 13, 35, 1233, 4421, 4, 254, 32, 523]));

//НАПИШІТЬ ФУНКЦІЮ ДЛЯ ПЕРЕБОРУ ТА ЛОГІРУВАННЯ МАССИВУ//НАПИШІТЬ ФУНКЦІЮ ДЛЯ ПЕРЕБОРУ ТА ЛОГІРУВАННЯ МАССИВУ
//НАПИШІТЬ ФУНКЦІЮ ДЛЯ ПЕРЕБОРУ ТА ЛОГІРУВАННЯ МАССИВУ//НАПИШІТЬ ФУНКЦІЮ ДЛЯ ПЕРЕБОРУ ТА ЛОГІРУВАННЯ МАССИВУ
//НАПИШІТЬ ФУНКЦІЮ ДЛЯ ПЕРЕБОРУ ТА ЛОГІРУВАННЯ МАССИВУ//НАПИШІТЬ ФУНКЦІЮ ДЛЯ ПЕРЕБОРУ ТА ЛОГІРУВАННЯ МАССИВУ
//НАПИШІТЬ ФУНКЦІЮ ДЛЯ ПЕРЕБОРУ ТА ЛОГІРУВАННЯ МАССИВУ//НАПИШІТЬ ФУНКЦІЮ ДЛЯ ПЕРЕБОРУ ТА ЛОГІРУВАННЯ МАССИВУ
// const logItems = function (items) {
//   for (const item of items) {
//     console.log(item);
//   }
// };

// logItems(["Karina", "Bohdan", "Snake_san", "Gold", "Danchik"]);
// logItems([35, 23, 24, 55, 66]);
// logItems(["Камбала", "Чубака", "Серпень", "Вікінг", "Праця"]);

//НАПИШИ ФУНКЦІЮ КОТРА ПЕРЕБІРАЕТ ВСЕ ЛОГІНИ ДЛЯ ПОІСКА//НАПИШИ ФУНКЦІЮ КОТРА ПЕРЕБІРАЕТ ВСЕ ЛОГІНИ ДЛЯ ПОІСКА
//НАПИШИ ФУНКЦІЮ КОТРА ПЕРЕБІРАЕТ ВСЕ ЛОГІНИ ДЛЯ ПОІСКА//НАПИШИ ФУНКЦІЮ КОТРА ПЕРЕБІРАЕТ ВСЕ ЛОГІНИ ДЛЯ ПОІСКА
//НАПИШИ ФУНКЦІЮ КОТРА ПЕРЕБІРАЕТ ВСЕ ЛОГІНИ ДЛЯ ПОІСКА//НАПИШИ ФУНКЦІЮ КОТРА ПЕРЕБІРАЕТ ВСЕ ЛОГІНИ ДЛЯ ПОІСКА

// const logins = [
//   "Drinya_64",
//   "BATYA@24",
//   "MortalDROID",
//   "FIaskO010",
//   "Lasossi",
//   "PikaPER",
// ];
// const findLogin = function (allLogins, loginToFind) {
//   return allLogins.includes(loginToFind) //варіант4
//     ? `Користувач з ніком ${loginToFind} у списку.` //варіант4
//     : `Користувач з ніком ${loginToFind} не знайден.`; //варіант4
// };
// //   console.log(allLogins);
// //   console.log(loginToFind);
// // let message = `Користувач з ніком ${loginToFind} не знайден.`;//варіант1
// //   for (const login of allLogins) {
// //     if (login === loginToFind) {
// //       // message = `Користувач з ніком ${loginToFind} у списку.`;//варіант1
// //       return `Користувач з ніком ${loginToFind} у списку.`; //варіант2
// //     }
// //   }
// //   // return message;//варіант1
// //   return `Користувач з ніком ${loginToFind} не знайден.`; //варіант2

// //   const message = allLogins.includes(loginToFind) //варіант3
// //     ? `Користувач з ніком ${loginToFind} у списку.` //варіант3
// //     : `Користувач з ніком ${loginToFind} не знайден.`; //варіант3
// //   return message; //варіант3
// //   };

// console.log(findLogin(logins, "Lasossi"));
// console.log(findLogin(logins, "DUN9|"));
// console.log(findLogin(logins, "GRIZZA"));
// console.log(findLogin(logins, "MortalDROID"));
// console.log(findLogin(logins, "CHUPah"));

//ФУНКЦІЯ ЗНАЙТИ НАЙМЕНШЕ ЧИСЛО У МАССИВАХ //ФУНКЦІЯ ЗНАЙТИ НАЙМЕНШЕ ЧИСЛО У МАССИВАХ //ФУНКЦІЯ ЗНАЙТИ НАЙМЕНШЕ ЧИСЛО У МАССИВАХ /
//ФУНКЦІЯ ЗНАЙТИ НАЙМЕНШЕ ЧИСЛО У МАССИВАХ//ФУНКЦІЯ ЗНАЙТИ НАЙМЕНШЕ ЧИСЛО У МАССИВАХ//ФУНКЦІЯ ЗНАЙТИ НАЙМЕНШЕ ЧИСЛО У МАССИВАХ
//ФУНКЦІЯ ЗНАЙТИ НАЙМЕНШЕ ЧИСЛО У МАССИВАХ//ФУНКЦІЯ ЗНАЙТИ НАЙМЕНШЕ ЧИСЛО У МАССИВАХ//ФУНКЦІЯ ЗНАЙТИ НАЙМЕНШЕ ЧИСЛО У МАССИВАХ

// const numbers = [51, 23, 43, 3, 34, 213, 45, 62, 1, 124];

// const findSmallestNumber = function (numbers) {
//   let smallestNumber = numbers[0];

//   for (const number of numbers) {
//     if (number < smallestNumber) {
//       smallestNumber = number;
//     }
//   }
//   return smallestNumber;
// };

// console.log(findSmallestNumber([1, 45, -5, 32, 56, -1, 0, 32]));
// console.log(findSmallestNumber([100, 200, 1400, 250, 50, 450]));
// console.log(findSmallestNumber([1, 45, 12, 23, 56, 76]));

//ФУНКЦІЯ ДЛЯ ІНВЕРЦІЇ РЕГІСТРІВ //ФУНКЦІЯ ДЛЯ ІНВЕРЦІЇ РЕГІСТРІВ //ФУНКЦІЯ ДЛЯ ІНВЕРЦІЇ РЕГІСТРІВ //ФУНКЦІЯ ДЛЯ ІНВЕРЦІЇ РЕГІСТРІВ
//ФУНКЦІЯ ДЛЯ ІНВЕРЦІЇ РЕГІСТРІВ//ФУНКЦІЯ ДЛЯ ІНВЕРЦІЇ РЕГІСТРІВ//ФУНКЦІЯ ДЛЯ ІНВЕРЦІЇ РЕГІСТРІВ//ФУНКЦІЯ ДЛЯ ІНВЕРЦІЇ РЕГІСТРІВ
//ФУНКЦІЯ ДЛЯ ІНВЕРЦІЇ РЕГІСТРІВ//ФУНКЦІЯ ДЛЯ ІНВЕРЦІЇ РЕГІСТРІВ//ФУНКЦІЯ ДЛЯ ІНВЕРЦІЇ РЕГІСТРІВ//ФУНКЦІЯ ДЛЯ ІНВЕРЦІЇ РЕГІСТРІВ

// const changeCase = function (string) {
//   letters = string.split("");
//   let invertedString = "";

//   for (const letter of letters) {
//     const isInLowerCase = letter === letter.toLowerCase();

//     invertedString += isInLowerCase ? letter.toUpperCase() : letter.toLowerCase();
//   }

//   return invertedString;
// };

// console.log(changeCase("ADawdE"));
// console.log(changeCase("MAxAUE"));
// console.log(changeCase("ggNILoY"));

//НАПИШИ ФУНКЦІЮ КОТРА ОТРИМУЄ СТРОКУ І ВИДАЄ URL-slug//НАПИШИ ФУНКЦІЮ КОТРА ОТРИМУЄ СТРОКУ І ВИДАЄ URL-slug//НАПИШИ ФУНКЦІЮ КОТРА ОТРИМУЄ СТРОКУ І ВИДАЄ URL-slug
//НАПИШИ ФУНКЦІЮ КОТРА ОТРИМУЄ СТРОКУ І ВИДАЄ URL-slug//НАПИШИ ФУНКЦІЮ КОТРА ОТРИМУЄ СТРОКУ І ВИДАЄ URL-slug//НАПИШИ ФУНКЦІЮ КОТРА ОТРИМУЄ СТРОКУ І ВИДАЄ URL-slug
//НАПИШИ ФУНКЦІЮ КОТРА ОТРИМУЄ СТРОКУ І ВИДАЄ URL-slug//НАПИШИ ФУНКЦІЮ КОТРА ОТРИМУЄ СТРОКУ І ВИДАЄ URL-slug//НАПИШИ ФУНКЦІЮ КОТРА ОТРИМУЄ СТРОКУ І ВИДАЄ URL-slug

// const slugify = function (string) {
//   //   const normalizedTitle = string.toLowerCase(); //Варіант1
//   //   const words = normalizedTitle.split(" ");//Варіант1
//   //   const slug = words.join("-");//Варіант1
//   //   return slug;//Варіант1
//   return string.toLowerCase().split(" ").join("-"); //Варіант2
// };

// console.log(slugify("Tor Nore Ape store pipi-ame toto Are"));
// console.log(slugify("Top 10 benefits of React Framework"));
// console.log(slugify("Tor Nore Salmon and Tiger eyes"));

//ВСТРОЕННІ ФУНКЦІЇ АРГУМЕНТИ ТА АРРЄЙ //ВСТРОЕННІ ФУНКЦІЇ АРГУМЕНТИ ТА АРРЄЙ //ВСТРОЕННІ ФУНКЦІЇ АРГУМЕНТИ ТА АРРЄЙ
//ВСТРОЕННІ ФУНКЦІЇ АРГУМЕНТИ ТА АРРЄЙ//ВСТРОЕННІ ФУНКЦІЇ АРГУМЕНТИ ТА АРРЄЙ//ВСТРОЕННІ ФУНКЦІЇ АРГУМЕНТИ ТА АРРЄЙ
//ВСТРОЕННІ ФУНКЦІЇ АРГУМЕНТИ ТА АРРЄЙ//ВСТРОЕННІ ФУНКЦІЇ АРГУМЕНТИ ТА АРРЄЙ//ВСТРОЕННІ ФУНКЦІЇ АРГУМЕНТИ ТА АРРЄЙ
// const fn = function () {
//   console.log(arguments);
//   const arg = Array.from(arguments); // ARRAY FROM Устаревшій метод
//   console.log(arg);

//   //   for (const arg of arguments) { // АРГУМЕНТИ Можна перебрати через for
//   //     console.log(arg);
//   //   }
// };

// const fn = function (...args) { //Більш НОВИЙ СПОСІБ ПЕРЕБИРАТИ МАССИВИ ТА ВИТЯГАТИ ЇХ
//   console.log(args);
// };

// fn("awdadw",1, 4, 6, 5, 4);
// fn("awdawd", 1, 4, 6, 5, 4, 2, 1, 3);
// fn("h1",1, 4, 6, 5, 2, 243, 4, 54);

// const add = function () {};
// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5, 6));

// const fn = function (a, ...args) {
//   console.log(`${a}`);
//   console.log(args);
// };

// fn("awdadw", 1, 4, 6, 5, 4);
// fn("awdawd", 1, 4, 6, 5, 4, 2, 1, 3);
// fn("h1", 1, 4, 6, 5, 2, 243, 4, 54);

// const add = function () {};
// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5, 6));

//НАПИШИ ФУНКЦІЮ ADD ДЛЯ ДОДАВАННЯ БУДЬ ЯКОЇ КІЛЬКОСТІ ЦИФР//НАПИШИ ФУНКЦІЮ ADD ДЛЯ ДОДАВАННЯ БУДЬ ЯКОЇ КІЛЬКОСТІ ЦИФР//НАПИШИ ФУНКЦІЮ ADD ДЛЯ ДОДАВАННЯ БУДЬ ЯКОЇ КІЛЬКОСТІ ЦИФР
//НАПИШИ ФУНКЦІЮ ADD ДЛЯ ДОДАВАННЯ БУДЬ ЯКОЇ КІЛЬКОСТІ ЦИФР//НАПИШИ ФУНКЦІЮ ADD ДЛЯ ДОДАВАННЯ БУДЬ ЯКОЇ КІЛЬКОСТІ ЦИФР//НАПИШИ ФУНКЦІЮ ADD ДЛЯ ДОДАВАННЯ БУДЬ ЯКОЇ КІЛЬКОСТІ ЦИФР
//НАПИШИ ФУНКЦІЮ ADD ДЛЯ ДОДАВАННЯ БУДЬ ЯКОЇ КІЛЬКОСТІ ЦИФР//НАПИШИ ФУНКЦІЮ ADD ДЛЯ ДОДАВАННЯ БУДЬ ЯКОЇ КІЛЬКОСТІ ЦИФР//НАПИШИ ФУНКЦІЮ ADD ДЛЯ ДОДАВАННЯ БУДЬ ЯКОЇ КІЛЬКОСТІ ЦИФР
// const add = function (...args) {
//   console.log(args);
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5, 6));

//НАПИШИ ФУНКЦІЮ КОТРА ФІЛЬТРУЄ ВСІ ЧИСЛА З МАССИВУ ТА ТІ КОТРІ ЗАПИСАННІ ОКРЕМО ВІД НЬОГО//НАПИШИ ФУНКЦІЮ КОТРА ФІЛЬТРУЄ ВСІ ЧИСЛА З МАССИВУ ТА ТІ КОТРІ ЗАПИСАННІ ОКРЕМО ВІД НЬОГО
//НАПИШИ ФУНКЦІЮ КОТРА ФІЛЬТРУЄ ВСІ ЧИСЛА З МАССИВУ ТА ТІ КОТРІ ЗАПИСАННІ ОКРЕМО ВІД НЬОГО//НАПИШИ ФУНКЦІЮ КОТРА ФІЛЬТРУЄ ВСІ ЧИСЛА З МАССИВУ ТА ТІ КОТРІ ЗАПИСАННІ ОКРЕМО ВІД НЬОГО
//НАПИШИ ФУНКЦІЮ КОТРА ФІЛЬТРУЄ ВСІ ЧИСЛА З МАССИВУ ТА ТІ КОТРІ ЗАПИСАННІ ОКРЕМО ВІД НЬОГО//НАПИШИ ФУНКЦІЮ КОТРА ФІЛЬТРУЄ ВСІ ЧИСЛА З МАССИВУ ТА ТІ КОТРІ ЗАПИСАННІ ОКРЕМО ВІД НЬОГО
// const filterNumbers = function (array, ...args) {
//   console.log("array:  ", array);
//   console.log("args:  ", args);
//   const uniqueElements = [];

//   for (const element of array) {
//     // console.log(args.includes(element));
//     if (args.includes(element)) {
//       uniqueElements.push(element);
//       console.log(`${element} є малюк`);
//     }
//   }
//   return uniqueElements;
// };

// console.log(filterNumbers([1, 4, 6, 100, 200, 1400, 250, 50], 5, 4, 54));
// console.log(filterNumbers([6, 5, 4, 2], 5, 2, 3, 4, 5, 6));
// console.log(filterNumbers([1, 4, 6, 5, 4, 2, 1, 3], 5, 2, 243, 4, 54));

//ФУНКЦІЯ КОТРА ПЛЮСУЄ ЦИФРУ КОЖНОГО КРОКУ ДО ВКАЗАННОГО ЧИСЛА//ФУНКЦІЯ КОТРА ПЛЮСУЄ ЦИФРУ КОЖНОГО КРОКУ ДО ВКАЗАННОГО ЧИСЛА
//ФУНКЦІЯ КОТРА ПЛЮСУЄ ЦИФРУ КОЖНОГО КРОКУ ДО ВКАЗАННОГО ЧИСЛА//ФУНКЦІЯ КОТРА ПЛЮСУЄ ЦИФРУ КОЖНОГО КРОКУ ДО ВКАЗАННОГО ЧИСЛА
//ФУНКЦІЯ КОТРА ПЛЮСУЄ ЦИФРУ КОЖНОГО КРОКУ ДО ВКАЗАННОГО ЧИСЛА//ФУНКЦІЯ КОТРА ПЛЮСУЄ ЦИФРУ КОЖНОГО КРОКУ ДО ВКАЗАННОГО ЧИСЛА
// const calculateTotal = function (number) {
//   let total = 0;
//   for (let i = 0; i <= number; i += 1) {
//     total += i;
//   }
//   return total;
// };

// calculateTotal(15);

//ФУНКЦІЯ ЯКА ПЛЮСУЄ МІЖ СОБОЮ ВСІ ЦИФРИ МАССИВУ //ФУНКЦІЯ ЯКА ПЛЮСУЄ МІЖ СОБОЮ ВСІ ЦИФРИ МАССИВУ //ФУНКЦІЯ ЯКА ПЛЮСУЄ МІЖ СОБОЮ ВСІ ЦИФРИ МАССИВУ
//ФУНКЦІЯ ЯКА ПЛЮСУЄ МІЖ СОБОЮ ВСІ ЦИФРИ МАССИВУ //ФУНКЦІЯ ЯКА ПЛЮСУЄ МІЖ СОБОЮ ВСІ ЦИФРИ МАССИВУ //ФУНКЦІЯ ЯКА ПЛЮСУЄ МІЖ СОБОЮ ВСІ ЦИФРИ МАССИВУ
//ФУНКЦІЯ ЯКА ПЛЮСУЄ МІЖ СОБОЮ ВСІ ЦИФРИ МАССИВУ //ФУНКЦІЯ ЯКА ПЛЮСУЄ МІЖ СОБОЮ ВСІ ЦИФРИ МАССИВУ //ФУНКЦІЯ ЯКА ПЛЮСУЄ МІЖ СОБОЮ ВСІ ЦИФРИ МАССИВУ
// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   return total;
// }

//ФУНКЦІЯ ЯКА ВИВОДИТЬ ЦИФРИ З МАССИВУ ТІЛЬКИ БІЛЬШЕ ЗА ВКАЗАННЕ ЗНАЧЕННЯ //ФУНКЦІЯ ЯКА ВИВОДИТЬ ЦИФРИ З МАССИВУ ТІЛЬКИ БІЛЬШЕ ЗА ВКАЗАННЕ ЗНАЧЕННЯ
//ФУНКЦІЯ ЯКА ВИВОДИТЬ ЦИФРИ З МАССИВУ ТІЛЬКИ БІЛЬШЕ ЗА ВКАЗАННЕ ЗНАЧЕННЯ//ФУНКЦІЯ ЯКА ВИВОДИТЬ ЦИФРИ З МАССИВУ ТІЛЬКИ БІЛЬШЕ ЗА ВКАЗАННЕ ЗНАЧЕННЯ
//ФУНКЦІЯ ЯКА ВИВОДИТЬ ЦИФРИ З МАССИВУ ТІЛЬКИ БІЛЬШЕ ЗА ВКАЗАННЕ ЗНАЧЕННЯ//ФУНКЦІЯ ЯКА ВИВОДИТЬ ЦИФРИ З МАССИВУ ТІЛЬКИ БІЛЬШЕ ЗА ВКАЗАННЕ ЗНАЧЕННЯ

// function filterArray(numbers, value) {
//   // Change code below this line
//   const needForPrint = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     const currentNumber = numbers[i];
//     if (currentNumber > value) {
//       needForPrint.push(currentNumber);
//     }
//   }
//   return needForPrint;
// }

//ФУНКЦІЯ ЯКА ВИВОДИТЬ СПІЛЬНІ ЕЛЕМЕНТИ//ФУНКЦІЯ ЯКА ВИВОДИТЬ СПІЛЬНІ ЕЛЕМЕНТИ//ФУНКЦІЯ ЯКА ВИВОДИТЬ СПІЛЬНІ ЕЛЕМЕНТИ
//ФУНКЦІЯ ЯКА ВИВОДИТЬ СПІЛЬНІ ЕЛЕМЕНТИ//ФУНКЦІЯ ЯКА ВИВОДИТЬ СПІЛЬНІ ЕЛЕМЕНТИ//ФУНКЦІЯ ЯКА ВИВОДИТЬ СПІЛЬНІ ЕЛЕМЕНТИ
//ФУНКЦІЯ ЯКА ВИВОДИТЬ СПІЛЬНІ ЕЛЕМЕНТИ//ФУНКЦІЯ ЯКА ВИВОДИТЬ СПІЛЬНІ ЕЛЕМЕНТИ//ФУНКЦІЯ ЯКА ВИВОДИТЬ СПІЛЬНІ ЕЛЕМЕНТИ
// function getCommonElements(array1, array2) {
//   const commonElements = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       commonElements.push(array1[i]);
//     }
//   }
//   return commonElements;
// }
