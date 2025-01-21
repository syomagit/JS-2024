
// // examples with if
//
// const myCheckbox = document.getElementById("myCheckbox");
// const visaBtn = document.getElementById('visaBtn');
// const masterCardBtn = document.getElementById('masterCardBtn');
// const payPalBtn = document.getElementById('payPalBtn');
// const mySubmit = document.getElementById('mySubmit');
// const subResult = document.getElementById('subResult');
// const paymentResult = document.getElementById('paymentResult');
//
// mySubmit.onclick = function () {
//
//     if (myCheckbox.checked) {
//         subResult.innerText = `you are subscribed`;
//     } else {
//         subResult.innerText = `you are not subscribed`;
//     }
//     if(visaBtn.checked){
//         paymentResult.innerText = `you are paying with visa`;
//     }
//     else if(masterCardBtn.checked){
//         paymentResult.innerText = `you are paying with MasterCard`;
//     }
//     else if(payPalBtn.checked){
//         paymentResult.innerText = `you are paying with PayPal`;
//     }
//     else{
//         paymentResult.innerText = `you must be select payments`;
//     }
// }

// тернарний оператор ?
// let age = 17;
// let message = age >= 18 ? "You are an adult" : "you are a minor";
// console.log(message);

// те саме тільки через if перевірку
// let age = 21;
// let message;
//
// if(age >= 18){
//     message = 'Accept'
// }else{
//     message = 'decline'
// }
// console.log(message);

// let time = 11;
// let greeting = time < 12 ? 'Good morning' : 'Good afternoon';
// console.log(greeting);

// let isStudent = false;
// let message = isStudent ? "You are student" : "You are not a student";
// console.log(message);

 //switch коли багато перевірок треба зробити

// let day = 0;
//
// switch (day){
//     case 1:
//         console.log('it is monday');
//         break;
//     case 2:
//         console.log('it is tuesday');
//         break;
//     case 3:
//         console.log('it is wednesday');
//         break;
//     case 4:
//         console.log('it is thursday');
//         break;
//     case 5:
//         console.log('it is friday');
//         break;
//     case 6:
//         console.log('it is saturday');
//         break;
//     case 7:
//         console.log('it is sunday');
//         break;
//     default:
//         console.log(`${day} is not a day`)
// }

// let testScore = 20;
// let letterGrade; //так заміняємо console log
// switch (true){
//     case testScore >= 90:
//         letterGrade = 'A';
//         break;
//     case testScore >= 80:
//         letterGrade = 'B';
//         break;
//     case testScore >= 70:
//         letterGrade = 'C';
//         break;
//     case testScore >= 60:
//         letterGrade = 'D';
//         break;
//     default:
//         letterGrade = "F";
//
// }
// console.log(letterGrade)

// string methods

// let username = 'SamSimon';

// console.log(username.charAt(2));
// console.log(username.indexOf('i'));
// console.log(username.trim());
// console.log(username.toUpperCase());
// console.log(username.toLowerCase());
// console.log(username.repeat(3));

// let phonenumber = "093-888-22-33"
// phonenumber = phonenumber.replaceAll('-', '/');
// console.log(phonenumber);


// string.slice(start, end)

// const fullName = 'Semen Semenich';
// let firstName = fullName.slice(0,3);
// let lastName = fullName.slice(2,1)
// console.log(firstName)
// console.log(lastName)


//logical operators and&& or|| not!

// const temp = 30;
//
// if(temp > 0 && temp <= 30){
//     console.log('the weather is not bad')
// }else{
//     console.log('the weather is bad');
//
// }


// const temp = -1;
//
// if(temp <= 0 || temp > 30){
//     console.log('the weather is  bad')
// }else{
//     console.log('the weather is good');
//
// }

// const isSunny = true;
//
// if(!isSunny){
//     console.log('it is Sunny');
//
// }else{
//     console.log('it is cloudy');
// }



//function

// function happyBirth(username,age){
//     console.log('Happy birthday to you')
//     console.log('Happy birthday to you')
//     console.log(`Happy birthday dear you ${username}`)
//     console.log(`You are ${age} years old`)
// }
//
// happyBirth('Semen',34);
// happyBirth('Gosha',345);


