// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const values = [];
//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       values.push(product[propName]);
//     }
//   }
//   return values;
// }

//ФУНКЦІЯ КОТРА ПОВЕРТАЄ ЦІНУ ВВЕДЕННОГО ІМЯ З ОБЄКТУ//ФУНКЦІЯ КОТРА ПОВЕРТАЄ ЦІНУ ВВЕДЕННОГО ІМЯ//ФУНКЦІЯ КОТРА ПОВЕРТАЄ ЦІНУ ВВЕДЕН
//ФУНКЦІЯ КОТРА ПОВЕРТАЄ ЦІНУ ВВЕДЕННОГО ІМЯ З ОБЄКТУ//ФУНКЦІЯ КОТРА ПОВЕРТАЄ ЦІНУ ВВЕДЕННОГО ІМЯ////ФУНКЦІЯ КОТРА ПОВЕРТАЄ ЦІНУ ВВЕД
//ФУНКЦІЯ КОТРА ПОВЕРТАЄ ЦІНУ ВВЕДЕННОГО ІМЯ З ОБЄКТУ//ФУНКЦІЯ КОТРА ПОВЕРТАЄ ЦІНУ ВВЕДЕННОГО ІМЯ////ФУНКЦІЯ КОТРА ПОВЕРТАЄ ЦІНУ ВВЕД
//ФУНКЦІЯ КОТРА ПОВЕРТАЄ ЦІНУ ВВЕДЕННОГО ІМЯ З ОБЄКТУ//ФУНКЦІЯ КОТРА ПОВЕРТАЄ ЦІНУ ВВЕДЕННОГО ІМЯ//

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
// }

//ФУНКЦІЯ ЯКА ПОМНОЖАЄ ЦІНУ З ОБЄКТУ ТА КІЛЬКІСТЬ І ВИВОДЕ РЕЗУЛЬТАТ//ФУНКЦІЯ ЯКА ПОМНОЖАЄ ЦІНУ З ОБЄКТУ ТА КІЛЬКІСТЬ І ВИВОДЕ РЕЗУЛЬТАТ//ФУНКЦІЯ ЯКА ПОМНОЖАЄ ЦІНУ З ОБЄКТУ ТА КІЛЬКІСТЬ І ВИВОДЕ РЕЗУЛЬТАТ
//ФУНКЦІЯ ЯКА ПОМНОЖАЄ ЦІНУ З ОБЄКТУ ТА КІЛЬКІСТЬ І ВИВОДЕ РЕЗУЛЬТАТ//ФУНКЦІЯ ЯКА ПОМНОЖАЄ ЦІНУ З ОБЄКТУ ТА КІЛЬКІСТЬ І ВИВОДЕ РЕЗУЛЬТАТ//ФУНКЦІЯ ЯКА ПОМНОЖАЄ ЦІНУ З ОБЄКТУ ТА КІЛЬКІСТЬ І ВИВОДЕ РЕЗУЛЬТАТ
//ФУНКЦІЯ ЯКА ПОМНОЖАЄ ЦІНУ З ОБЄКТУ ТА КІЛЬКІСТЬ І ВИВОДЕ РЕЗУЛЬТАТ//ФУНКЦІЯ ЯКА ПОМНОЖАЄ ЦІНУ З ОБЄКТУ ТА КІЛЬКІСТЬ І ВИВОДЕ РЕЗУЛЬТАТ//ФУНКЦІЯ ЯКА ПОМНОЖАЄ ЦІНУ З ОБЄКТУ ТА КІЛЬКІСТЬ І ВИВОДЕ РЕЗУЛЬТАТ
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }
//   return 0;
// }
//ДЕСТРУКТИРІЗОВАНнИЙ КОД, ЯКИЙ ПУШІТЬ КОЛЬОРИ З ОБЄКТУ У МАССИВИ//ДЕСТРУКТИРІЗОВАНнИЙ КОД, ЯКИЙ ПУШІТЬ КОЛЬОРИ З ОБЄКТУ У МАССИВИ//ДЕСТРУКТИРІЗОВАНнИЙ КОД, ЯКИЙ ПУШІТЬ КОЛЬОРИ З ОБЄКТУ У МАССИВИ
//ДЕСТРУКТИРІЗОВАНнИЙ КОД, ЯКИЙ ПУШІТЬ КОЛЬОРИ З ОБЄКТУ У МАССИВИ//ДЕСТРУКТИРІЗОВАНнИЙ КОД, ЯКИЙ ПУШІТЬ КОЛЬОРИ З ОБЄКТУ У МАССИВИ//ДЕСТРУКТИРІЗОВАНнИЙ КОД, ЯКИЙ ПУШІТЬ КОЛЬОРИ З ОБЄКТУ У МАССИВИ
//ДЕСТРУКТИРІЗОВАНнИЙ КОД, ЯКИЙ ПУШІТЬ КОЛЬОРИ З ОБЄКТУ У МАССИВИ//ДЕСТРУКТИРІЗОВАНнИЙ КОД, ЯКИЙ ПУШІТЬ КОЛЬОРИ З ОБЄКТУ У МАССИВИ//ДЕСТРУКТИРІЗОВАНнИЙ КОД, ЯКИЙ ПУШІТЬ КОЛЬОРИ З ОБЄКТУ У МАССИВИ
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

