// Метод forEach
// Метод перебирання масиву, який використовується для заміни циклів for і for...of в роботі з колекцією даних.

// массив.forEach(function callback(element, index, array) {
//   // Тіло колбек-функції
// });

// Поелементо перебирає масив.
// Викликає колбек-функцію для кожного елемента масиву.
// Нічого не повертає.
// Аргументи колбек-функції - це значення поточного елемента element, його індекс index і власне вихідний масив array. Можна оголошувати тільки необхідні параметри, найчастіше - це елемент, головне не забувати про їх порядок.

// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }

// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// //ДЕКЛАРАТИВНИЙ ПІДХІД ПЕРЕБИРАННЯ МАССИВУ //ДЕКЛАРАТИВНИЙ ПІДХІД ПЕРЕБИРАННЯ МАССИВУ //ДЕКЛАРАТИВНИЙ ПІДХІД ПЕРЕБИРАННЯ МАССИВУ
// //ДЕКЛАРАТИВНИЙ ПІДХІД ПЕРЕБИРАННЯ МАССИВУ //ДЕКЛАРАТИВНИЙ ПІДХІД ПЕРЕБИРАННЯ МАССИВУ //ДЕКЛАРАТИВНИЙ ПІДХІД ПЕРЕБИРАННЯ МАССИВУ
// //ДЕКЛАРАТИВНИЙ ПІДХІД ПЕРЕБИРАННЯ МАССИВУ //ДЕКЛАРАТИВНИЙ ПІДХІД ПЕРЕБИРАННЯ МАССИВУ //ДЕКЛАРАТИВНИЙ ПІДХІД ПЕРЕБИРАННЯ МАССИВУ
// Метод filter() приховує в собі логіку перебирання колекції і викликає callback-функцію, яку ми йому передаємо для кожного елемента, повертаючи масив елементів, що відповідають критерію.

// // Декларативний підхід
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => value > 3);
// console.log(filteredNumbers); // [4, 5]

//Array prototype .forEach(callback(currentValue,index,array),thisArg)
//1)Поєлементно перебирає оригінальний массив,
//2)Нічого не повертає,
//3)Замінює класичний for якщо не треба перебирати массив.

// const numbers = [1, 23, 3, 4, 7, 4, 78];
// numbers.forEach(function (number) {
//   console.log("number:  ", number);
//   // array[index] = 1;
// });
// console.log("number:  ", numbers);

//Array prototyp map();
//1) поелементра перебирає оригінальний массив,
//2) не змінює оригінальний массив,
//3) Повертає такий же массив такої ж довжини

// const numbers = [1, 23, 3, 4, 7, 4, 78];
// const doubledNums = numbers.map((number) => {
//   console.log(number);
//   return number * 2;
// });
// console.log("Numbers:  ", doubledNums);

// const players = [
//   { id: "player-1", name: "Jhony", timePlayed: 310, points: 45, online: false },
//   { id: "player-2", name: "Eddy", timePlayed: 40, points: 10, online: true },
//   { id: "player-3", name: "Billy", timePlayed: 150, points: 30, online: true },
//   { id: "player-4", name: "Fizzy", timePlayed: 300, points: 70, online: false },
//   { id: "player-5", name: "Losossi", timePlayed: 147, points: 38, online: false },
//   { id: "player-6", name: "Teddy", timePlayed: 199, points: 31, online: true },
//   { id: "player-7", name: "Tailor", timePlayed: 3, points: 1, online: false },
//   { id: "player-8", name: "Leo", timePlayed: 31, points: 11, online: true },
//   { id: "player-9", name: "Donny", timePlayed: 236, points: 33, online: false },
// ];
// повертаємо массив імен з великого массиву данних// повертаємо массив імен з великого массиву данних// повертаємо массив імен з великого массиву данних
// const playerNames = players.map((player) => player.name);
// console.log("Players:  ", playerNames);
// console.table(players);

// const playersId = players.map((player) => player.online);
// console.log("Players:  ", playersId);

// const onlinePlayers = players.map(({ name, online }) => ({
//   name,
//   online,
// }));

// console.log("Players:  ", onlinePlayers);