//тут декілька прикладів з виводом та return
// function add(x,y){
//     // let result = x + y;
//     // return result;
//     return x+y;
// }
// // let addResult = add(2,3);
// // console.log(addResult);
//
// console.log(add(2,3));

// function add(x,y){
//     return x+y;
// }
// function someAnother(x,y){
//     return x-y;
// }
// function multy(x,y){
//     return x*y;
// }
// console.log(multy(2,3));

// function isVAlidEmail(email) {
//     return email.includes('@') ? true : false;
// }
// console.log(isVAlidEmail('myemail.com'));



//локальне та глобальне видимість змінної



// function function1(){
//     let x = 1;
//     console.log(x);
// }
//
// function function2(){
//     let x = 2;
//     console.log(x);
// }
// function2();




// function function1(){
//     console.log(x);
// }
//
// function function2(){
//     console.log(x)
// }
// let x =3;
// function2();



// для Temperature conversation

// const textBox = document.getElementById('textbox');
// const toFahrenheit = document.getElementById('toFahrenheit');
// const toCelsius = document.getElementById('toCelsius');
// const result = document.getElementById('result');
// let temp;
//
// function convert(){
//  if(toFahrenheit.checked){
// temp = Number (textBox.value);
// temp = temp *9/5 +32;
// result.textContent = temp + '°F'
//
//  }else if(toCelsius.checked){
//
//
//  }else{
//      result.textContent = 'Select a unit';
//  }
// }


//array

// let fruit = ['apple', 'orange', 'banana'];

// fruit[1] ='marmelad'; //change value apple to marmelad or another[]

// with push

// fruit.push('perch'); // add some value
// fruit.pop(); // delete last value
// fruit.unshift('mango');// add some at the begin
// fruit.shift(); // delete some at the begining

// console.log(fruit[2]);
// console.log(fruit[1]);
// console.log(fruit);

// let numOfFruits = fruit.length; // show size array fruit
// console.log(numOfFruits);

// let index = fruit.indexOf('apple'); //show number of value
// console.log(index);

// for (let i = 0; i < fruit.length; i++) {
//     console.log(fruit[i]);
//
// }
//
// fruit.sort().reverse();
//
//
// for (const item of fruit) {
//     console.log(item);
//
// }

// spread operators

// let numbers = [1,2,3,4,5];
// let maximum = Math.max(...numbers);
// console.log(maximum);
// let minimim = Math.min(...numbers);
// console.log(minimim);

// let numbers1 = [...numbers];
// console.log(numbers1)

// let username = 'Simon Say';
// let letters = [...username].join('')
// console.log(letters);


// let fruits = ['apple','orange','banana'];
// let vegetables = ['carrot','celery','cucumber'];
//
// let foods = [...fruits,...vegetables, 'eggs','milk']; // that we use for combine arrays, eggs milk we can add for instance
//
// console.log(foods);

//rest operators

// function openFridge(...foods){
//     console.log(...foods);
// }
// function  getFood(...foods){
//     return foods;
//
// }
//
// const food1 = 'pizza';
// const food2 = 'burger';
// const food3 = 'sushi';
// const food4 = 'dog';
// const food5 = 'ramen';
//
//  // openFridge(food1,food2,food3,food4,food5);
//
// const foods = getFood(food1,food2,food3,food4,food5);
//
// console.log(foods)



// function sum(...numbers){
//     let result = 0;
//     for (const number of numbers) {
//         result += number;
//
//     }
//     return result;
// }
//
// const total = sum(1,2,3,4,5);
//
// console.log(`your total is ${total}`)



// function combineStrings(...strings){
//   return strings.join(" ");
// }
//
// const fullSentence = combineStrings("I",'know','myself','well');
// console.log(fullSentence);

//
// let vi = document.getElementById('vi');
// vi.oninput = function (){
//     console.log(this.value);
// }


// send from input

//  let f1 = document.forms.f1;
// f1.onsubmit = function () {
//     console.log('hi');
//
//     let user = {name:this.username.value}
//     console.log(user);
//
// };


// function generatePassword(length,includeLowercase,includeUppercase,includeNumbers,includeSymbols){
//
//     const LowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
//     const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const numberChars = '0123456789';
//     const symbolCharts = '!@#$%^&*()_-+=';
//
//     let allowedCharts = '';
//     let password = '';
//
//     allowedCharts += includeLowercase ? LowercaseChars : '';
//     allowedCharts += includeUppercase ? uppercaseChars : '';
//     allowedCharts += includeNumbers ? numberChars : '';
//     allowedCharts += includeSymbols ? symbolCharts : '';