//ДВА ВИДИ ДЕСТРУКТИРІЗАЦІЇ ОДНОГО ПАРАМЕТРУ ВСЕРЕДИНІ ФУНКЦІЇ//ДВА ВИДИ ДЕСТРУКТИРІЗАЦІЇ ОДНОГО ПАРАМЕТРУ ВСЕРЕДИНІ ФУНКЦІЇ//ДВА ВИДИ ДЕСТРУКТИРІЗАЦІЇ ОДНОГО ПАРАМЕТРУ ВСЕРЕДИНІ ФУНКЦІЇ
//ДВА ВИДИ ДЕСТРУКТИРІЗАЦІЇ ОДНОГО ПАРАМЕТРУ ВСЕРЕДИНІ ФУНКЦІЇ//ДВА ВИДИ ДЕСТРУКТИРІЗАЦІЇ ОДНОГО ПАРАМЕТРУ ВСЕРЕДИНІ ФУНКЦІЇ//ДВА ВИДИ ДЕСТРУКТИРІЗАЦІЇ ОДНОГО ПАРАМЕТРУ ВСЕРЕДИНІ ФУНКЦІЇ
//ДВА ВИДИ ДЕСТРУКТИРІЗАЦІЇ ОДНОГО ПАРАМЕТРУ ВСЕРЕДИНІ ФУНКЦІЇ//ДВА ВИДИ ДЕСТРУКТИРІЗАЦІЇ ОДНОГО ПАРАМЕТРУ ВСЕРЕДИНІ ФУНКЦІЇ//ДВА ВИДИ ДЕСТРУКТИРІЗАЦІЇ ОДНОГО ПАРАМЕТРУ ВСЕРЕДИНІ ФУНКЦІЇ

// function calculateMeanTemperature(forecast) {//варіант1
//   const {
//     today: { low: todayLow, high: todayHigh },//варіант1
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },//варіант1
//   } = forecast;//варіант1

//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;//варіант1
// }

// function calculateMeanTemperature({//Варіант2
//   today: { low: todayLow, high: todayHigh },//Варіант2
//   tomorrow: { low: tomorrowLow, high: tomorrowHigh },//Варіант2
// }) {//Варіант2
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;//Варіант2
// }

//ФУНКЦІЯ ЯКА ПРИЙМАЄ ПАРАМЕТР З ВКАЗАННИМИ ВЛАСТИВОСТЯМИ//ФУНКЦІЯ ЯКА ПРИЙМАЄ ПАРАМЕТР З ВКАЗАННИМИ ВЛАСТИВОСТЯМИ//ФУНКЦІЯ ЯКА ПРИЙМАЄ ПАРАМЕТР З ВКАЗАННИМИ ВЛАСТИВОСТЯМИ
//ФУНКЦІЯ ЯКА ПРИЙМАЄ ПАРАМЕТР З ВКАЗАННИМИ ВЛАСТИВОСТЯМИ//ФУНКЦІЯ ЯКА ПРИЙМАЄ ПАРАМЕТР З ВКАЗАННИМИ ВЛАСТИВОСТЯМИ//ФУНКЦІЯ ЯКА ПРИЙМАЄ ПАРАМЕТР З ВКАЗАННИМИ ВЛАСТИВОСТЯМИ
//ФУНКЦІЯ ЯКА ПРИЙМАЄ ПАРАМЕТР З ВКАЗАННИМИ ВЛАСТИВОСТЯМИ//ФУНКЦІЯ ЯКА ПРИЙМАЄ ПАРАМЕТР З ВКАЗАННИМИ ВЛАСТИВОСТЯМИ
// function makeTask(data) {
//   const completed = false;
//   const category = data.hasOwnProperty("category") ? data.category : "General";
//   const priority = data.hasOwnProperty("priority") ? data.priority : "Normal";

//   return {
//     text: data.text,
//     category: category,
//     priority: priority,
//     completed: completed,
//   };
// }

//ФУНКЦІЯ ЯКА ЗНАХОДИТЬ СУММУ ВСИХ ВВЕДЕНИХ ЗА ДОПОМОГОЮ РЕСТ Массивів//ФУНКЦІЯ ЯКА ЗНАХОДИТЬ СУММУ ВСИХ ВВЕДЕНИХ ЗА ДОПОМОГОЮ РЕСТ Массивів//ФУНКЦІЯ ЯКА ЗНАХОДИТЬ СУММУ ВСИХ ВВЕДЕНИХ ЗА ДОПОМОГОЮ РЕСТ Массивів
//ФУНКЦІЯ ЯКА ЗНАХОДИТЬ СУММУ ВСИХ ВВЕДЕНИХ ЗА ДОПОМОГОЮ РЕСТ Массивів//ФУНКЦІЯ ЯКА ЗНАХОДИТЬ СУММУ ВСИХ ВВЕДЕНИХ ЗА ДОПОМОГОЮ РЕСТ Массивів//ФУНКЦІЯ ЯКА ЗНАХОДИТЬ СУММУ ВСИХ ВВЕДЕНИХ ЗА ДОПОМОГОЮ РЕСТ Массивів
//ФУНКЦІЯ ЯКА ЗНАХОДИТЬ СУММУ ВСИХ ВВЕДЕНИХ ЗА ДОПОМОГОЮ РЕСТ Массивів//ФУНКЦІЯ ЯКА ЗНАХОДИТЬ СУММУ ВСИХ ВВЕДЕНИХ ЗА ДОПОМОГОЮ РЕСТ Массивів//ФУНКЦІЯ ЯКА ЗНАХОДИТЬ СУММУ ВСИХ ВВЕДЕНИХ ЗА ДОПОМОГОЮ РЕСТ Массивів
// function flattenArray(arr) {
//   return arr.reduce((acc, curr) => {
//     if (Array.isArray(curr)) {
//       return [...acc, ...flattenArray(curr)]; // Рекурсивно перетворюємо вкладений масив в один великий
//     } else {
//       return [...acc, curr];
//     }
//   }, []);
// }

// const nestedArray = [1, [2, 3], [4, [5, 6]]];
// const flattenedArray = flattenArray(nestedArray);
// console.log(flattenedArray); // Виведе: [1, 2, 3, 4, 5, 6]

// const sum = flattenedArray.reduce((acc, num) => acc + num, 0);
// console.log(sum); // Виведе: 21 (сума всіх елементів масиву)

