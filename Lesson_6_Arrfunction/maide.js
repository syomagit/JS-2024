// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'


// let suits = ['spade', 'diamond', 'heart', 'club'];
// let values = ['6', '7', '8', '9', '10', 'jack', 'qeen', 'king', 'ace'];
// let cards = [];
//
// for (const suit of suits) {
//     for (const value  of values) {
//         const card ={cardSuit: suit,value: value,};
//         if ( suit === 'heart' || suit === 'diamond') {
//             card.color = 'red';
//         }else {
//             card.color = 'black';}
//
//
//         cards.push(card);
//
//
//     }
//
//
//
// }
//   let obj = cards.reduce((accumulator, suitValue)=>{
//       switch (suitValue.cardSuit) {
//             case 'spade':
//                 accumulator.spades.push(suitValue);
//                 break;
//             case 'diamond':
//                 accumulator.diamonds.push(suitValue);
//                 break;
//             case 'heart':
//                 accumulator.hearts.push(suitValue);
//                 break;
//             case 'club':
//                 accumulator.clubs.push(suitValue);
//                 break;
//       }
//
//
//
//
//
//
//
//
//     return accumulator;
//
// }, {
//     spades: [],
//     diamonds: [],
//     hearts: [],
//     clubs: []
// })
// console.log(obj);

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }



// console.log(cards);
//
// console.log(cards.find(card => card.cardSuit === 'spade' && card.value === 'ace')) ;
// console.log(cards.filter(card => card.value === '6'));
// console.log(cards.filter(card => card.color === 'red'));
// console.log(cards.filter(card => card.cardSuit === 'club'));
// console.log(cards.filter(card => card.cardSuit === 'spade' && values.indexOf(card.value) >= 7));


// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
//  let saas=   coursesArray.find(course => course.modules.includes('sass'));
//     console.log(saas);
//
// let docker=   coursesArray.filter(course => course.modules.includes('docker'));
// console.log(docker);



