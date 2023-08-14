
                                       МОДУЛЬ1 МОДУЛЬ1 МОДУЛЬ1
                                       МОДУЛЬ1 МОДУЛЬ1 МОДУЛЬ1
                                      МОДУЛЬ1 МОДУЛЬ1 МОДУЛЬ1
// ОПЕРАТОР tyoeOf // ОПЕРАТОР tyoeOf// ОПЕРАТОР tyoeOf// ОПЕРАТОР tyoeOf// ОПЕРАТОР tyoeOf
// ОПЕРАТОР tyoeOf// ОПЕРАТОР tyoeOf// ОПЕРАТОР tyoeOf// ОПЕРАТОР tyoeOf// ОПЕРАТОР tyoeOf
let username;
console.log(typeof username); // "undefined"

let inputValue = null;
console.log(typeof inputValue); // "object"

const quantity = 17;
console.log(typeof quantity); // "number"

const message = "JavaScript is awesome!";
console.log(typeof message); // "string"

const isSidebarOpen = false;
console.log(typeof isSidebarOpen); // "boolean"

//ВИВЕДЕННЯ ДАННИХ//ВИВЕДЕННЯ ДАННИХ//ВИВЕДЕННЯ ДАННИХ//ВИВЕДЕННЯ ДАННИХ//ВИВЕДЕННЯ ДАННИХ//ВИВЕДЕННЯ ДАННИХ
//ВИВЕДЕННЯ ДАННИХ//ВИВЕДЕННЯ ДАННИХ//ВИВЕДЕННЯ ДАННИХ//ВИВЕДЕННЯ ДАННИХ//ВИВЕДЕННЯ ДАННИХ//ВИВЕДЕННЯ ДАННИХ
const username = "Mango";
console.log("Username is ", username); // Username is Mango

const message = "JavaScript is awesome!";
alert(message);

//ОТРИМАННЯ ДАННИХ//ОТРИМАННЯ ДАННИХ//ОТРИМАННЯ ДАННИХ//ОТРИМАННЯ ДАННИХ//ОТРИМАННЯ ДАННИХ//ОТРИМАННЯ ДАННИХ
const isComing = confirm("Please confirm hotel reservation");
console.log(isComing); //Підтвердження повідомлення

const hotelName = prompt("Please enter desired hotel name");
console.log(hotelName);

//Методи Number.parseInt() і Number.parseFloat()Методи Number.parseInt() і Number.parseFloat()Методи Number.par
//Методи Number.parseInt() і Number.parseFloat()Методи Number.parseInt() і Number.parseFloat()Методи Number.par
Метод Number.parseInt() парсить з рядка ціле число.

console.log(Number.parseInt("5px")); // 5
console.log(Number.parseInt("12qwe74")); // 12
console.log(Number.parseInt("12.46qwe79")); // 12
console.log(Number.parseInt("qweqwe")); // NaN


Метод Number.parseFloat() парсить з рядка дробове число.

console.log(Number.parseFloat("5px")); // 5
console.log(Number.parseFloat("12qwe74")); // 12
console.log(Number.parseFloat("12.46qwe79")); // 12.46
console.log(Number.parseFloat("qweqwe")); // NaN



//ПЕРЕВІРКА НА ЧИСЛО //ПЕРЕВІРКА НА ЧИСЛО//ПЕРЕВІРКА НА ЧИСЛО//ПЕРЕВІРКА НА ЧИСЛО//ПЕРЕВІРКА НА ЧИСЛО//ПЕРЕВІРКА НА ЧИСЛО
//ПЕРЕВІРКА НА ЧИСЛО//ПЕРЕВІРКА НА ЧИСЛО//ПЕРЕВІРКА НА ЧИСЛО//ПЕРЕВІРКА НА ЧИСЛО//ПЕРЕВІРКА НА ЧИСЛО//ПЕРЕВІРКА НА ЧИСЛО
const validNumber = Number("51"); // 51
console.log(Number.isNaN(validNumber)); // false

const invalidNumber = Number("qweqwe"); // NaN
console.log(Number.isNaN(invalidNumber)); // true


//КЛАСС Math//КЛАСС Math//КЛАСС Math//КЛАСС Math//КЛАСС Math//КЛАСС Math//КЛАСС Math//КЛАСС Math//КЛАСС Math
//КЛАСС Math//КЛАСС Math//КЛАСС Math//КЛАСС Math//КЛАСС Math//КЛАСС Math//КЛАСС Math//КЛАСС Math//КЛАСС Math
// Math.floor(num) - повертає найменше ціле число,
// менше, або яке дорівнює зазначеному числу
console.log(Math.floor(1.7)); // 1

// Math.ceil(num) - повертає найбільше ціле число,
// більше, або яке дорівнює зазначеному числу.
console.log(Math.ceil(1.2)); // 2

// Math.round(num) - повертає значення числа,
// округленого до найближчого цілого
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.5)); // 2