//ФУНКЦІЯ ЯКА ЗНАХОДИТЬ СУММУ ВСИХ ВВЕДЕНИХ ЗА ДОПОМОГОЮ РЕСТ Массивів//ФУНКЦІЯ ЯКА ЗНАХОДИТЬ СУММУ ВСИХ ВВЕДЕНИХ ЗА ДОПОМОГОЮ РЕСТ Массивів//ФУНКЦІЯ ЯКА ЗНАХОДИТЬ СУММУ ВСИХ ВВЕДЕНИХ ЗА ДОПОМОГОЮ РЕСТ Массивів
//ФУНКЦІЯ ЯКА ЗНАХОДИТЬ СУММУ ВСИХ ВВЕДЕНИХ ЗА ДОПОМОГОЮ РЕСТ Массивів//ФУНКЦІЯ ЯКА ЗНАХОДИТЬ СУММУ ВСИХ ВВЕДЕНИХ ЗА ДОПОМОГОЮ РЕСТ Массивів//ФУНКЦІЯ ЯКА ЗНАХОДИТЬ СУММУ ВСИХ ВВЕДЕНИХ ЗА ДОПОМОГОЮ РЕСТ Массивів
//ФУНКЦІЯ ЯКА ЗНАХОДИТЬ СУММУ ВСИХ ВВЕДЕНИХ ЗА ДОПОМОГОЮ РЕСТ Массивів//ФУНКЦІЯ ЯКА ЗНАХОДИТЬ СУММУ ВСИХ ВВЕДЕНИХ ЗА ДОПОМОГОЮ РЕСТ Массивів//ФУНКЦІЯ ЯКА ЗНАХОДИТЬ СУММУ ВСИХ ВВЕДЕНИХ ЗА ДОПОМОГОЮ РЕСТ Массивів
// function flattenObject(obj) {
//   const flattened = Object.values(obj).reduce((acc, curr) => {
//     if (typeof curr === "object" && !Array.isArray(curr) && curr !== null) {
//       return [...acc, ...flattenObject(curr)]; // Рекурсивно перетворюємо вкладений об'єкт в один великий
//     } else {
//       return [...acc, curr];
//     }
//   }, []);
//   return flattened.filter((el) => typeof el === "number"); // Вибираємо тільки числа для обчислення суми
// }

// const nestedObject = {
//   a: 1,
//   b: { c: 2, d: { e: 3 } },
//   f: { g: 4, h: 5 },
// };

// const flattenedObject = flattenObject(nestedObject);
// console.log(flattenedObject); // Виведе: [1, 2, 3, 4, 5]

// const sum = flattenedObject.reduce((acc, num) => acc + num, 0);
// console.log(sum); // Виведе: 15 (сума всіх чисел в об'єкті)

// ФУНКЦІЯ ЯКА РАХУЄ СУММУ ЧИСЕЛ БІЛЬШИХ НІЖ ПЕРШЕ ЧИСЛО МАССИВУ ЗА ДОПОМОГОЮ РЕСТ// ФУНКЦІЯ ЯКА РАХУЄ СУММУ ЧИСЕЛ БІЛЬШИХ НІЖ ПЕРШЕ ЧИСЛО МАССИВУ ЗА ДОПОМОГОЮ РЕСТ
// ФУНКЦІЯ ЯКА РАХУЄ СУММУ ЧИСЕЛ БІЛЬШИХ НІЖ ПЕРШЕ ЧИСЛО МАССИВУ ЗА ДОПОМОГОЮ РЕСТ// ФУНКЦІЯ ЯКА РАХУЄ СУММУ ЧИСЕЛ БІЛЬШИХ НІЖ ПЕРШЕ ЧИСЛО МАССИВУ ЗА ДОПОМОГОЮ РЕСТ
// ФУНКЦІЯ ЯКА РАХУЄ СУММУ ЧИСЕЛ БІЛЬШИХ НІЖ ПЕРШЕ ЧИСЛО МАССИВУ ЗА ДОПОМОГОЮ РЕСТ// ФУНКЦІЯ ЯКА РАХУЄ СУММУ ЧИСЕЛ БІЛЬШИХ НІЖ ПЕРШЕ ЧИСЛО МАССИВУ ЗА ДОПОМОГОЮ РЕСТ

// function addOverNum(number, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > number) {
//       total += arg;
//     }
//   }

//   return total;
// }
// ОБЄКТ З ТРЕКАМИ ДОДАВАННЯМ ТРЕКУ ТА ЗМІНИ РЕЙТИНГУ// ОБЄКТ З ТРЕКАМИ ДОДАВАННЯМ ТРЕКУ ТА ЗМІНИ РЕЙТИНГУ// ОБЄКТ З ТРЕКАМИ ДОДАВАННЯМ ТРЕКУ ТА ЗМІНИ РЕЙТИНГУ
// ОБЄКТ З ТРЕКАМИ ДОДАВАННЯМ ТРЕКУ ТА ЗМІНИ РЕЙТИНГУ// ОБЄКТ З ТРЕКАМИ ДОДАВАННЯМ ТРЕКУ ТА ЗМІНИ РЕЙТИНГУ// ОБЄКТ З ТРЕКАМИ ДОДАВАННЯМ ТРЕКУ ТА ЗМІНИ РЕЙТИНГУ
// ОБЄКТ З ТРЕКАМИ ДОДАВАННЯМ ТРЕКУ ТА ЗМІНИ РЕЙТИНГУ// ОБЄКТ З ТРЕКАМИ ДОДАВАННЯМ ТРЕКУ ТА ЗМІНИ РЕЙТИНГУ// ОБЄКТ З ТРЕКАМИ ДОДАВАННЯМ ТРЕКУ ТА ЗМІНИ РЕЙТИНГУ