//оновлюємо параметр в таблиці для всих ігроків(//оновлюємо параметр в таблиці для всих ігроків(//оновлюємо параметр в таблиці для всих ігроків(
// const upatedPlayers = players.map((player) => ({
//   ...player,
//   points: player.points * 1.2,
// }));
// console.table(updatedPlayers);
//оновлюємо параметр в таблиці для одного ігрока//оновлюємо параметр в таблиці для одного ігрока//оновлюємо параметр в таблиці для одного ігрока
// const playerIdToUpdate = "player-4";
// const updatedPlayers = players.map((player) => {
//   if (playerIdToUpdate === player.id) {
//     console.log(player.id, "here it is");
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 1000,
//     };
//   }
//   return player;
// });
// console.log(updatedPlayers);
//робимо те саме але тернальним виразом//робимо те саме але тернальним виразом//робимо те саме але тернальним виразом//робимо те саме але тернальним виразом
// const playerIdToUpdate = "player-4";
// const updatedPlayers = players.map((player) =>
//   playerIdToUpdate === player.id
//     ? { ...player, timePlayed: player.timePlayed + 1000 }
//     : player
// );
// console.log(updatedPlayers);

//Array Prototype.filter();
//1)Поелементно перебирає оригінальний массив
//2) Повертає новий массив з єлементами або порожній,
//3) Добавляє в массив котрий повертається котрі підходять під условія функції,
//4)якщо колбек повернув тру, єлемент добавляється в повертаємий массив
//5) 4)якщо колбек повернув фалс, єлемент не добавляється в повертаємий массив
// const numbers = [1, 23, 3, 4, 7, 4, 78];
// const filteredNumbers = numbers.filter((number) => number < 5 || number > 50);
// console.log(filteredNumbers);
// //Фільтер друзів онлайн

// const onlinePlayers = players.filter((player) => !player.online);
// console.log(onlinePlayers);

//Array Prototype.find()
//1)Поелементно перебирає массив,
//2)Повертає перший унікальний елемент або undefind
// const findNumber = numbers.find((number) => number > 10);
// console.log(findNumber);

// const playerToFind = (allPlayers, playerId) =>
//   allPlayers.find(({ id }) => id === playerId);
// console.log(playerToFind(players, "player-5"));
// console.log(playerToFind(players, "player-3"));
//Array Prototype.every()
//1)Поелементно перебирає оригінальний массив,
//2)Повертає true якщо всі елементи массиву задовілюняють умові
// const isAllOnline = players.every((player) => player.online);
// console.log("isAllOnline:   ", isAllOnline);
// //Array Prototype.some()
// //1)Поелементно перебирає оригінальний массив,
// //2)Повертає true якщо один елемент массиву задовілюняє умові
// const isSomeonOnline = players.some((player) => player.online);
// console.log("isSomeonOnline:   ", isSomeonOnline);
//Array Prototype.reduce()
//1)Поелементно перебирає оригінальний массив,
//2)Повертає що завгодно
//3)Заменяет все вишеуказанние але треба використовувати з розумом;
// const numbers = [1, 23, 3, 4, 7, 4, 78];
// // const total = numbers.reduce((acc, number) => {
// //   console.log("acc:  ", acc);
// //   console.log("number:  ", number);
// //   return acc + number;
// // }, 0);

// //a тепер скорочекно
// const total = numbers.reduce((acc, number) => acc + number, 0);
// console.log(total);

// Розрахунок загальної зарплати для робітників
// const salary = {
//   Jhonny: 500,
//   Billy: 500,
//   Tommy: 500,
// };

// const totalSalary = Object.values(salary).reduce((total, value) => total + value, 0);
// console.log(totalSalary);
// const players = [
//   { id: "player-1", name: "Jhony", timePlayed: 310, points: 45, online: false },
//   { id: "player-2", name: "Eddy", timePlayed: 40, points: 10, online: true },
//   { id: "player-3", name: "Billy", timePlayed: 150, points: 30, online: true },
//   { id: "player-4", name: "Fizzy", timePlayed: 300, points: 70, online: false },
//   { id: "player-5", name: "Losossi", timePlayed: 147, points: 38, online: false },
//   { id: "player-6", name: "Teddy", timePlayed: 199, points: 31, online: true },
//   { id: "player-7", name: "Tailor", timePlayed: 3, points: 1, online: false },
//   { id: "player-8", name: "Leo", timePlayed: 31, points: 11, online: true },
//   { id: "player-9", name: "Donny", timePlayed: 236, points: 33, online: false },
// ];

// const totalTimePlayed = players.reduce(
//   (totalTime, player) => totalTime + player.timePlayed,
//   0
// );
// console.log(totalTimePlayed);

// const cart = [
//   { label: "apple", price: 100, quantity: 4 },
//   { label: "pineapple", price: 178, quantity: 1 },
//   { label: "ponygranate", price: 230, quantity: 2 },
// ];