// Math.max(num1, num2, ...) - повертає найбільше ціле число з набору
console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) - повертає найменше ціле число з набору
console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent) - піднесення до степеня
console.log(Math.pow(2, 4)); // 16

// Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)
console.log(Math.random()); // випадкове число між 0 і 1
console.log(Math.random() * (10 - 1) + 1); // псевдовипадкове число від 1 до 10



//ЗВИЧАЙНА КОНКАТЕНАЦІЯ //ЗВИЧАЙНА КОНКАТЕНАЦІЯ //ЗВИЧАЙНА КОНКАТЕНАЦІЯ //ЗВИЧАЙНА КОНКАТЕНАЦІЯ 
//ЗВИЧАЙНА КОНКАТЕНАЦІЯ //ЗВИЧАЙНА КОНКАТЕНАЦІЯ //ЗВИЧАЙНА КОНКАТЕНАЦІЯ //ЗВИЧАЙНА КОНКАТЕНАЦІЯ 
//ПРАЦЮЄ ТАКОЖ НА МАССИВАХ
const message = "Mango " + "is" + " happy";
console.log(message); // Mango is happy

Подивимось на різний порядок операндів.

console.log(1 + "2"); // "12"
console.log(1 + "2" + 4); // "124"
console.log(1 + 2 + "4"); // "34"

//ШАБЛОННИЙ РЯДОК АБО ШАБЛОННА КОНКАТЕНАЦІЯ //ШАБЛОННИЙ РЯДОК АБО ШАБЛОННА КОНКАТЕНАЦІЯ //ШАБЛОННИЙ 
//ШАБЛОННИЙ РЯДОК АБО ШАБЛОННА КОНКАТЕНАЦІЯ //ШАБЛОННИЙ РЯДОК АБО ШАБЛОННА КОНКАТЕНАЦІЯ //ШАБЛОННИЙ 
const guestName = "Манго";
const roomNumber = 207;
const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
console.log(greeting); // "Welcome Mango, your room number is 207!"



//ВЛАСТИВІСТЬ length//ВЛАСТИВІСТЬ length//ВЛАСТИВІСТЬ length//ВЛАСТИВІСТЬ length//ВЛАСТИВІСТЬ length
//ВЛАСТИВІСТЬ length//ВЛАСТИВІСТЬ length//ВЛАСТИВІСТЬ length//ВЛАСТИВІСТЬ length//ВЛАСТИВІСТЬ length
const message = "Welcome to Bahamas!";
console.log(message.length); // 19
console.log("There is nothing impossible to him who will try".length); // 47


//МЕТОДИ toLowerCase() і toUpperCase()//МЕТОДИ toLowerCase() і toUpperCase()//МЕТОДИ toLowerCase() і toUpperCase()
//МЕТОДИ toLowerCase() і toUpperCase()//МЕТОДИ toLowerCase() і toUpperCase()//МЕТОДИ toLowerCase() і toUpperCase()
const message = "Welcome to Bahamas!";
console.log(message.toLowerCase()); // "welcome to bahamas!"
console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
console.log(message); // "Welcome to Bahamas!"

Щоб не вимагати абсолютно точне введення, можна зробити «нормалізацію» введеного користувачем рядка,
тобто перетворити всі його символи у верхній або нижній регістр.
Методи рядка toLowerCase() і toUpperCase() повернуть новий рядок у відповідному регістрі,
не змінюючи оригінальний.

const BRAND_NAME = "SAMSUNG";
const userInput = "saMsUng";
const normalizedToUpperCaseInput = userInput.toUpperCase();

console.log(userInput); // 'saMsUng'
console.log(userInput === BRAND_NAME); // false
console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
console.log(normalizedToUpperCaseInput === BRAND_NAME); // true

//МЕТОД indexOf()//МЕТОД indexOf()//МЕТОД indexOf()//МЕТОД indexOf()//МЕТОД indexOf()//МЕТОД indexOf()//МЕТОД indexOf()
//МЕТОД indexOf()//МЕТОД indexOf()//МЕТОД indexOf()//МЕТОД indexOf()//МЕТОД indexOf()//МЕТОД indexOf()//МЕТОД indexOf()
ц
Метод indexOf()
Повертає позицію (індекс), на якій знаходиться перший збіг підрядка або -1, якщо нічого не знайдено.

const message = "Welcome to Bahamas!";
console.log(message.indexOf("to")); // 8
console.log(message.indexOf("hello")); // -1

//Метод includes()Метод includes()Метод includes()Метод includes()Метод includes()Метод includes()Метод includes()Метод includes()
//Метод includes()Метод includes()Метод includes()Метод includes()Метод includes()Метод includes()Метод includes()
//ТАКОЖ ВИКОНУЄТЬСЯ ДЛЯ МАССИВІВ
Перевіряє, чи міститься підрядок в рядку, повертає буль - true, якщо міститься, і false - в іншому випадку.Регістр символів в рядку і підрядку має значення, оскільки, наприклад, літера "a" не дорівнює літері "А".