// const playlist = {
//   name: "My playlist",
//   rating: 5,
//   tracks: ["lawanda", "poppins", "abba"],
//   //   trackCount: 3,
//   changeName(newName) {
//     console.log("This inside:  ", this);
//     this.name = newName;
//   },
//   addTrack(track) {
//     this.tracks.push(track);
//   },
//   updateRating(newRating) {
//     this.rating = newRating;
//   },
//   getTrackCount() {
//     return this.tracks.length;
//   },
// };

// playlist.changeName("New Name");
// playlist.addTrack("New Track");
// playlist.updateRating(4);

// console.log(playlist.getTrackCount());
// console.log(playlist);e

//ФУНКЦІЯ ЯКА ДОСТАЄ (ШУКАЄ) ІМЕНА ІЗ ОБЄКТУ //ФУНКЦІЯ ЯКА ДОСТАЄ ІМЕНА ІЗ ОБЄКТУ //ФУНКЦІЯ ЯКА ДОСТАЄ ІМЕНА ІЗ ОБЄКТУ //ФУНКЦІЯ ЯКА ДОСТАЄ ІМЕНА ІЗ ОБЄКТУ
//ФУНКЦІЯ ЯКА ДОСТАЄ (ШУКАЄ) ІМЕНА ІЗ ОБЄКТУ //ФУНКЦІЯ ЯКА ДОСТАЄ ІМЕНА ІЗ ОБЄКТУ //ФУНКЦІЯ ЯКА ДОСТАЄ ІМЕНА ІЗ ОБЄКТУ
//ФУНКЦІЯ ЯКА ДОСТАЄ (ШУКАЄ) ІМЕНА ІЗ ОБЄКТУ //ФУНКЦІЯ ЯКА ДОСТАЄ ІМЕНА ІЗ ОБЄКТУ //ФУНКЦІЯ ЯКА ДОСТАЄ ІМЕНА ІЗ ОБЄКТУ
// const friends = [
//   { name: "mango", online: false },
//   { name: "terry", online: false },
//   { name: "beeebo", online: true },
//   { name: "ari", online: true },
//   { name: "Eva", online: false },
// ];

// console.table(friends);

// const findFriendByName = function (allFriends, friendName) {
//   for (const friend of allFriends) {
//     if (friend.name === friendName) {
//       return "Finded";
//     }
//   }
//   return "Not finded";
// };

// console.log(findFriendByName(friends, "beeebo"));
// console.log(findFriendByName(friends, "Eva"));

//ФУНКЦІЯ ЯКА ПУШЕ ІМЕНА ТИХ ХТО ОНЛАЙН//ФУНКЦІЯ ЯКА ПУШЕ ІМЕНА ТИХ ХТО ОНЛАЙН//ФУНКЦІЯ ЯКА ПУШЕ ІМЕНА ТИХ ХТО ОНЛАЙН
//ФУНКЦІЯ ЯКА ПУШЕ ІМЕНА ТИХ ХТО ОНЛАЙН//ФУНКЦІЯ ЯКА ПУШЕ ІМЕНА ТИХ ХТО ОНЛАЙН//ФУНКЦІЯ ЯКА ПУШЕ ІМЕНА ТИХ ХТО ОНЛАЙН//ФУНКЦІЯ ЯКА ПУШЕ ІМЕНА ТИХ ХТО ОНЛАЙН
//ФУНКЦІЯ ЯКА ПУШЕ ІМЕНА ТИХ ХТО ОНЛАЙН//ФУНКЦІЯ ЯКА ПУШЕ ІМЕНА ТИХ ХТО ОНЛАЙН//ФУНКЦІЯ ЯКА ПУШЕ ІМЕНА ТИХ ХТО ОНЛАЙН
// const getAllNames = function (allFriends) {
//   const names = [];
//   for (const friend of allFriends) {
//     console.log(friend.name);
//     names.push(friend.name);
//   }
//   return names;
// };

// console.log(getAllNames(friends));

//ФУНКЦІЯ ЯКА ВИВОДИТЬ ВСИХ ДРУЗІВ КОТРІ ОНЛАЙН//ФУНКЦІЯ ЯКА ВИВОДИТЬ ВСИХ ДРУЗІВ КОТРІ ОНЛАЙН//ФУНКЦІЯ ЯКА ВИВОДИТЬ ВСИХ ДРУЗІВ КОТРІ ОНЛАЙН//ФУНКЦІЯ ЯКА ВИВОДИТЬ ВСИХ ДРУЗІВ КОТРІ ОНЛАЙН
//ФУНКЦІЯ ЯКА ВИВОДИТЬ ВСИХ ДРУЗІВ КОТРІ ОНЛАЙН//ФУНКЦІЯ ЯКА ВИВОДИТЬ ВСИХ ДРУЗІВ КОТРІ ОНЛАЙН//ФУНКЦІЯ ЯКА ВИВОДИТЬ ВСИХ ДРУЗІВ КОТРІ ОНЛАЙН
//ФУНКЦІЯ ЯКА ВИВОДИТЬ ВСИХ ДРУЗІВ КОТРІ ОНЛАЙН//ФУНКЦІЯ ЯКА ВИВОДИТЬ ВСИХ ДРУЗІВ КОТРІ ОНЛАЙН//ФУНКЦІЯ ЯКА ВИВОДИТЬ ВСИХ ДРУЗІВ КОТРІ ОНЛАЙН

// const getOnlineFriends = function (allFriends) {
//   const onlineFriendds = [];
//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.online);
//     if (friend.online) {
//       onlineFriendds.push(friend);
//     }
//   }
//   return onlineFriendds;
// };

// console.log();
// console.log(getOnlineFriends(friends));

