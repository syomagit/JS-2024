//- створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let div = document.createElement('div');
// div.classList.add('wrap'); // таким чином додаються класси
// div.classList.add('collapse');
// div.classList.add('alpha');
// div.classList.add('beta');
// document.body.append(div); //додали в body усі елементи
//  const clone =div.cloneNode(true) //щоб клонувалось усе що є в середині елементів треба обовʼязково в дужках писати true
// document.body.append(div,clone); // основний блок та клон




//['Main','Products','About us','Contacts']
//Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

// let arr = ['Main','Products','About us','Contacts'];
// const info = document.createElement('ul');
// info.classList.add('info');
// for (const infoEl of arr) {
//  const LI = document.createElement('li');
//  LI.innerText = infoEl;
//  info.appendChild(LI);
//
// }
// document.body.appendChild(info);
// console.log(document)


//Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const user of coursesAndDurationArray) {
//
//  let paragraph =   document.createElement('p')
// paragraph.innerText = `${user.title} ${user.monthDuration}`
//     document.body.appendChild(paragraph)
// }

//другий спосіб через +

// let div = document.createElement('div');
// div.innerText = courses.title + ' ' + courses.monthDuration;
// document.body.appendChild(div);


//Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration



// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//  const myNewElement = document.getElementById('compas')
//  coursesAndDurationArray.forEach(course =>{
//   const CourseBox = document.createElement('p')
//   CourseBox.innerHTML = `${course.title} ${course.monthDuration}`;
//
//   myNewElement.appendChild(CourseBox);
//
//
//  })




// створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

 //
 // let divCreator = document.createElement('div');
 //   divCreator.classList.add('wrap', 'collapse', 'alpha', 'beta');
 //   divCreator.style.backgroundColor = 'red';
 //   divCreator.innerText = 'Hello World';
 //   document.body.appendChild(divCreator);
 //    const clone = divCreator.cloneNode(true);
 //    document.body.appendChild(clone);


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

//
// let arr = ['Main','Products','About us','Contacts'];
// const ulList = document.createElement('ul');
// ulList.classList.add('list');
// for (const listEl of arr) {
//     const LI = document.createElement('li');
//     LI.innerText = listEl;
//     ulList.appendChild(LI);
// }
// document.body.appendChild(ulList);




// Є масив
// let coursesAndDurationArray = [
//  {title: 'JavaScript Complex', monthDuration: 5},
//  {title: 'Java Complex', monthDuration: 6},
//  {title: 'Python Complex', monthDuration: 6},
//  {title: 'QA Complex', monthDuration: 4},
//  {title: 'FullStack', monthDuration: 7},
//  {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.




// let coursesAndDurationArray = [
//  {title: 'JavaScript Complex', monthDuration: 5},
//  {title: 'Java Complex', monthDuration: 6},
//  {title: 'Python Complex', monthDuration: 6},
//  {title: 'QA Complex', monthDuration: 4},
//  {title: 'FullStack', monthDuration: 7},
//  {title: 'Frontend', monthDuration: 4}
// ];
// for (const course of coursesAndDurationArray) {
//  let createBlock = document.createElement('div');
//  let h2 = document.createElement('h2');
//  h2.innerText = `${course.title} ${course.monthDuration}`;
//     createBlock.appendChild(h2);
//     document.body.appendChild(createBlock);
//
// }




// let coursesAndDurationArray = [
//  {title: 'JavaScript Complex', monthDuration: 5},
//  {title: 'Java Complex', monthDuration: 6},
//  {title: 'Python Complex', monthDuration: 6},
//  {title: 'QA Complex', monthDuration: 4},
//  {title: 'FullStack', monthDuration: 7},
//  {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.


// let coursesAndDurationArray = [
//  {title: 'JavaScript Complex', monthDuration: 5},
//  {title: 'Java Complex', monthDuration: 6},
//  {title: 'Python Complex', monthDuration: 6},
//  {title: 'QA Complex', monthDuration: 4},
//  {title: 'FullStack', monthDuration: 7},
//  {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const course of coursesAndDurationArray) {
//  let createDiv = document.createElement('div');
//  createDiv.classList.add('item');
//  let h1 = document.createElement('h1');
//  h1.classList.add('heading');
//  h1.innerText = course.title;
//  let p = document.createElement('p');
//     p.classList.add('description');
//     p.innerText = course.monthDuration;
//     createDiv.append(h1,p);
//     document.body.appendChild(createDiv);
//
// }