const productName = "Ремонтний дроїд";

console.log(productName.includes("н")); // true
console.log(productName.includes("Н")); // false
console.log(productName.includes("дроїд")); // true
console.log(productName.includes("Дроїд")); // false
console.log(productName.includes("Ремонтний")); // true
console.log(productName.includes("ремонтний")); // false



//Метод endsWith()Метод endsWith()Метод endsWith()Метод endsWith()Метод endsWith()Метод endsWith()Метод endsWith()Метод endsWith()
//Метод endsWith()Метод endsWith()Метод endsWith()Метод endsWith()Метод endsWith()Метод endsWith()Метод endsWith()Метод endsWith()
Метод endsWith()
Дозволяє визначити, чи завершується рядок символами (підрядком), зазначеними в дужках, повертаючи true або false.

const jsFileName = "script.js";
console.log(jsFileName.endsWith(".js")); // true

const cssFileName = "styles.css";
console.log(cssFileName.endsWith(".js")); // false




//Методи replace() і replaceAll()Методи replace() і replaceAll()Методи replace() і replaceAll()Методи replace() і replaceAll()Методи replace() і replaceAll()
//Методи replace() і replaceAll()Методи replace() і replaceAll()Методи replace() і replaceAll()Методи replace() і replaceAll()Методи replace() і replaceAll()
Методи replace() і replaceAll()
Повертає новий рядок, в якому перше (replace) або усі збіги (replaceAll) підрядка замінені на вказане значення.

const jsFileName = "script.js";
const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
console.log(minifiedJsFileName); // "script.min.js"

const cssFileNames = "styles.css, about.css, portfolio.css";
const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"





//Метод slice()Метод slice()Метод slice()Метод slice()Метод slice()Метод slice()Метод slice()Метод slice()Метод slice()
//Метод slice()Метод slice()Метод slice()Метод slice()Метод slice()Метод slice()Метод slice()Метод slice()Метод slice()
//ТАКОЖ ВИКОНУЄТЬСЯ ДЛЯ МАССИВІВ
Метод slice()
Метод рядків slice (startIndex, endIndex) використовується для створення копії частини або всього рядка. Він робить копію елементів рядка від startIndex і до, але не включно endIndex і повертає новий рядок, не змінюючи оригінал.

const productName = "Repair droid";
console.log(productName.slice(0, 4)); // "Repa"
console.log(productName.slice(3, 9)); // "air dr"
console.log(productName.slice(0, productName.length)); // "Repair droid"
console.log(productName.slice(7, productName.length)); // "droid"



//ЦИКЛИ//ЦИКЛИ//ЦИКЛИ//ЦИКЛИ//ЦИКЛИ//ЦИКЛИ//ЦИКЛИ//ЦИКЛИ//ЦИКЛИ//ЦИКЛИ//ЦИКЛИ//ЦИКЛИ//ЦИКЛИ//ЦИКЛИ//ЦИКЛИ//ЦИКЛИ//ЦИКЛИ
//ЦИКЛИ//ЦИКЛИ//ЦИКЛИ//ЦИКЛИ//ЦИКЛИ//ЦИКЛИ//ЦИКЛИ//ЦИКЛИ//ЦИКЛИ//ЦИКЛИ//ЦИКЛИ//ЦИКЛИ//ЦИКЛИ//ЦИКЛИ//ЦИКЛИ//ЦИКЛИ//ЦИКЛИ
Цикл while
Цикл з передумовою — цикл, який виконується, доки правдива якась умова, зазначена до його початку. Ця умова перевіряється до виконання тіла циклу, тому тіло може не виконатися жодного разу, якщо умова від самого початку - хибна.

while (condition) {
  // код, тіло циклу (statement)
}

let counter = 0;

while (counter < 10) {
  console.log("counter: ", counter);
  counter += 1;
}

////////////////////////////////////////
Цикл do...while
Цикл з постумовою - цикл, в якому умова перевіряється після виконання тіла циклу. З цього випливає, що тіло завжди виконується хоча б один раз.

do {
  // statement
} while (condition);

let password = "";

do {
  password = prompt("Введіть пароль довший 4-х символів", "");
} while (password.length < 5);

console.log("Ввели пароль: ", password);



/////////////////////////////////////////////////
Цикл for
Цикл з лічильником - цикл, в якому певна змінна змінює своє значення із заданого початкового до кінцевого значення з деяким кроком, і для кожного значення цієї змінної тіло циклу виконується один раз.

В більшості процедурних мов програмування реалізується конструкцією for, в якій зазначається лічильник, необхідна кількість ітерацій і крок, з яким змінюється лічильник.

for (initialization; condition; post-expression) {
  // statements
}

const target = 3;
let sum = 0;у

for (let i = 0; i <= target; i += 1) {
  sum += i;
}