//ФУНКЦІЯ ЯКА ВИВОДИТЬ ВСИХ ДРУЗІВ КОТРІ ОФФЛАЙН//ФУНКЦІЯ ЯКА ВИВОДИТЬ ВСИХ ДРУЗІВ КОТРІ ОФФЛАЙН//ФУНКЦІЯ ЯКА ВИВОДИТЬ ВСИХ ДРУЗІВ КОТРІ ОНЛАЙН//ФУНКЦІЯ ЯКА ВИВОДИТЬ ВСИХ ДРУЗІВ КОТРІ ОНЛАЙН
//ФУНКЦІЯ ЯКА ВИВОДИТЬ ВСИХ ДРУЗІВ КОТРІ ОФФЛАЙН//ФУНКЦІЯ ЯКА ВИВОДИТЬ ВСИХ ДРУЗІВ КОТРІ ОФФЛАЙН//ФУНКЦІЯ ЯКА ВИВОДИТЬ ВСИХ ДРУЗІВ КОТРІ ОНЛАЙН
//ФУНКЦІЯ ЯКА ВИВОДИТЬ ВСИХ ДРУЗІВ КОТРІ ОФФЛАЙН//ФУНКЦІЯ ЯКА ВИВОДИТЬ ВСИХ ДРУЗІВ КОТРІ ОФФЛАЙН//ФУНКЦІЯ ЯКА ВИВОДИТЬ ВСИХ ДРУЗІВ КОТРІ ОНЛ
// const getOfflineFriends = function (allFriends) {
//   const offlineFriendds = [];
//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.online);
//     if (!friend.online) {
//       offlineFriendds.push(friend);
//     }
//   }
//   return offlineFriendds;
// };

// console.log();
// console.log(getOfflineFriends(friends));

//ФУНКЦІЯ ЯКА ВИВОДИТЬ ВСИХ ДРУЗІВ КОТРІ ОФФЛАЙН ТА ОНЛАЙН//ФУНКЦІЯ ЯКА ВИВОДИТЬ ВСИХ ДРУЗІВ КОТРІ ОФФЛАЙН ТА ОНЛАЙН//ФУНКЦІЯ ЯКА ВИВОДИТЬ ВСИХ ДРУЗІВ КОТРІ ОНЛАЙН//ФУНКЦІЯ ЯКА ВИВОДИТЬ ВСИХ ДРУЗІВ КОТРІ ОНЛАЙН
//ФУНКЦІЯ ЯКА ВИВОДИТЬ ВСИХ ДРУЗІВ КОТРІ ОФФЛАЙН та ОНЛАЙН//ФУНКЦІЯ ЯКА ВИВОДИТЬ ВСИХ ДРУЗІВ КОТРІ ОФФЛАЙН ТА ОНЛАЙН//ФУНКЦІЯ ЯКА ВИВОДИТЬ ВСИХ ДРУЗІВ КОТРІ ОНЛАЙН
//ФУНКЦІЯ ЯКА ВИВОДИТЬ ВСИХ ДРУЗІВ КОТРІ ОФФЛАЙНТА ОНЛАЙН//ФУНКЦІЯ ЯКА ВИВОДИТЬ ВСИХ ДРУЗІВ КОТРІ ОФФЛАЙН ТА ОНЛАЙН//ФУНКЦІЯ ЯКА ВИВОДИТЬ ВСИХ ДРУЗІВ КОТРІ ОНЛ
// const getFriendsByOnlineStatus = function (allFriends) {
//   const firendsStatus = {
//     online: [],
//     offline: [],
//   };
//   for (const friend of allFriends) {
//     if (friend.online) {
//       firendsStatus.online.push(friend);
//       continue;
//     }
//     firendsStatus.offline.push(friend);

//     // const key = friend.online ? "online" : "offline";//Продвинутий спосіб
//     // firendsStatus[key].push(friend);//Продвинутий спосіб
//   }
//   return firendsStatus;
// };

// console.log();
// console.log(getFriendsByOnlineStatus(friends));

//ПРАЦЮЄМО НАД КОРЗИНОЮ ТОВАРІВ //ПРАЦЮЄМО НАД КОРЗИНОЮ ТОВАРІВ //ПРАЦЮЄМО НАД КОРЗИНОЮ ТОВАРІВ //ПРАЦЮЄМО НАД КОРЗИНОЮ ТОВАРІВ //ПРАЦЮЄМО НАД КОРЗИНОЮ ТОВАРІВ
//ПРАЦЮЄМО НАД КОРЗИНОЮ ТОВАРІВ //ПРАЦЮЄМО НАД КОРЗИНОЮ ТОВАРІВ //ПРАЦЮЄМО НАД КОРЗИНОЮ ТОВАРІВ //ПРАЦЮЄМО НАД КОРЗИНОЮ ТОВАРІВ //ПРАЦЮЄМО НАД КОРЗИНОЮ ТОВАРІВ
//ПРАЦЮЄМО НАД КОРЗИНОЮ ТОВАРІВ //ПРАЦЮЄМО НАД КОРЗИНОЮ ТОВАРІВ //ПРАЦЮЄМО НАД КОРЗИНОЮ ТОВАРІВ //ПРАЦЮЄМО НАД КОРЗИНОЮ ТОВАРІВ //ПРАЦЮЄМО НАД КОРЗИНОЮ ТОВАРІВ
//ПРАЦЮЄМО НАД КОРЗИНОЮ ТОВАРІВ //ПРАЦЮЄМО НАД КОРЗИНОЮ ТОВАРІВ //ПРАЦЮЄМО НАД КОРЗИНОЮ ТОВАРІВ //ПРАЦЮЄМО НАД КОРЗИНОЮ ТОВАРІВ //ПРАЦЮЄМО НАД КОРЗИНОЮ ТОВАРІВ
// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     const { items } = this;
//     for (const item of items) {
//       if (item.name === product.name) {
//         console.log("This product in the backet:  ", product.name);
//         item.quantity += 1;
//         return;
//       }
//     }
//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };
//     this.items.push(newProduct);
//   },
//   remove(productName) {
//     const { items } = this;
//     for (let i = 0; i < items.length; i += 1) {
//       const { name } = items[i];
//       if (productName === name) {
//         console.log("finded this product: ", productName);
//         console.log("Index = ", i, " ittem will be deleted");
//         items.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     const { items } = this;
//     let total = 0;

