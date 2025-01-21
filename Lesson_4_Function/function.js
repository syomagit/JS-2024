// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

// function createList (arrPrimitives) {
//
//     for (const item of arrPrimitives) {
//
//         document.write(`<ul><li>${item}</li></ul>`);
//
//     }
// }
//
// createList([1, 'Hello', true, 5, 'World', false]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
//  function createBlock (arrObj) {
//
//          for (const obj of arrObj) {
//
//              document.write(`<div>id: ${obj.id}, name: ${obj.name}, age: ${obj.age}</div>`);
//
//          }
//  }
//
//     createBlock([{id: 1, name: 'Vasya', age: 25}, {id: 2, name: 'Petya', age: 30}, {id: 3, name: 'Kolya', age: 35}]);


// - створити функцію яка повертає найменьше число з масиву

// function minNumber(arr) {
//     let min = arr[0];
//     for (const number of arr) {
//         if (number < min) {
//             min = number;
//         }
//     }
//     return min;
// }
// console.log(minNumber([1, 5, 3, 7, 2, 4, 6]));

// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// function sum(arr) {
//     let sum = 0;
//     for (const number of arr) {
//         sum = sum + number;
//     }
//     return sum;
// }
// console.log(sum([1, 2, 10]));

// створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// function swap(arr, index1, index2) {
//     let temp = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = temp;
//     return arr;
// }
// console.log(swap([11, 22, 33, 44], 0, 1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

// function exchange(sumUAH, currencyValues, exchangeCurrency) {
//     for (const currency of currencyValues) {
//         if (currency.currency === exchangeCurrency) {
//             return sumUAH / currency.value;
//         }
//     }
// }
// console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));


// let cube =(a,b)=> a*b;
// console.log(cube(2,3));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let circle = (r,PI) => r * Math.PI;
// console.log(circle(5, Math.PI));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

 // let cylinder = (r, h, PI) => 2 * Math.PI * r * (r + h);
 //    console.log(cylinder(5, 10, Math.PI));

// - створити функцію яка приймає масив та виводить кожен його елемент




// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
//
// let some = (users) => {
//     for (const user of users) {
//         console.log(user);
//     }
// }
//
// some(users);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let createParagraph = (text) => {
//     document.write(`<p>${text}</p>`);
// }
// createParagraph('Hello World');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let createList = (text) => {
//     document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
// }
//
// createList('Hello World');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let createList = (text, number) => {
//     document.write('<ul>');
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write('</ul>');
// }
//
// createList('Hello World', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let createList = (arr) => {
//     document.write('<ul>');
//     for (const item of arr) {
//         document.write(`<li>${item}</li>`);
//     }
//     document.write('</ul>');
// }
//
// createList([1, 'Hello', true, 5, 'World', false]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

 // let createBlock = (arrObj) => {
 //        for (const obj of arrObj) {
 //            document.write(`<div>id: ${obj.id}, name: ${obj.name}, age: ${obj.age}</div>`);
 //        }
 // }
 //
 //    createBlock([
 //        {id: 1, name: 'Vasya', age: 25},
 //        {id: 2, name: 'Petya', age: 30},
 //        {id: 3, name: 'Kolya', age: 35}
 //    ]);

// - створити функцію яка повертає найменьше число з масиву

 // let minNumber = (arr) => {
 //        let min = arr[0];
 //        for (const number of arr) {
 //            if (number < min) {
 //                min = number;
 //            }
 //        }
 //        return min;
 // }
 //    console.log(minNumber([1, 5, 3, 7, 2, 4, 6]));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// let sum = (arr) => {
//     let sum = 0;
//     for (const number of arr) {
//         sum = sum + number;
//     }
//     return sum;
// }
// console.log(sum([1, 2, 10]));

// створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

 // let swap = (arr, index1, index2) => {
 //        let temp = arr[index1];
 //        arr[index1] = arr[index2];
 //        arr[index2] = temp;
 //        return arr;
 // }
 //
 //    console.log(swap([11, 22, 33, 44], 0, 1));

// let arr = [];
// arr.push({name: 'Vasya', age: 25});
// console.log(arr);