console.log(sum);





                                                МОДУЛЬ2МОДУЛЬ2МОДУЛЬ2МОДУЛЬ2
                                                МОДУЛЬ2МОДУЛЬ2МОДУЛЬ2МОДУЛЬ2
                                                МОДУЛЬ2МОДУЛЬ2МОДУЛЬ2МОДУЛЬ2
                                                МОДУЛЬ2МОДУЛЬ2МОДУЛЬ2МОДУЛЬ2
//ПЕРЕБИРАЄМО МАСИВ//ПЕРЕБИРАЄМО МАСИВ//ПЕРЕБИРАЄМО МАСИВ//ПЕРЕБИРАЄМО МАСИВ//ПЕРЕБИРАЄМО МАСИВ
//ПЕРЕБИРАЄМО МАСИВ//ПЕРЕБИРАЄМО МАСИВ//ПЕРЕБИРАЄМО МАСИВ//ПЕРЕБИРАЄМО МАСИВ//ПЕРЕБИРАЄМО МАСИВ
const clients = ["Mango", "Ajax", "Poly"];

for (let i = 0; i < clients.length; i += 1) {
  console.log(clients[i]);
}



//МЕТОДИ МАССИВУ SPLIT та JOIN//МЕТОДИ МАССИВУ SPLIT та JOIN//МЕТОДИ МАССИВУ SPLIT та JOIN//МЕТОДИ МАССИВУ SPLIT та JOIN//МЕТОДИ МАССИВУ SPLIT та JOIN
//МЕТОДИ МАССИВУ SPLIT та JOIN//МЕТОДИ МАССИВУ SPLIT та JOIN//МЕТОДИ МАССИВУ SPLIT та JOIN//МЕТОДИ МАССИВУ SPLIT та JOIN//МЕТОДИ МАССИВУ SPLIT та JOIN
//МЕТОДИ МАССИВУ SPLIT та JOIN//МЕТОДИ МАССИВУ SPLIT та JOIN//МЕТОДИ МАССИВУ SPLIT та JOIN//МЕТОДИ МАССИВУ SPLIT та JOIN//МЕТОДИ МАССИВУ SPLIT та JOIN
  Методи масиву
Методи split() і join()
Метод split(delimiter) перетворює рядок в масив, «розбиваючи» його роздільником delimiter. Якщо роздільник - це порожній рядок, то створиться масив окремих символів. Роздільником може бути один або декілька символів.

const name = "Mango";
console.log(name.split("")); // ["M", "a", "n", "g", "o"]

const message = "JavaScript - це цікаво";
console.log(message.split(" ")); // ["JavaScript", "-", "це", "цікаво"]

Метод масивів join(delimiter) об'єднує елементи масиву у рядок. У рядку елементи будуть розділені символом або групою символів, зазначених в delimiter. Тобто ця операція протилежна методу рядків split(delimiter).

const words = ["JavaScript", "це", "цікаво"];
console.log(words.join("")); // "JavaScriptцецікаво"
console.log(words.join(" ")); // "JavaScript це цікаво"
console.log(words.join("-")); // "JavaScript-це-цікаво"


//МАССОВО ПЕРЕВІРЯЄМО МАССИВ НА INCLUDES//МАССОВО ПЕРЕВІРЯЄМО МАССИВ НА INCLUDES//МАССОВО ПЕРЕВІРЯЄМО МАССИВ НА INCLUDES 
//МАССОВО ПЕРЕВІРЯЄМО МАССИВ НА INCLUDES//МАССОВО ПЕРЕВІРЯЄМО МАССИВ НА INCLUDES//МАССОВО ПЕРЕВІРЯЄМО МАССИВ НА INCLUDES
//МАССОВО ПЕРЕВІРЯЄМО МАССИВ НА INCLUDES//МАССОВО ПЕРЕВІРЯЄМО МАССИВ НА INCLUDES//МАССОВО ПЕРЕВІРЯЄМО МАССИВ НА INCLUDES
// Виносимо варіанти в масив
const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
const fruit = "cherry";
// Перевіряємо присутність елемента
const hasFruit = redFruits.includes(fruit);

if (hasFruit) {
  console.log(`${fruit} is a red fruit!`);
}


//МЕТОД ПУШ PUSH //МЕТОД ПУШ PUSH //МЕТОД ПУШ PUSH //МЕТОД ПУШ PUSH //МЕТОД ПУШ PUSH //МЕТОД ПУШ PUSH //МЕТОД ПУШ PUSH //МЕТОД ПУШ PUSH 
//МЕТОД ПУШ PUSH //МЕТОД ПУШ PUSH //МЕТОД ПУШ PUSH //МЕТОД ПУШ PUSH //МЕТОД ПУШ PUSH //МЕТОД ПУШ PUSH //МЕТОД ПУШ PUSH //МЕТОД ПУШ PUSH 
//МЕТОД ПУШ PUSH //МЕТОД ПУШ PUSH //МЕТОД ПУШ PUSH //МЕТОД ПУШ PUSH //МЕТОД ПУШ PUSH //МЕТОД ПУШ PUSH //МЕТОД ПУШ PUSH //МЕТОД ПУШ PUSH 
const numbers = [];