//     for (const { price, quantity } of items) {
//       total += price * quantity;
//     }
//     return total;
//   },
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };

// // const getTotalProductPrice = function ({ price, quantity }) {
// //   //CУММА ОДНОГО ПРОДУКТУ
// //   return price * quantity; //CУММА ОДНОГО ПРОДУКТУ
// // };//CУММА ОДНОГО ПРОДУКТУ
// // console.log(getProductTotalPrice(cart.items[0]));//CУММА ОДНОГО ПРОДУКТУ

// console.table(cart.getItems());
// cart.add({ name: "🍏", price: 50 });
// cart.add({ name: "🍓", price: 60 });
// cart.add({ name: "🍓", price: 60 });
// cart.add({ name: "🍅", price: 60 });
// cart.add({ name: "🍅", price: 60 });
// cart.add({ name: "🍅", price: 60 });
// cart.add({ name: "🍗", price: 100 });
// cart.add({ name: "🍖", price: 110 });
// console.table(cart.getItems());

// cart.remove("🍏");
// console.table(cart.getItems());
// console.log("TOTAL:  ", cart.countTotalPrice());

// cart.clear();
// console.log("TOTAL:  ", cart.countTotalPrice());

// SPRED REST SPRED REST SPRED// SPRED REST SPRED REST SPRED// SPRED REST SPRED REST SPRED// SPRED REST SPRED REST SPRED
// SPRED REST SPRED REST SPRED// SPRED REST SPRED REST SPRED// SPRED REST SPRED REST SPRED// SPRED REST SPRED REST SPRED
// SPRED REST SPRED REST SPRED// SPRED REST SPRED REST SPRED// SPRED REST SPRED REST SPRED// SPRED REST SPRED REST SPRED
// SPRED REST SPRED REST SPRED// SPRED REST SPRED REST SPRED// SPRED REST SPRED REST SPRED// SPRED REST SPRED REST SPRED
// SPRED REST SPRED REST SPRED// SPRED REST SPRED REST SPRED// SPRED REST SPRED REST SPRED// SPRED REST SPRED REST SPRED// SPRED REST SPRED REST SPRED
// SPRED REST SPRED REST SPRED// SPRED REST SPRED REST SPRED// SPRED REST SPRED REST SPRED// SPRED REST SPRED REST SPRED
// SPRED REST SPRED REST SPRED// SPRED REST SPRED REST SPRED// SPRED REST SPRED REST SPRED// SPRED REST SPRED REST SPRED
// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9, 0]);
// console.log(numbers);

// const numbers = [0, 5, 19, ...[1, 2, 3, 1000, 2020], 4, 5, 10, ...[222, 222, 333]];
// console.log(numbers);

//САМА МАЛЕНЬЬКА ТА САМА ВЕЛИКА ТЕМПЕРатУРА//САМА МАЛЕНЬЬКА ТА САМА ВЕЛИКА ТЕМПЕРатУРА//САМА МАЛЕНЬЬКА ТА САМА ВЕЛИКА ТЕМПЕРатУРА
//САМА МАЛЕНЬЬКА ТА САМА ВЕЛИКА ТЕМПЕРатУРА//САМА МАЛЕНЬЬКА ТА САМА ВЕЛИКА ТЕМПЕРатУРА//САМА МАЛЕНЬЬКА ТА САМА ВЕЛИКА ТЕМПЕРатУРА
//САМА МАЛЕНЬЬКА ТА САМА ВЕЛИКА ТЕМПЕРатУРА//САМА МАЛЕНЬЬКА ТА САМА ВЕЛИКА ТЕМПЕРатУРА//САМА МАЛЕНЬЬКА ТА САМА ВЕЛИКА ТЕМПЕРатУРА
//САМА МАЛЕНЬЬКА ТА САМА ВЕЛИКА ТЕМПЕРатУРА//САМА МАЛЕНЬЬКА ТА САМА ВЕЛИКА ТЕМПЕРатУРА//САМА МАЛЕНЬЬКА ТА САМА ВЕЛИКА ТЕМПЕРатУРА
// const temps = [22, 12, 18, 32, 4, 5, 7, 23, 18, 18, 12];
// console.log(Math.max(...temps));
// console.log(Math.min(...temps));

//ЗЄДНУЄМО МАССИВИ//ЗЄДНУЄМО МАССИВИ//ЗЄДНУЄМО МАССИВИ//ЗЄДНУЄМО МАССИВИ//ЗЄДНУЄМО МАССИВИ//ЗЄДНУЄМО МАССИВИ
//ЗЄДНУЄМО МАССИВИ//ЗЄДНУЄМО МАССИВИ//ЗЄДНУЄМО МАССИВИ//ЗЄДНУЄМО МАССИВИ//ЗЄДНУЄМО МАССИВИ//ЗЄДНУЄМО МАССИВИ
// const lastWeekTemps = [1, 2, 3];
// const currentWeekTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentWeekTemps, ...nextWeekTemps];
// console.log(allTemps);

//Пояснення роботи рест РОЗПИЛЕННЯ//Пояснення роботи рест//Пояснення роботи рест//Пояснення роботи рест//Пояснення роботи рест//Пояснення роботи рест
//Пояснення роботи рест РОЗПИЛЕННЯ//Пояснення роботи рест//Пояснення роботи рест//Пояснення роботи рест//Пояснення роботи рест//Пояснення роботи рест

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3, g: { hello: "world", big: "bro" } };

// const b = { x: 1, y: 2, x: 5 };
// console.log(b);

// const c = Object.assign({}, a, b);//Old version

// const c = {
//   //Новий спосіб розпилення
//   name: "bohdan", //Приклад
//   ...a,
//   x: 20,
//   ...b,
//   g: 3,
// };
// console.log(c);