// const totalAmount = cart.reduce(
//   (totalAm, { price, quantity }) => totalAm + price * quantity,
//   0
// );
// console.log(totalAmount);

//Шукаємо всі теги з твітів
// const tweets = [
//   { id: "000", likes: 5, tags: ["JS", "NodeJS"] },
//   { id: "001", likes: 11, tags: ["html", "CSS"] },
//   { id: "002", likes: 7, tags: ["JS", "NodeJS", "CSS"] },
//   { id: "003", likes: 3, tags: ["JS", "html"] },
//   { id: "004", likes: 9, tags: ["JS", "NodeJS", "React"] },
// ];
// const allTags = tweets.reduce((tags, tweet) => [...tags, ...tweet.tags], []);
// console.log(allTags);

//Шукаємо кількість однаковіх тегів
//ведемо статистику так НЕ РОБИМО ТАК
// const tagStats = allTags.reduce((acc, tag) => {
//   if (acc[tag]) {
//     acc[tag] += 1;
//     return acc;
//   }
//   acc[tag] = 1;
//   return acc;
// }, {});
// console.table(tagStats);

// ТАК МОЖНА РОБИТИ ЧЕРЕЗ IF
// const tagStats = allTags.reduce((acc, tag) => {
//   if (acc[tag]) {
//     acc[tag] += 1;
//     return {
//       ...acc,
//       [tag]: acc.tag + 1,
//     };
//   }
//   acc[tag] = 1;
//   return {
//     ...acc,
//     [tag]: 1,
//   };
// }, {});
// console.table(tagStats);

// ТАК МОЖНА РОБИТИ ЧЕРЕЗ ТЕРНАЛЬНИЙ ОПЕРАТОР

// const tagStats = allTags.reduce(
//   (acc, tag) => ({
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   }),
//   {}
// );
// console.table(tagStats);

// const user = {
//   name: " mangol",
// };

// const key = "name";

// console.log(user[key]);
//Arrey prototype .sort(callback(currentEl,nextEl){});
//1)Сортуэ та зминюэ орыгинальный массив
//2)По замовчанню :
//а) сортує за зрастанням
//б)приводе елементи до строки та сортує по юнікод (https://unicode-table.com/en/
// const numbers = [1, 9, 6, 2, 3];
// const nombersCopy = [...numbers];
// numbers.sort();
// nombersCopy.sort();
// console.log("numbers: ", nombersCopy);
// const letters = ["b", "B", "a", "A"];
// letters.sort();
// console.log("letters: ", letters);

// //compareFunction - функція порівняння ( callback);
// //Єлементи массиву сортуються по поверненному значенню
// //!!!!!якщо compareFunction(А,В) меньше 0, сортування поставе А перед В
// //!!!!!якщо compareFunction(А,В) більше 0, сортування поставе В перед А
// //!!!!!якщо compareFunction(А,В) поверне 0, сортування залише А та В незміненими по відношенню один на одного
// numbers.sort((curEl, nextEl) => curEl - nextEl);
// console.log(numbers);
// const descSortedNumbers = [...numbers].sort((a, b) => b - a); //сортування по убиванню
// const ascSortedNumbers = [...numbers].sort((a, b) => a - b); //сортування по зростанню
// console.log(descSortedNumbers);
// console.log(ascSortedNumbers);
// console.log(descSortedNumbers.reverse()); //Можна перевернути відсортованний список

//сортування важких типів//сортування важких типів//сортування важких типів//сортування важких типів

// const players = [
//   { id: "player-1", name: "Jhony", timePlayed: 310, points: 45, online: false },
//   { id: "player-2", name: "Eddy", timePlayed: 40, points: 10, online: true },
//   { id: "player-3", name: "Billy", timePlayed: 150, points: 30, online: true },
//   { id: "player-4", name: "Fizzy", timePlayed: 300, points: 70, online: false },
//   { id: "player-5", name: "Losossi", timePlayed: 147, points: 38, online: false },
//   { id: "player-6", name: "Teddy", timePlayed: 199, points: 31, online: true },
//   { id: "player-7", name: "Tailor", timePlayed: 3, points: 1, online: false },
//   { id: "player-8", name: "Leo", timePlayed: 31, points: 11, online: true },
//   { id: "player-9", name: "Donny", timePlayed: 236, points: 33, online: false },
// ];