//    if(length <= 0){
//        return `(password length must be at least 1)`;
//    }
//    if(allowedCharts.length === 0){
//        return `(At least 1 set of character needs to be selected)`;
//
//    }
//
//
//
//
//     return '';
// }
//
// const passwordLength = 2;
// const includeLowercase = false;
// const includeUppercase = false;
// const includeNumbers = false;
// const includeSymbols =false;
//
//  const password = generatePassword(passwordLength,includeLowercase,includeUppercase,includeNumbers,includeSymbols);
//  console.log(`Generated password: ${password}`);



//callback

// hello(wait);
//
// function hello(callback){
//     console.log('hello');
//     callback();
// }
// function leave(){
//     console.log('leave')
// }
//
// function wait(){
//     console.log('wait')
// }
//
// function goodbye(){
//     console.log('bye');
// }

// sum(displayPage,2,2)
//
// function sum(callback,x,y){
//   let result = x + y;
//   callback(result);
// }
//
// function displayConsole(result){
//     console.log(result);
// }
//
// function displayPage(result){
//     document.getElementById('myH1').innerText=result;
// }

// let numbers = [1,2,3,4,5];
//
//
// numbers.forEach(double);
// numbers.forEach(display);
//
// function double(element,index,array){
//     array[index]= element * 2;
// }
//
//
// function display(element){
//     console.log(element);
// }

// let fruits = ['orange','banana','coconut','apple'];
// fruits.forEach(product =>console.log(product))



// for (const cart of carts) {
    //     const div = document.createElement('div');
    //      div.classList.add('cart-box');
    //      const h2WithInfo = document.createElement('h2');
    //      h2WithInfo.innerText =`'total':${cart.total} 'discountedTotal' ${cart.discountedTotal}
    //      'userID':${cart.userId} 'totalProducts'








// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) =>response.json())
//     .then((users) =>{
//         for (const user of users) {
//             const userCarts = document.getElementById('carts')
//           let userDiv =  document.createElement('div')
//            let divInfo = document.createElement('h2')
//             divInfo.innerText = `${user.name} ${user.id} ${user.email}`;
//
//
//
//          userCarts.append(userDiv);
//          userDiv.append(divInfo);

// fetch('https://dummyjson.com/products')
//     .then (value => value.json())
//     .then(response =>{
//        console.log(response);
//        let {products} = response;
//         document.write(`<div>`);
//         for (const product of products) {
//             document.write(`<div>`);
//             document.write(`<p>${product.brand} - ${product.price}</p>`)
//             document.write(`<img src="${product.thumbnail}" alt=""> `)
//
//
//                 document.write(`</div>`);
//
//     }
//
//               document.write(`</div>`)
//
//     });


//Дестуктурізація

// let user = {
//     name:'Olya',
//     age:33,
//     foo(){
//         console.log('foo');
//     }
// };
//
// let {foo} = user;
// console.log('foo');

// let name = 'vasya';
// let age = 33;
// let user = {
//     name,
//     age,
//     foo(){
//         console.log(this)
//     },
//     wife:{
//         name: 'anna'
//     }
// }
// console.log(user);
// user.foo();
//
// let {name:username, age:userAge,wife:{name:wifeName}} = user;
// console.log(username,userAge,wifeName);


// let numbers = [12,323,54,65];
// let[a,b] = numbers;
// console.log(a,b)

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
// let[user1,user2]= users;
// let {name} = user1
// console.log(user1,user2);

const bodyEl = document.querySelector('body');

bodyEl.addEventListener('mousemove',(event)=>{
    const xpos = event.offsetX;
    const ypos = event.offsetY;
    const spanE1 = document.createElement('span');
    spanE1.style.left = xpos + 'px';
    spanE1.style.top = ypos + 'px';
    const size = Math.random()*100;
    spanE1.style.width = size + 'px';
    spanE1.style.height = size + 'px';

    bodyEl.appendChild(spanE1);
    setTimeout(()=>{
        spanE1.remove();
    },3000)

});