numbers.push(1);
console.log(numbers); // [1]

numbers.push(2);
console.log(numbers); // [1, 2]

numbers.push(3);
console.log(numbers); // [1, 2, 3]

numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]

numbers.push(5);
console.log(numbers); // [1, 2, 3, 4, 5]




//МЕТОД ПОП POP ВИДАЛЯЄ З МАССИВУ ОСТАННІЙ ЕЛЕМЕНТ//МЕТОД ПОП POP ВИДАЛЯЄ З МАССИВУ ОСТАННІЙ ЕЛЕМЕНТ//МЕТОД ПОП POP ВИДАЛЯЄ З МАССИВУ ОСТАННІЙ ЕЛЕМЕНТ
//МЕТОД ПОП POP ВИДАЛЯЄ З МАССИВУ ОСТАННІЙ ЕЛЕМЕНТ//МЕТОД ПОП POP ВИДАЛЯЄ З МАССИВУ ОСТАННІЙ ЕЛЕМЕНТ//МЕТОД ПОП POP ВИДАЛЯЄ З МАССИВУ ОСТАННІЙ ЕЛЕМЕНТ
//МЕТОД ПОП POP ВИДАЛЯЄ З МАССИВУ ОСТАННІЙ ЕЛЕМЕНТ//МЕТОД ПОП POP ВИДАЛЯЄ З МАССИВУ ОСТАННІЙ ЕЛЕМЕНТ//МЕТОД ПОП POP ВИДАЛЯЄ З МАССИВУ ОСТАННІЙ ЕЛЕМЕНТ
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.pop()); //  5
console.log(numbers); // [1, 2, 3, 4]

console.log(numbers.pop()); //  4
console.log(numbers); // [1, 2, 3]

console.log(numbers.pop()); //  3
console.log(numbers); // [1, 2]

console.log(numbers.pop()); //  2
console.log(numbers); // [1]

console.log(numbers.pop()); //  1
console.log(numbers); // []




//МЕТОД SPLICE ВИДАЛЯЄ АБО ЗАМІНЯЄ ЄЛЕМЕНТИ МАССИВУ У ВКАЗАННОМУ МІСЦІ//МЕТОД SPLICE ВИДАЛЯЄ АБО ЗАМІНЯЄ ЄЛЕМЕНТИ МАССИВУ У ВКАЗАННОМУ МІСЦІ
//МЕТОД SPLICE ВИДАЛЯЄ АБО ЗАМІНЯЄ ЄЛЕМЕНТИ МАССИВУ У ВКАЗАННОМУ МІСЦІ//МЕТОД SPLICE ВИДАЛЯЄ АБО ЗАМІНЯЄ ЄЛЕМЕНТИ МАССИВУ У ВКАЗАННОМУ МІСЦІ
//МЕТОД SPLICE ВИДАЛЯЄ АБО ЗАМІНЯЄ ЄЛЕМЕНТИ МАССИВУ У ВКАЗАННОМУ МІСЦІ//МЕТОД SPLICE ВИДАЛЯЄ АБО ЗАМІНЯЄ ЄЛЕМЕНТИ МАССИВУ У ВКАЗАННОМУ МІСЦІ
//ВИДАЛЕННЯ//ВИДАЛЕННЯ//ВИДАЛЕННЯ//ВИДАЛЕННЯ//ВИДАЛЕННЯ//ВИДАЛЕННЯ//ВИДАЛЕННЯ//ВИДАЛЕННЯ//ВИДАЛЕННЯ

Видалення
Щоб видалити елементи в масиві, передаються два аргументи.

splice(position, num)

position - вказує на позицію (індекс) першого елемента для видалення
num - визначає кількість елементів, що видаляються
Метод splice змінює вихідний масив і повертає масив, що містить видалені елементи. Наприклад, у нас є масив оцінок, який містить п'ять чисел від 1 до 5.

const scores = [1, 2, 3, 4, 5];

// Видаляємо три елементи масиву, починаючи з першого елемента (індекс 0)
const deletedScores = scores.splice(0, 3);

// Тепер масив scores містить два елементи
console.log(scores); // [4, 5]

// А масив deletedScores містить три видалені елементи
console.log(deletedScores); // [1, 2, 3]




//ДОДАВАННЯ //ДОДАВАННЯ //ДОДАВАННЯ //ДОДАВАННЯ //ДОДАВАННЯ //ДОДАВАННЯ //ДОДАВАННЯ //ДОДАВАННЯ 
Додавання
Для того, щоб додати один або декілька елементів в масив, необхідно передати три або більше аргументи, за такої умови, другий аргумент повинен дорівнювати нулю.

splice(position, 0, new_element_1, new_element_2, ...)

Аргумент position вказує початкову позицію в масиві, куди будуть вставлені нові елементи.
Другий аргумент - це нуль, він говорить методу не видаляти елементи в місці додавання нових.
Третій, четвертий і всі наступні аргументи - це нові елементи, які додаються в масив.
Наприклад, у нас є масив з назвами кольорів у вигляді рядків. Додамо новий колір перед елементом з індексом 2.