// const sortedByBeastPlayer = [...players].sort((prevPlayer, nextPlayer) => {
//   return prevPlayer.timePlayed - nextPlayer.timePlayed;
// });

// //Сортування по імені
// console.table(sortedByBeastPlayer);
// const sortByName = [...players].sort((a, b) => {
//   console.log(a.name[0] > b.name[0]);
//   const result = b.name[0] > a.name[0];
//   if (result) {
//     return -1;
//   }
//   if (!result) {
//     return 1;
//   }
// });
// console.table(sortByName);

//Array protorype .flat(depth)
//1) Розгладжує массив до вказанної глибини;
//2) По замовчанню глибина 1;

// const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
// console.log(array);

//Array.prototype .flatMap(callback);
//ЦЕ КОМБІНАЦІЯ МАП + ФЛАТ
// const tweets = [
//   { id: "000", likes: 5, tags: ["JS", "NodeJS"] },
//   { id: "001", likes: 11, tags: ["html", "CSS"] },
//   { id: "002", likes: 7, tags: ["JS", "NodeJS", "CSS"] },
//   { id: "003", likes: 3, tags: ["JS", "html"] },
//   { id: "004", likes: 9, tags: ["JS", "NodeJS", "React"] },
// ];

//Різні сортування
// const tags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// console.log(tags);
// const tags = tweets.map((t) => t.tags).flat();
// const tags = tweets.flatMap((t) => t.tags);
// console.log(tags);
// const numbers = [1, 9, 6, 2, 3];
// const sorted = numbers.filter((num) => num > 2).map((num) => num * 3);
// console.log(sorted);

//СОРТУВАННЯ ПО ПОІНТАХ//СОРТУВАННЯ ПО ПОІНТАХ//СОРТУВАННЯ ПО ПОІНТАХ//СОРТУВАННЯ ПО ПОІНТАХ

const players = [
  { id: "player-1", name: "Jhony", timePlayed: 310, points: 45, online: false },
  { id: "player-2", name: "Eddy", timePlayed: 40, points: 10, online: true },
  { id: "player-3", name: "Billy", timePlayed: 150, points: 30, online: true },
  { id: "player-4", name: "Fizzy", timePlayed: 300, points: 70, online: false },
  { id: "player-5", name: "Losossi", timePlayed: 147, points: 38, online: false },
  { id: "player-6", name: "Teddy", timePlayed: 199, points: 31, online: true },
  { id: "player-7", name: "Tailor", timePlayed: 3, points: 1, online: false },
  { id: "player-8", name: "Leo", timePlayed: 31, points: 11, online: true },
  { id: "player-9", name: "Donny", timePlayed: 236, points: 33, online: false },
];

// const onlineAndSorted = players
//   .filter((player) => player.online)
//   .sort((playerA, playerB) => playerA.points - playerB.points);
// console.table(onlineAndSorted);

// const stats = tweets
//   .flatMap((tweet) => tweet.tags)
//   .reduce((acc, tag) => ({ ...acc, [tag]: acc[tag] ? acc[tag] + 1 : 1 }), {});
// console.log(stats);
//КОЛБЕК ФУНКЦІЇ ТА ФУНКЦІЇ ВИЩОГО ПОРЯДКУ//КОЛБЕК ФУНКЦІЇ ТА ФУНКЦІЇ ВИЩОГО ПОРЯДКУ//КОЛБЕК ФУНКЦІЇ ТА ФУНКЦІЇ ВИЩОГО ПОРЯДКУ
//КОЛБЕК ФУНКЦІЇ ТА ФУНКЦІЇ ВИЩОГО ПОРЯДКУ//КОЛБЕК ФУНКЦІЇ ТА ФУНКЦІЇ ВИЩОГО ПОРЯДКУ//КОЛБЕК ФУНКЦІЇ ТА ФУНКЦІЇ ВИЩОГО ПОРЯДКУ
//КОЛБЕК ФУНКЦІЇ ТА ФУНКЦІЇ ВИЩОГО ПОРЯДКУ//КОЛБЕК ФУНКЦІЇ ТА ФУНКЦІЇ ВИЩОГО ПОРЯДКУ//КОЛБЕК ФУНКЦІЇ ТА ФУНКЦІЇ ВИЩОГО ПОРЯДКУ
// const dnA = function (message, callback) {
//   console.log(message);
//   console.log(callback);
// };

// const fnB = function () {
//   console.log("Це лог при визові fnB");
// };

// dnA("adwasdaw", fnB);

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// };

