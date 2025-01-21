// const bodyEl = document.querySelector('body');
//
// bodyEl.addEventListener('mousemove',(event)=>{
//     const xpos = event.offsetX;
//     const ypos = event.offsetY;
//     const spanE1 = document.createElement('span');
//     spanE1.style.left = xpos + 'px';
//     spanE1.style.top = ypos + 'px';
//     const size = Math.random()*100;
//     spanE1.style.width = size + 'px';
//     spanE1.style.height = size + 'px';
//
//     bodyEl.appendChild(spanE1);
//     setTimeout(()=>{
//         spanE1.remove();
//     },3000)
//
// });

//auto text effect animation

// const containerEl = document.querySelector(".container")
//
// const careers = ['Football', 'Basketball','Tennis','Swim'];
//
// let careerIndex = 0;
//
// let characterIndex = 0;
//
// updateText();
//
// function updateText(){
//
//     containerEl.innerHTML =`
//  <h1>I am a fun of ${careers[careerIndex].slice(0,characterIndex)}</h1>`;
//     characterIndex++
//     if(characterIndex === careers[careerIndex].length){
//         careerIndex++
//         characterIndex = 0
//     }
//     setTimeout(updateText,400)
// }



//Dynamic calendar


// const monthName = document.getElementById
// ('month-name');
// const dayName = document.getElementById
// ('day-name');
// const dayNumber = document.getElementById
// ('day-number');
// const yearNumber = document.getElementById
// ('year');
//
// const date = new Date();
// const month = date.getMonth()
// monthName.innerText = date.toLocaleString('en',{
//     month:'long'
// });
//
// dayName.innerText = date.toLocaleString('en',{
//     weekday: 'long'
//
// })
//
// dayNumber.innerText = date.getDate();
//
// yearNumber.innerText = date.getFullYear();



// loading bar

// const counterElement = document.querySelector('.counter')
//
// const barE1 = document.querySelector('.loading-bar-front')
//
// let idx = 0;
// updateNum()
//
// function updateNum(){
//     counterElement.innerText = idx + "%"
//     barE1.style.width = idx + "%"
//     idx++
//     if(idx < 101){
//         setTimeout(updateNum, 50)
//     }
//
// }

// let user = {
//     name: 'Simon',
//     age: 34,
//     foo(some){
//         console.log(foo);
//     },
// }




//
// let {age} = user;
// console.log(age)
// let {name,age,foo} = user;
// console.log();
// foo();

// function asd({name}){
//     console.log(name)
//
// }

// asd({a:'simon', name:'dwedwdw'})




class Player{
    constructor(shirt,socks,boots,shorts,status) {
        this.shirt = shirt;
        this.socks = socks;
        this.boots = boots;
        this.shorts = shorts;
    }

}

let ArrayPlayers = [
    new Player('white','pair','nike','black'),
    new Player('blue','welly','adidas','orange'),
    new Player('pink','pair','nike','black'),
    new Player('gray','pair','nike','black'),
    new Player('white','pair','nike','black'),
    new Player('white','pair','nike','black'),
]

// ArrayPlayers.forEach(function (value){
//     console.log(value);
// });

// ArrayPlayers.forEach(value=> console.log(value));

// let some =ArrayPlayers.filter(function (value){
//     if(value === )
// })
// console.log(some);




