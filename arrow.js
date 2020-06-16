// // Arrow Functions

// //ES5

// let welcomeES5 = function(){
//     console.log('hello from ES%');
// }

// welcomeES5();

// //ES6

// let welcomeES6 = () => {
//     console.log('hello from ES6')
// };

// // withParameters

// //ES5

// let multiplyES5 = function(x,y){
//     return x*y;
// }

// console.log(multiplyES5(10,5));

// // ES6

// // let multiplyES6 = (x,y) => {return x*y};
// let multiplyES6 = (x,y) => x*y;

// console.log(multiplyES6(10,5));

// // ES5
// let splitES5 = function(text){
//     return text.split(' ');
// }

// console.log(splitES5('Modern Javascript Kursu'));

// // ES6

// let splitES6 = text => text.split(' ');


// console.log(splitES6('Modern Javascript Kursu'));

// // Objeckt Literals

// //ES5
// let getpruductES5 = function(id,name){
//     return {
//         id : id,
//         name : name
//     }
// }

// console.log(getpruductES5('1','samsung S8'));

// //ES6

// let getpruductES6 = (id,name) => (
//     {
//         id : id,
//         name : name
//     }
// );

// console.log(getpruductES6('1','ıPHONE 7'));

// const phones = [
//     {name : 'IPhone 8', price : 3000},
//     {name : 'IPhone 7', price : 2000},
//     {name : 'IPhone 6', price : 1000},
//     {name : 'IPhone 5', price : 2500},
// ];

// //ES5

// let pricesES5 = phones.map(function(phone){
//     return phone.price;
// });

// console.log(pricesES5);

// //ES6

// let pricesES6 = phones.map(phone => phone.price);

// console.log(pricesES6);

// //ES5 filter

// const arr = [1,2,3,4,6,12,44,77,87];

// let evenES5 = arr.filter(function(a){
//     return a%2==0;
// })

// console.log(evenES5);
// //ES6

// let evenES6 = arr.filter(a=>a%2==0);
// console.log(evenES6);

// this keyword

// let list = {
//     category : 'phone',
//     names : ['IPhone8','samsung S8','Iphone7'],
//     call : function(){
        
//     }
// } 

// // this key Word

// // ES5

// let list = {
//     category : 'phone',
//     names : ['Iphone','Samsun S8','Iphone 7'],
//     call : function(){
//         var self = this;
//         this.names.map(function(name){
//             console.log(`${self.category} ${name}
//             `);
//         })
//     }
// }

// list.call();

// // ES6

// let list = {
//     category : 'phone',
//     names : ['Iphone','Samsun S8','Iphone 7'],
//     call : function(){
//       this.names.map((name)=>{
//             console.log(`${self.category} ${name}`);
//         })
//     }
// }

// list.call();

//ES5

// function Game(){
//     this.live = 0;
//     this.addlive = function(){
//         this.OneUp = setInterval(function(){
//             console.log(++self.live)
//         },1000)
//     }

// }

// let player = new Game();
// player.addlive();

// //ES6

// function Game(){
//     this.live = 0;
//     this.addlive = function(){
//         this.OneUp = setInterval(()=>{
//             console.log(++this.live)
//         },1000)
//     }

// }

// let player = new Game();
// player.addlive();

// Spread Operator

// ES5

function getTotal(a,b,c){
    return a+b+c;
}

console.log(getTotal(10,20,30));

let numbers: number[]

let numbers = [10,20,30];
// ES5

console.log(getTotal.apply(null,numbers));

//ES6

console.log(getTotal(...numbers));

let arr1 = ['two','three'];
let arr2 = ['one','four','five'];

let arr3 = ['one',...arr1,'four','five'];

arr1.push(...aar2);
arr1.unshift(...arr2);