// doMath(2, 3, function (x, y) {
//   return x * y;
// });
// doMath(2, 3, function (x, y) {
//   return x + y;
// });

// //РЕЕСТРАЦІЯ СОБИТІЯ З КЛІКУ КНОПКИ//РЕЕСТРАЦІЯ СОБИТІЯ З КЛІКУ КНОПКИ//РЕЕСТРАЦІЯ СОБИТІЯ З КЛІКУ КНОПКИ
// const buttonRef = document.querySelector(".js-button");
// buttonRef.addEventListener("click", function () {
//   console.log("button was clicked");
// });

//ПОШУК ПО ГЕОЛОКАЦІЇ//ПОШУК ПО ГЕОЛОКАЦІЇ//ПОШУК ПО ГЕОЛОКАЦІЇ//ПОШУК ПО ГЕОЛОКАЦІЇ//ПОШУК ПО ГЕОЛОКАЦІЇ

// const getCurrentPositionSucces = function (position) {
//   console.log(position);
// };

// const getCurrentPositionError = function (error) {
//   console.log(error);
// };
// window.navigator.geolocation.getCurrentPosition(
//   getCurrentPositionSucces,
//   getCurrentPositionError
// );
// ТАЙМАУТ// ТАЙМАУТ// ТАЙМАУТ// ТАЙМАУТ// ТАЙМАУТ// ТАЙМАУТ// ТАЙМАУТ// ТАЙМАУТ// ТАЙМАУТ// ТАЙМАУТ
// ТАЙМАУТ// ТАЙМАУТ// ТАЙМАУТ// ТАЙМАУТ// ТАЙМАУТ// ТАЙМАУТ// ТАЙМАУТ// ТАЙМАУТ// ТАЙМАУТ// ТАЙМАУТ
// const callback = function () {
//   console.log("Через 3 секунди всередині колбеку в таймауті");
// };

// console.log("Укоді перед таймауту");
// setTimeout(callback, 3000);

// console.log("Укоді після таймауту");
//ЗАПИТ НА БЄК ЄНД//ЗАПИТ НА БЄК ЄНД//ЗАПИТ НА БЄК ЄНД//ЗАПИТ НА БЄК ЄНД//ЗАПИТ НА БЄК ЄНД//ЗАПИТ НА БЄК ЄНД
//ЗАПИТ НА БЄК ЄНД//ЗАПИТ НА БЄК ЄНД//ЗАПИТ НА БЄК ЄНД//ЗАПИТ НА БЄК ЄНД//ЗАПИТ НА БЄК ЄНД//ЗАПИТ НА БЄК ЄНД
//ЗАПИТ НА БЄК ЄНД//ЗАПИТ НА БЄК ЄНД//ЗАПИТ НА БЄК ЄНД//ЗАПИТ НА БЄК ЄНД//ЗАПИТ НА БЄК ЄНД//ЗАПИТ НА БЄК ЄНД
// const onRequestSucces = function (response) {
//   console.log("This is call of this function after respons from the server");
//   console.log(response);
// };

// fetch("https://pokeapi.co/api/v2/pokemon")
//   .then((res) => res.json())
//   .then(onRequestSucces);

//КОЛЛБЄК З ФІЛЬТРОМ//КОЛЛБЄК З ФІЛЬТР//КОЛЛБЄК З ФІЛЬТРОМ//КОЛЛБЄК З ФІЛЬТРОМ//КОЛЛБЄК З ФІЛЬТРОМ//КОЛЛБЄК З ФІЛЬТРОМ//КОЛЛБЄК З ФІЛЬТРОМ
//КОЛЛБЄК З ФІЛЬТРОМ//КОЛЛБЄК З ФІЛЬТРОМ//КОЛЛБЄК З ФІЛЬТРОМОМ//КОЛЛБЄК З ФІЛЬТРОМ//КОЛЛБЄК З ФІЛЬТРОМ//КОЛЛБЄК З ФІЛЬТРОМ//КОЛЛБЄК З ФІЛЬТРОМ
//КОЛЛБЄК З ФІЛЬТРОМ//КОЛЛБЄК З ФІЛЬТРОМ//КОЛЛБЄК З ФІЛЬТРОМ//КОЛЛБЄК З ФІЛЬТРОМ//КОЛЛБЄК З ФІЛЬТРОМ//КОЛЛБЄК З ФІЛЬТРОМ
// const filter = function (arrey, test) {
//   const filterredArrey = [];