// const defaultSettings = {
//   theme: "light",
//   showNotification: true,
//   hideSidebar: false,
// };

// const userSettings = {
//   showNotification: false,
//   hideSidebar: true,
// };

// const finalSettings = {
//   ...defaultSettings,
//   ...userSettings,
// };

// console.log(finalSettings);

//ПОЯСНЕННЯ РОБОТИ ДЕСТРУКТИРІЗАЦІЇ//ПОЯСНЕННЯ РОБОТИ ДЕСТРУКТИРІЗАЦІЇ//ПОЯСНЕННЯ РОБОТИ ДЕСТРУКТИРІЗАЦІЇ//ПОЯСНЕННЯ РОБОТИ ДЕСТРУКТИРІЗАЦІЇ
//ПОЯСНЕННЯ РОБОТИ ДЕСТРУКТИРІЗАЦІЇ//ПОЯСНЕННЯ РОБОТИ ДЕСТРУКТИРІЗАЦІЇ//ПОЯСНЕННЯ РОБОТИ ДЕСТРУКТИРІЗАЦІЇ//ПОЯСНЕННЯ РОБОТИ ДЕСТРУКТИРІЗАЦІЇ
//ПОЯСНЕННЯ РОБОТИ ДЕСТРУКТИРІЗАЦІЇ//ПОЯСНЕННЯ РОБОТИ ДЕСТРУКТИРІЗАЦІЇ//ПОЯСНЕННЯ РОБОТИ ДЕСТРУКТИРІЗАЦІЇ//ПОЯСНЕННЯ РОБОТИ ДЕСТРУКТИРІЗАЦІЇ

// const playlist = {
//   name: "songs mega hits",
//   rating: 5,
//   tracks: ["track1", "track2", "track3"],
//   trackCount: 3,
// };

// const { name, rating, tracks, trackCount } = playlist; // деструктирізація
// // console.log(playlist.name, playlist.rating, playlist.tracks, playlist.trackCount);
// const showProfileInfo = function ({ singerName, tag, city, ...restProps }) {
//   // console.log(userProfile);
//   // const {
//   //   singerName,
//   //   tag,
//   //   city,
//   //   avatar,
//   //   stats: { followers, vievs, likes },
//   // } = userProfile;

//   console.log(tag, city, restProps);
// };
// const profile = {
//   name: "Liroy Jankiens",
//   tag: "LJ",
//   city: "Queback, Canada",
//   avatar:
//     "https://wse-citaty.ru/wp-content/uploads/2023/01/Foto-avatarka-Luffi-iz-One-Piece_01.jpg",
//   stats: {
//     followers: 30000,
//     vievs: 67000,
//     likes: 170000,
//   },
// };

// showProfileInfo(profile);

// const { followers, vievs, likes } = stats;
// const { singerName, tag, city, ...restProf } = profile;

// // const restProf = {
// //   avatar: profile.avatar,
// //   stats: profile.stats,
// // };

// console.log(tag, singerName, city);
// console.log(restProf);

//ДЕСТРУКТИРИЗАЦІЯ МАСИВВІВ//ДЕСТРУКТИРИЗАЦІЯ МАСИВВІВ//ДЕСТРУКТИРИЗАЦІЯ МАСИВВІВ//ДЕСТРУКТИРИЗАЦІЯ МАСИВВІВ
//ДЕСТРУКТИРИЗАЦІЯ МАСИВВІВ//ДЕСТРУКТИРИЗАЦІЯ МАСИВВІВ//ДЕСТРУКТИРИЗАЦІЯ МАСИВВІВ//ДЕСТРУКТИРИЗАЦІЯ МАСИВВІВ
//ДЕСТРУКТИРИЗАЦІЯ МАСИВВІВ//ДЕСТРУКТИРИЗАЦІЯ МАСИВВІВ//ДЕСТРУКТИРИЗАЦІЯ МАСИВВІВ//ДЕСТРУКТИРИЗАЦІЯ МАСИВВІВ
//ДЕСТРУКТИРИЗАЦІЯ МАСИВВІВ//ДЕСТРУКТИРИЗАЦІЯ МАСИВВІВ//ДЕСТРУКТИРИЗАЦІЯ МАСИВВІВ//ДЕСТРУКТИРИЗАЦІЯ МАСИВВІВ
//ДЕСТРУКТИРИЗАЦІЯ МАСИВВІВ//ДЕСТРУКТИРИЗАЦІЯ МАСИВВІВ//ДЕСТРУКТИРИЗАЦІЯ МАСИВВІВ//ДЕСТРУКТИРИЗАЦІЯ МАСИВВІВ

// const rgb = [255, 255, 0];
// const [a, , c] = rgb;
// console.log(a, c);

// const authors = {
//   kiwi: 8,
//   baya: 7,
//   eddy: 6,
//   gambi: 8,
//   edd: 5,
// };

// const ratings = Object.values(authors);
// console.log(Math.max(...ratings));

// const keys = Object.keys(authors);
// for (const key of keys) {
//   console.log(key);
//   console.log(authors[key]);
// }

// const entries = Object.entries(authors);
// // console.log(entries);
// for (const [name, rating] of entries) {
//   // console.log(entry);
//   // const name = entry[0];
//   // const rating = entry[1];
//   // const [name, rating] = entry;
//   console.log(name, rating);
// }