const colors = ["red", "green", "blue"];

colors.splice(2, 0, "purple");
console.log(colors); // ["red", "green", "purple", "blue"]




//ЗАМІНА//ЗАМІНА//ЗАМІНА//ЗАМІНА//ЗАМІНА//ЗАМІНА//ЗАМІНА//ЗАМІНА//ЗАМІНА//ЗАМІНА//ЗАМІНА//ЗАМІНА//ЗАМІНА//ЗАМІНА
Заміна
Заміна - це операція додавання, в якій видаляються елементи в місці додавання нових. Для цього необхідно передати мінімум три аргументи. Кількість елементів, що видаляються і додаються, може не збігатися.

splice(position, num, new_element_1, new_element_2, ...)

position - вказує на позицію (індекс) першого елемента для видалення
num - визначає кількість елементів, що видаляються
Третій, четвертий і всі наступні аргументи - це нові елементи, які додаються в масив.
Наприклад, у нас є масив мов програмування з чотирьох елементів.

const languages = ["C", "C++", "Java", "JavaScript"];

// Заміняємо елемент з індексом 1 на новий
languages.splice(1, 1, "Python");
console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// Заміняємо один елемент (з індексом 2) на декілька
languages.splice(2, 1, "C#", "Swift", "Go");
console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

//ФУНКЦІЇ ПСЕВДОМАССИВ ARGUMENTS //ФУНКЦІЇ ПСЕВДОМАССИВ ARGUMENTS //ФУНКЦІЇ ПСЕВДОМАССИВ ARGUMENTS //ФУНКЦІЇ ПСЕВДОМАССИВ ARGUMENTS //ФУНКЦІЇ ПСЕВДОМАССИВ ARGUMENTS //ФУНКЦІЇ ПСЕВДОМАССИВ ARGUMENTS 
//ФУНКЦІЇ ПСЕВДОМАССИВ ARGUMENTS //ФУНКЦІЇ ПСЕВДОМАССИВ ARGUMENTS //ФУНКЦІЇ ПСЕВДОМАССИВ ARGUMENTS //ФУНКЦІЇ ПСЕВДОМАССИВ ARGUMENTS //ФУНКЦІЇ ПСЕВДОМАССИВ ARGUMENTS //ФУНКЦІЇ ПСЕВДОМАССИВ ARGUMENTS 
//ФУНКЦІЇ ПСЕВДОМАССИВ ARGUMENTS //ФУНКЦІЇ ПСЕВДОМАССИВ ARGUMENTS //ФУНКЦІЇ ПСЕВДОМАССИВ ARGUMENTS //ФУНКЦІЇ ПСЕВДОМАССИВ ARGUMENTS //ФУНКЦІЇ ПСЕВДОМАССИВ ARGUMENTS //ФУНКЦІЇ ПСЕВДОМАССИВ ARGUMENTS 
Псевдомасив arguments
Доступ до списку всіх аргументів можна отримати за допомогою спеціальної змінної arguments, яка доступна тільки всередині функції і зберігає всі аргументи у якості псевдомасиву.

Псевдомасив - колекція з властивістю length і можливістю звернутися до елементу за індексом, але відсутністю більшості методів для роботи з масивом.

Розглянемо приклад використання arguments у функції, яка множить будь-яку кількість аргументів:

function multiply() {
  let total = 1;

  for (const argument of arguments) {
    total *= argument;
  }

  return total;
}
console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  24
console.log(multiply(1, 2, 3, 4, 5)); //  120


//ПЕРЕТВОРЕННЯ ПСЕВДОМАССИВУ //ПЕРЕТВОРЕННЯ ПСЕВДОМАССИВУ //ПЕРЕТВОРЕННЯ ПСЕВДОМАССИВУ //ПЕРЕТВОРЕННЯ ПСЕВДОМАССИВУ //ПЕРЕТВОРЕННЯ ПСЕВДОМАССИВУ 
//ПЕРЕТВОРЕННЯ ПСЕВДОМАССИВУ //ПЕРЕТВОРЕННЯ ПСЕВДОМАССИВУ //ПЕРЕТВОРЕННЯ ПСЕВДОМАССИВУ //ПЕРЕТВОРЕННЯ ПСЕВДОМАССИВУ //ПЕРЕТВОРЕННЯ ПСЕВДОМАССИВУ 
//ПЕРЕТВОРЕННЯ ПСЕВДОМАССИВУ //ПЕРЕТВОРЕННЯ ПСЕВДОМАССИВУ //ПЕРЕТВОРЕННЯ ПСЕВДОМАССИВУ //ПЕРЕТВОРЕННЯ ПСЕВДОМАССИВУ //ПЕРЕТВОРЕННЯ ПСЕВДОМАССИВУ 
Перетворення псевдомасиву
Зазвичай псевдомасив необхідно перетворити у повноцінний масив, оскільки у псевдомасиву відсутні методи масиву, наприклад slice() або includes(). На практиці застосовують декілька основних способів.