//   for (const el of arrey) {
//     console.log(el);
//     console.log(test(el));
//     const passed = test(el);
//     if (passed) {
//       filterredArrey.push(el);
//     }
//   }
//   return filterredArrey;
// };
// const callback1 = function (value) {
//   return value >= 3;
// };
// const callback2 = function (value) {
//   return value <= 5;
// };
// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9], callback2);
// console.log(r2);

//Приклад з фруктами

// const fruits = [
//   { name: "apples", quantity: 200, isFresh: true },
//   { name: "grapes", quantity: 400, isFresh: true },
//   { name: "bananas", quantity: 1000, isFresh: true },
//   { name: "pineapples", quantity: 140, isFresh: false },
// ];

// const getFruitsWithQuantity = function (fruit) {
//   return fruit.quantity >= 250;
// };

// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);

//ВИВІД ФУНКЦІЇ ІЗ ФУНКЦІЇ//ВИВІД ФУНКЦІЇ ІЗ ФУНКЦІЇ//ВИВІД ФУНКЦІЇ ІЗ ФУНКЦІЇ//ВИВІД ФУНКЦІЇ ІЗ ФУНКЦІЇ
//ВИВІД ФУНКЦІЇ ІЗ ФУНКЦІЇ//ВИВІД ФУНКЦІЇ ІЗ ФУНКЦІЇ//ВИВІД ФУНКЦІЇ ІЗ ФУНКЦІЇ//ВИВІД ФУНКЦІЇ ІЗ ФУНКЦІЇ
//ВИВІД ФУНКЦІЇ ІЗ ФУНКЦІЇ//ВИВІД ФУНКЦІЇ ІЗ ФУНКЦІЇ//ВИВІД ФУНКЦІЇ ІЗ ФУНКЦІЇ//ВИВІД ФУНКЦІЇ ІЗ ФУНКЦІЇ
//ЗАМИКАННЯ//ЗАМИКАННЯ//ЗАМИКАННЯ//ЗАМИКАННЯ//ЗАМИКАННЯ//ЗАМИКАННЯ//ЗАМИКАННЯ//ЗАМИКАННЯ//ЗАМИКАННЯ//ЗАМИКАННЯ
// const fnA = function (parameter) {
//   const innerVariable = "Значення функції в середині fnA";
//   const innerFunction = function () {
//     console.log(parameter);
//     console.log(innerVariable);
//     console.log("виклик innerFunction");
//   };

//   return innerFunction;
// };

// const fnB = fnA(555);
// fnB();
// console.log(fnB);
//ЗРОБИ ШЕФА//ЗРОБИ ШЕФА//ЗРОБИ ШЕФА//ЗРОБИ ШЕФА//ЗРОБИ ШЕФА//ЗРОБИ ШЕФА//ЗРОБИ ШЕФА//ЗРОБИ ШЕФА//ЗРОБИ ШЕФА//ЗРОБИ ШЕФА
//ЗРОБИ ШЕФА//ЗРОБИ ШЕФА//ЗРОБИ ШЕФА//ЗРОБИ ШЕФА//ЗРОБИ ШЕФА//ЗРОБИ ШЕФА//ЗРОБИ ШЕФА//ЗРОБИ ШЕФА//ЗРОБИ ШЕФА
//ЗРОБИ ШЕФА//ЗРОБИ ШЕФА//ЗРОБИ ШЕФА//ЗРОБИ ШЕФА//ЗРОБИ ШЕФА//ЗРОБИ ШЕФА//ЗРОБИ ШЕФА//ЗРОБИ ШЕФА//ЗРОБИ ШЕФА//ЗРОБИ ШЕФА
//ПРИКЛАД ЗАМКНЕННЯ//ПРИКЛАД ЗАМКНЕННЯ//ПРИКЛАД ЗАМКНЕННЯ//ПРИКЛАД ЗАМКНЕННЯ//ПРИКЛАД ЗАМКНЕННЯ//ПРИКЛАД ЗАМКНЕННЯ
// const makeDish = function (chefName, dish) {
//   console.log(`${chefName} готує страву ${dish}`);
// };
// makeDish("lasossi", "tar-tar");
// makeDish("lasossi", "omlette");
// makeDish("sanya", "fried potatoe");
// makeDish("tanya", " broccoli soup");
// makeDish("sava", "pasta-pesto");

// const makeChef = function (chefName) {
//   const makeDish = function (dish) {
//     console.log(`${chefName} готує страву ${dish}`);
//   };
//   return makeDish;
// };