// ПРОФИЛЬ ЛЮДИНИ В ІНТЕРНЕТ// ПРОФИЛЬ ЛЮДИНИ В ІНТЕРНЕТ// ПРОФИЛЬ ЛЮДИНИ В ІНТЕРНЕТ// ПРОФИЛЬ ЛЮДИНИ В ІНТЕРНЕТ// ПРОФИЛЬ ЛЮДИНИ В ІНТЕРНЕТ
// ПРОФИЛЬ ЛЮДИНИ В ІНТЕРНЕТ// ПРОФИЛЬ ЛЮДИНИ В ІНТЕРНЕТ// ПРОФИЛЬ ЛЮДИНИ В ІНТЕРНЕТ// ПРОФИЛЬ ЛЮДИНИ В ІНТЕРНЕТ// ПРОФИЛЬ ЛЮДИНИ В ІНТЕРНЕТ
// ПРОФИЛЬ ЛЮДИНИ В ІНТЕРНЕТ// ПРОФИЛЬ ЛЮДИНИ В ІНТЕРНЕТ// ПРОФИЛЬ ЛЮДИНИ В ІНТЕРНЕТ// ПРОФИЛЬ ЛЮДИНИ В ІНТЕРНЕТ// ПРОФИЛЬ ЛЮДИНИ В ІНТЕРНЕТ
// ПРОФИЛЬ ЛЮДИНИ В ІНТЕРНЕТ// ПРОФИЛЬ ЛЮДИНИ В ІНТЕРНЕТ// ПРОФИЛЬ ЛЮДИНИ В ІНТЕРНЕТ// ПРОФИЛЬ ЛЮДИНИ В ІНТЕРНЕТ// ПРОФИЛЬ ЛЮДИНИ В ІНТЕРНЕТ
// const makeProfileMarkup = function (userProfile) {
//   const {
//     name,
//     tag,
//     city,
//     avatar,
//     stats: { followers, vievs, likes },
//   } = userProfile;

//   return;
//   `<div>
//     <img src="${avatar}" alt="user avatar" />
//     <p>${name}<span>@${tag}</span></p>
//     <p>Location: ${city}</p>
//     <ul>
//     <li>Followers: ${followers}</li>
//     <li>Vievs ${vievs}</li>
//     <li>likes ${likes}</li>
//     </ul>
//   </div>`;
// };

// const markup = makeProfileMarkup(profile);
// console.log(markup);
// document.body.insertAdjacentHTML("afterbegin", markup);

//МЛЕНЬКИЙ МАГАЗИН ЗІЛЛЯ //МЛЕНЬКИЙ МАГАЗИН ЗІЛЛЯ //МЛЕНЬКИЙ МАГАЗИН ЗІЛЛЯ //МЛЕНЬКИЙ МАГАЗИН ЗІЛЛЯ //МЛЕНЬКИЙ МАГАЗИН ЗІЛЛЯ
//МЛЕНЬКИЙ МАГАЗИН ЗІЛЛЯ //МЛЕНЬКИЙ МАГАЗИН ЗІЛЛЯ //МЛЕНЬКИЙ МАГАЗИН ЗІЛЛЯ //МЛЕНЬКИЙ МАГАЗИН ЗІЛЛЯ //МЛЕНЬКИЙ МАГАЗИН ЗІЛЛЯ
//МЛЕНЬКИЙ МАГАЗИН ЗІЛЛЯ //МЛЕНЬКИЙ МАГАЗИН ЗІЛЛЯ //МЛЕНЬКИЙ МАГАЗИН ЗІЛЛЯ //МЛЕНЬКИЙ МАГАЗИН ЗІЛЛЯ //МЛЕНЬКИЙ МАГАЗИН ЗІЛЛЯ
// const atTheOldToad = {
//   potions: [],

//   addPotion(nameOfPotion) {
//     const { potions } = this;
//     if (!potions.includes(nameOfPotion)) {
//       potions.push(nameOfPotion);
//     }
//   },
//   removePotion(namePotion) {
//     const { potions } = this;
//     const potionIndex = potions.indexOf(namePotion);
//     if (potionIndex !== -1) {
//       potions.splice(potionIndex, 1);
//     }
//   },

//   findPotion(namePotion) {
//     const { potions } = this;
//     for (let potion of potions) {
//       if (namePotion === potion) {
//         return potion;
//       }
//     }
//   },

//   updatePotion(oldPotionName, newPotionName) {
//     const { potions } = this;
//     const potionIndex = potions.indexOf(oldPotionName);
//     if (potionIndex !== -1) {
//       potions.splice(potionIndex, 1, newPotionName);
//     }
//   },
// };

//ОСТАННЯ ЗАДАЧА, РІШЕННЯ//ОСТАННЯ ЗАДАЧА, РІШЕННЯ//ОСТАННЯ ЗАДАЧА, РІШЕННЯ//ОСТАННЯ ЗАДАЧА, РІШЕННЯ//ОСТАННЯ ЗАДАЧА, РІШЕННЯ
//ОСТАННЯ ЗАДАЧА, РІШЕННЯ//ОСТАННЯ ЗАДАЧА, РІШЕННЯ//ОСТАННЯ ЗАДАЧА, РІШЕННЯ//ОСТАННЯ ЗАДАЧА, РІШЕННЯ//ОСТАННЯ ЗАДАЧА, РІШЕННЯ
//ОСТАННЯ ЗАДАЧА, РІШЕННЯ//ОСТАННЯ ЗАДАЧА, РІШЕННЯ//ОСТАННЯ ЗАДАЧА, РІШЕННЯ//ОСТАННЯ ЗАДАЧА, РІШЕННЯ//ОСТАННЯ ЗАДАЧА, РІШЕННЯ

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],

  // Change code below this line
  getPotions() {
    return this.potions;
  },

  addPotion(newPotion) {
    const { potions } = this;
    for (let potion of potions) {
      if (potion.name === newPotion.name) {
        console.log(`Error! Potion ${newPotion.name} is already in your inventory!`);
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    potions.push(newPotion);
    return `${newPotion} added to the inventory`;
  },

  removePotion(potionName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i += 1) {
      if (potions[i].name === potionName) {
        potions.splice(i, 1);
        return `Potion ${potionName} removed from inventory!`;
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },

  updatePotionName(oldName, newName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i += 1) {
      if (potions[i].name === oldName) {
        potions[i].name = newName;
      }
    }
  },
  // Change code above this line
};