Використовуючи метод Array.from(), який створить масив із псевдомасиву.

function fn() {
  // Змінна args буде містити повноцінний масив
  const args = Array.from(arguments);
}

Використовуючи операцію ... (rest), вона дозволяє зібрати будь-яку кількість елементів, у нашому випадку аргументів, в масив, і зберегти його в змінну. Збираємо всі аргументи, використовуючи операцію rest безпосередньо в підписі функції.

function fn(...args) {
  // Змінна args буде містити повноцінний масив
}


//ФУНКЦІОНАЛЬНИЙ ВИРАЗ ДАЄ ЗМОГУ ОБЯВЛЯТИ ФУНКЦІЮ ДО ЇЇ НАПИСАННЯ //ФУНКЦІОНАЛЬНИЙ ВИРАЗ ДАЄ ЗМОГУ ОБЯВЛЯТИ ФУНКЦІЮ ДО ЇЇ НАПИСАННЯ //ФУНКЦІОНАЛЬНИЙ ВИРАЗ ДАЄ ЗМОГУ ОБЯВЛЯТИ ФУНКЦІЮ ДО ЇЇ НАПИСАННЯ 
//ФУНКЦІОНАЛЬНИЙ ВИРАЗ ДАЄ ЗМОГУ ОБЯВЛЯТИ ФУНКЦІЮ ДО ЇЇ НАПИСАННЯ //ФУНКЦІОНАЛЬНИЙ ВИРАЗ ДАЄ ЗМОГУ ОБЯВЛЯТИ ФУНКЦІЮ ДО ЇЇ НАПИСАННЯ //ФУНКЦІОНАЛЬНИЙ ВИРАЗ ДАЄ ЗМОГУ ОБЯВЛЯТИ ФУНКЦІЮ ДО ЇЇ НАПИСАННЯ 
//ФУНКЦІОНАЛЬНИЙ ВИРАЗ ДАЄ ЗМОГУ ОБЯВЛЯТИ ФУНКЦІЮ ДО ЇЇ НАПИСАННЯ //ФУНКЦІОНАЛЬНИЙ ВИРАЗ ДАЄ ЗМОГУ ОБЯВЛЯТИ ФУНКЦІЮ ДО ЇЇ НАПИСАННЯ //ФУНКЦІОНАЛЬНИЙ ВИРАЗ ДАЄ ЗМОГУ ОБЯВЛЯТИ ФУНКЦІЮ ДО ЇЇ НАПИСАННЯ 

// Функціональний вираз (function expression)
const multiply = function (x, y, z) {
  console.log(`Результат множення дорівнює ${x * y * z}`);
};  



                                          МОДУЛЬ 3 МОДУЛЬ 3 МОДУЛЬ 3
                                          МОДУЛЬ 3 МОДУЛЬ 3 МОДУЛЬ 3
                                          МОДУЛЬ 3 МОДУЛЬ 3 МОДУЛЬ 3

  //ПЕРЕБИРАЄМО ОБЄКТИ ЗА ДОПОМОГОЮ ФОР ІН  //ПЕРЕБИРАЄМО ОБЄКТИ ЗА ДОПОМОГОЮ ФОР ІН  //ПЕРЕБИРАЄМО ОБЄКТИ ЗА ДОПОМОГОЮ ФОР ІН 
  Цикл for...in
Для перебирання об'єктів використовується спеціальний цикл for...in, який перебирає ключі об'єкта object.

for (key in object) {
  // інструкції
}









// ВЛАСНІ ТА НЕ ВЛАСНІ ВЛАСТИВОСТІ // ВЛАСНІ ТА НЕ ВЛАСНІ ВЛАСТИВОСТІ // ВЛАСНІ ТА НЕ ВЛАСНІ ВЛАСТИВОСТІ // ВЛАСНІ ТА НЕ ВЛАСНІ ВЛАСТИВОСТІ // ВЛАСНІ ТА НЕ ВЛАСНІ ВЛАСТИВОСТІ 
// ВЛАСНІ ТА НЕ ВЛАСНІ ВЛАСТИВОСТІ // ВЛАСНІ ТА НЕ ВЛАСНІ ВЛАСТИВОСТІ // ВЛАСНІ ТА НЕ ВЛАСНІ ВЛАСТИВОСТІ // ВЛАСНІ ТА НЕ ВЛАСНІ ВЛАСТИВОСТІ 
// ВЛАСНІ ТА НЕ ВЛАСНІ ВЛАСТИВОСТІ // ВЛАСНІ ТА НЕ ВЛАСНІ ВЛАСТИВОСТІ // ВЛАСНІ ТА НЕ ВЛАСНІ ВЛАСТИВОСТІ // ВЛАСНІ ТА НЕ ВЛАСНІ ВЛАСТИВОСТІ 
// ВЛАСНІ ТА НЕ ВЛАСНІ ВЛАСТИВОСТІ // ВЛАСНІ ТА НЕ ВЛАСНІ ВЛАСТИВОСТІ // ВЛАСНІ ТА НЕ ВЛАСНІ ВЛАСТИВОСТІ // ВЛАСНІ ТА НЕ ВЛАСНІ ВЛАСТИВОСТІ 
Метод hasOwnProperty()
Розберемо концепцію власних і невласних властивостей об'єкта і навчимося правильно використовувати цикл for...in.