// const lasossi = makeChef("lasossi");
// console.log(lasossi);
// lasossi("tar-tar");
// lasossi("omlette");

//ОКРУГЛЮВАЧ//ОКРУГЛЮВАЧ//ОКР//ОКРУГЛЮВАЧ//ОКРУГЛЮВАЧ//ОКРУГЛЮВАЧ//ОКРУГЛЮВАЧ//ОКРУГЛЮВАЧ//ОКРУГЛЮВАЧ
//ОКРУГЛЮВАЧ//ОКРУГЛЮВАЧ//ОКРУГЛЮВАЧУГЛЮВАЧ//ОКРУГЛЮВАЧ//ОКРУГЛЮВАЧ//ОКРУГЛЮВАЧ//ОКРУГЛЮВАЧ//ОКРУГЛЮВАЧ
//ОКРУГЛЮВАЧ//ОКРУГЛЮВАЧ//ОКРУГЛЮВАЧ//ОКРУГЛЮВАЧ//ОКРУГЛЮВАЧ//ОКРУГЛЮВАЧ//ОКРУГЛЮВАЧ//ОКРУГЛЮВАЧ
// const floatingPoint = 3.43513134;
// const someInt = Math.round(floatingPoint);
// const withDeci = Number(floatingPoint.toFixed(2));

// const rounder = function (number, places) {
//   return Number(number.toFixed(places));
// };
// console.log(rounder(3.4232131, 2));
// console.log(rounder(4.42321313123, 3));
// console.log(rounder(5.42321131231, 4));
// console.log(rounder(33.4232131, 1));

// const rounder = function (places) {
//   return function (number) {
//     return Number(number.toFixed(places));
//   };
// };

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);
// console.log(rounder2(3.4232131));
// console.log(rounder3(4.42321313123));
// console.log(rounder3(5.42321131231));
// console.log(rounder2(33.4232131));

//ПРИКЛАД З БІБЛІОТЕКОЮ//ПРИКЛАД З БІБЛІОТЕКОЮ//ПРИКЛАД З БІБЛІОТЕКОЮ//ПРИКЛАД З БІБЛІОТЕКОЮ//ПРИКЛАД З БІБЛІОТЕКОЮ
//ПРИКЛАД З БІБЛІОТЕКОЮ//ПРИКЛАД З БІБЛІОТЕКОЮ//ПРИКЛАД З БІБЛІОТЕКОЮ//ПРИКЛАД З БІБЛІОТЕКОЮ//ПРИКЛАД З БІБЛІОТЕКОЮ
//ПРИКЛАД З БІБЛІОТЕКОЮ//ПРИКЛАД З БІБЛІОТЕКОЮ//ПРИКЛАД З БІБЛІОТЕКОЮ//ПРИКЛАД З БІБЛІОТЕКОЮ//ПРИКЛАД З БІБЛІОТЕКОЮ
// const salaryManagerFactory = function (employeeName, baseSalary) {
//   let salary = baseSalary;
//   const changeBy = function (amount) {
//     salary += amount;
//   };
//   return {
//     raise(amount) {
//       changeBy(amount);
//     },
//     lower(amount) {
//       changeBy(amount);
//     },
//     current() {
//       return `Зарплатня зараз ${employeeName} - ${salary}`;
//     },
//   };
// };

// const myLib = {
//   value123: 0,
//   add(num) {
//     this.value123 += num;
//   },
//   getValue() {
//     return this.value123;
//   },
// };
// myLib.add(5);
// console.log(myLib.value);

//ПРИВАТНА ПЕРЕМЕННА БЕЗ ДОСТУПУ//ПРИВАТНА ПЕРЕМЕННА БЕЗ ДОСТУПУ//ПРИВАТНА ПЕРЕМЕННА БЕЗ ДОСТУПУ//ПРИВАТНА ПЕРЕМЕННА БЕЗ ДОСТУПУ
//ПРИВАТНА ПЕРЕМЕННА БЕЗ ДОСТУПУ//ПРИВАТНА ПЕРЕМЕННА БЕЗ ДОСТУПУ//ПРИВАТНА ПЕРЕМЕННА БЕЗ ДОСТУПУ//ПРИВАТНА ПЕРЕМЕННА БЕЗ ДОСТУПУ
//ПРИВАТНА ПЕРЕМЕННА БЕЗ ДОСТУПУ//ПРИВАТНА ПЕРЕМЕННА БЕЗ ДОСТУПУ//ПРИВАТНА ПЕРЕМЕННА БЕЗ ДОСТУПУ//ПРИВАТНА ПЕРЕМЕННА БЕЗ ДОСТУПУ
// const myLibFactory = function () {
//   let value = 0;
//   const add = function (num) {
//     value += num;
//   };
//   return {
//     add: add,
//     getValue() {
//       return value;
//     },
//   };
// };