const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Манго";

console.log(dog); // {name: 'Манго'}
console.log(dog.name); // 'Манго'
console.log(dog.legs); // 4

Метод Object.create(animal) створює і повертає новий об'єкт, зв'язуючи його з об'єктом animal. Тому можна отримати значення властивості legs, звернувшись до нього як dog.legs, хоча він відсутній в об'єкті dog - це невласна властивість з об'єкта animal.

Оператор in, який використовується в циклі for...in, не робить різниці між власними та невласними властивостями об'єкта. Ця особливість заважає, оскільки ми завжди хочемо перебрати тільки власні властивості. Для того, щоб дізнатись, чи містить об'єкт власну властивість, використовується метод hasOwnProperty(key), який повертає true або false.

// ❌ Повертає true для всіх властивостей
console.log("name" in dog); // true
console.log("legs" in dog); // true

// ✅ Повертає true тільки для власних властивостей
console.log(dog.hasOwnProperty("name")); // true
console.log(dog.hasOwnProperty("legs")); // false

//ЗАВЖДИ ПЕРЕВІРЯЄМО ЧИ Є ЦЕ ВЛАСНІ ВЛАСТИВОСТІ//ЗАВЖДИ ПЕРЕВІРЯЄМО ЧИ Є ЦЕ ВЛАСНІ ВЛАСТИВОСТІ
//ЗАВЖДИ ПЕРЕВІРЯЄМО ЧИ Є ЦЕ ВЛАСНІ ВЛАСТИВОСТІ//ЗАВЖДИ ПЕРЕВІРЯЄМО ЧИ Є ЦЕ ВЛАСНІ ВЛАСТИВОСТІ
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  // Якщо це власна властивість - виконуємо тіло if
  if (book.hasOwnProperty(key)) {
    console.log(key);
    console.log(book[key]);
  }

  // Якщо це невласна властивість - нічого не робимо
}


//МЕТОД OBJECT KEYS//МЕТОД OBJECT KEYS//МЕТОД OBJECT KEYS//МЕТОД OBJECT KEYS//МЕТОД OBJECT KEYS//МЕТОД OBJECT KEYS
//МЕТОД OBJECT KEYS//МЕТОД OBJECT KEYS//МЕТОД OBJECT KEYS//МЕТОД OBJECT KEYS//МЕТОД OBJECT KEYS//МЕТОД OBJECT KEYS
//МЕТОД OBJECT KEYS//МЕТОД OBJECT KEYS//МЕТОД OBJECT KEYS//МЕТОД OBJECT KEYS//МЕТОД OBJECT KEYS//МЕТОД OBJECT KEYS
Метод Object.keys()
Вбудований клас Object має декілька корисних методів для роботи з об'єктами. Перший з них - це Object.keys(obj), який приймає об'єкт і повертає масив ключів його власних властивостей. Якщо об'єкт не має властивостей, метод поверне порожній масив.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'genres', 'rating']





//МЕТОД OBJECT VALUES//МЕТОД OBJECT VALUES//МЕТОД OBJECT VALUES//МЕТОД OBJECT VALUES//МЕТОД OBJECT VALUES//МЕТОД OBJECT VALUES//МЕТОД OBJECT VALUES
//МЕТОД OBJECT VALUES//МЕТОД OBJECT VALUES//МЕТОД OBJECT VALUES//МЕТОД OBJECT VALUES//МЕТОД OBJECT VALUES//МЕТОД OBJECT VALUES
//МЕТОД OBJECT VALUES//МЕТОД OBJECT VALUES//МЕТОД OBJECT VALUES//МЕТОД OBJECT VALUES//МЕТОД OBJECT VALUES//МЕТОД OBJECT VALUES//МЕТОД OBJECT VALUES
Метод Object.values()
Якщо метод Object.keys(obj) повертає масив ключів власних властивостей об'єкта, то метод Object.values(obj) повертає масив значень його власних властивостей. Якщо в об'єкті відсутні властивості, метод Object.values(obj) поверне порожній масив.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'rating']

const values = Object.values(book);
console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

Масив значень властивостей також можна перебрати циклом for...of, наприклад, для отримання загальної суми числових значень.

Припустимо, що нам потрібно порахувати загальну кількість продуктів в об'єкті формату ім'я-продукту: кількість. У такому випадку, буде доречним метод Object.values() для того, щоб отримати масив усіх значень, а потім зручно додати їх.