// const myLib = myLibFactory();
// console.log(myLib);
// console.log(myLib.getValue());
// myLib.add(10);
// console.log(myLib.getValue());
//ПРИВАТНА ПЕРЕМЕННА ПРІМЕР З ЗАРПЛАТНЕЮ//ПРИВАТНА ПЕРЕМЕННА ПРІМЕР З ЗАРПЛАТНЕЮ//ПРИВАТНА ПЕРЕМЕННА ПРІМЕР З ЗАРПЛАТНЕЮ//ПРИВАТНА ПЕРЕМЕННА ПРІМЕР З ЗАРПЛАТНЕЮ
//ПРИВАТНА ПЕРЕМЕННА ПРІМЕР З ЗАРПЛАТНЕЮ//ПРИВАТНА ПЕРЕМЕННА ПРІМЕР З ЗАРПЛАТНЕЮ//ПРИВАТНА ПЕРЕМЕННА ПРІМЕР З ЗАРПЛАТНЕЮ//ПРИВАТНА ПЕРЕМЕННА ПРІМЕР З ЗАРПЛАТНЕЮ
//ПРИВАТНА ПЕРЕМЕННА ПРІМЕР З ЗАРПЛАТНЕЮ//ПРИВАТНА ПЕРЕМЕННА ПРІМЕР З ЗАРПЛАТНЕЮ//ПРИВАТНА ПЕРЕМЕННА ПРІМЕР З ЗАРПЛАТНЕЮ//ПРИВАТНА ПЕРЕМЕННА ПРІМЕР З ЗАРПЛАТНЕЮ
// const salaryManagerFactory = function (employeeName, baseSalary) {
//   let salary = baseSalary;
//   const changeBy = function (amount) {
//     salary += amount;
//   };
//   return {
//     raise(amount) {
//       changeBy(amount);
//     },
//     lower(amount) {
//       changeBy(amount);
//     },
//     current() {
//       return `Зарплатня зараз ${employeeName} - ${salary}`;
//     },
//   };
// };
// const salary = {
//   Jhonny: 500,
//   Billy: 500,
//   Tommy: 500,
// };

// const salaryManager = salaryManagerFactory("Billy", 3000);
// console.dir(salaryManager.raise);
// console.log(salaryManager.current());
// console.log(salaryManager.current);

//Підключення LOADASH//Підключення LOADASH//Підключення LOADASH//Підключення LOADASH\
//Підключення LOADASH//Підключення LOADASH//Підключення LOADASH//Підключення LOADASH//Підключення LOADASH
//Підключення LOADASH//Підключення LOADASH//Підключення LOADASH//Підключення LOADASH//Підключення LOADASH//Підключення LOADASH
//Підключення LOADASH//Підключення LOADASH//Підключення LOADASH//Підключення LOADASH//Підключення LOADASH
// //Підключення LOADASH//Підключення LOADASH//Підключення LOADASH//Підключення LOADASH//Підключення LOADASH
// console.log(_.isEmpty({ a: 1 }));
// console.log(_.isEmpty());

// const user = {
//   name: "mango",
//   location: {
//     coords: [1, 2],
//     city: "Kharkiv",
//   },
// };

// //чи є єлемент всередині?
// console.log(_.get(user, "location.city"));

// console.log(user?.location?.city);

// //пошук унікальних елементів

// console.log(_.union([1, 2, 3, 4, 5], [2, 0, 4, 5, 5, 7, 8, 9]));
// //range//range//range//range//range
// // з кроком 2
// console.log(_.range(1, 9, 2));

// //sortBy//Фільтруємо за потрібним параметром
// var users = [
//   { user: "fred", age: 48 },
//   { user: "barney", age: 36 },
//   { user: "fred", age: 40 },
//   { user: "barney", age: 34 },
// ];
// console.log(_.sortBy(users, ["user", "age"]));

//пошук одного гравця по мінімальному пораметру

console.log(_.minBy(players, (player) => player.timePlayed));
//slug з будь чого//slug з будь чого//slug з будь чого
console.log(_.kebabCase(`adawdaw aaa   e e e e e rrr 090`));
