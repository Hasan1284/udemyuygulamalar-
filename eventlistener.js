// // // // // // // // event listeners
// // // // // // // const btn = document.querySelector('#btnDeleteAll');

// // // // // // // btn.addEventListener('click',function(){
// // // // // // //     console.log('btn clicked');
// // // // // // // });

// // // // // // // yada farklı bir şekilde aynı şekilde yazılabilir

// // // // // // const btn = document.querySelector('#btnDeleteAll');
// // // // // // const btn2 = document.querySelector('#btnAddNewTask');

// // // // // // btn.addEventListener('click',btnClick);
// // // // // // btn.addEventListener('click',btnClick2);
// // // // // // btn2.addEventListener('click',btnClick);

// // // // // // function btnClick(){
// // // // // //     console.log('btn clicked')
// // // // // // }
// // // // // // function btnClick2(){
// // // // // //     console.log('btn clicked')
// // // // // // }

// // // // // const btn = document.querySelector('#btnDeleteAll');
// // // // // const btn2 = document.querySelector('#btnAddNewTask');


// // // // // // btn.addEventListener('click',function(e){
// // // // // //          console.log('btn clicked');

// // // // // //          e.preventDefault
// // // // // //      });

// // // // // btn.addEventListener('click',function(e){
    
// // // // //     let val;

// // // // //     val = e;

// // // // //     val = e.target;
// // // // //     val = e.type;
// // // // //     val = e.target.id;
// // // // //     val = e.target.classList;
    
// // // // //     console.log(val);

// // // // //     e.preventDefault
// // // // //      });

// // // // //mause events
// // // // const btn = document.querySelector('#btnDeleteAll');
// // // // const ul = document.querySelector('#task-list');


// // // // // // click
// // // // // btn.addEventListener.('click',eventHandler);
// // // // // ul.addEventListener.('click',eventHandler);
// // // // //ul.addEventListener.('dblclick',eventHandler);
// // // // // mause up down
// // // // // btn.addEventListener.('mausedown',eventHandler);
// // // // // btn.addEventListener.('mauseup',eventHandler);

// // // // //ul.addEventListener.('mauseenter',eventHandler);
// // // // //ul.addEventListener.('mauseleave',eventHandler);
// // // // //ul.addEventListener.('mauseover',eventHandler);
// // // // //ul.addEventListener.('mauseout',eventHandler);

// // // // const h5 = document.querySelector('h5');

// // // // //ul.addEventListener.('mausemove',eventHandler);



// // // // // function eventHandler(event){
// // // // //     console.log(`event type : ${e.type}`);
// // // // // }
// // // // function eventHandler(event){
// // // //     console.log(`event type : ${e.type}`);

// // // //     h5.textContent = `Mouse X : ${event.offsetX}
// // // //     Mouse Y : ${event.offsetY}`;
// // // // }

// // // // // keyboard events
// // // // const input = document.querySelector('#txtTaskname');
// // // // const form = document.querySelector('form');

// // // // // input.addEventListener('keydown',eventHandler);
// // // // // input.addEventListener('keyup',eventHandler);
// // // // // // input.addEventListener('keypress',eventHandler);
// // // // // input.addEventListener('focus',eventHandler);
// // // // // input.addEventListener('blur',eventHandler);
// // // // // input.addEventListener('cut',eventHandler);
// // // // // input.addEventListener('paste',eventHandler);
// // // // // input.addEventListener('select',eventHandler);
// // // // // form.addEventListener('submit',eventHandler);


// // // // function eventHandler(e){
// // // //     // console.log('event type'+ e.type);
// // // //     // console.log('key code'+ e.keyCode);
// // // //     // console.log('value'+ e.target.value);

// // // //     // e.target.style.backgraundCOlor ='yellow';
// // // //     e.preventDefault();

// // // // }

// // // // event bubling and Capturin uygulamaları

// // // const form = document.querySelector('form');
// // // const cardBoby = document.querySelector('.card-body');
// // // const card = document.querySelector('.card');
// // // const container = document.querySelector('.container');

// // // // form.addEventListener('click',function(e){
// // // //     console.log('form');
// // // //     e.stopPropagation();
// // // // });

// // // // cardBoby.addEventListener('click',function(e){
// // // //     console.log('card body');
// // // //     e.stopPropagation();
// // // // });

// // // // card.addEventListener('click',function(e){
// // // //     console.log('card');
// // // //     e.stopPropagation();
// // // // });

// // // // container.addEventListener('click',function(e){
// // // //     console.log('container');
// // // //     e.stopPropagation();
// // // // });

// // // // form.addEventListener('click',function(e){
// // // //     console.log('form');
// // // //     e.stopPropagation();
// // // // },true);

// // // // cardBoby.addEventListener('click',function(e){
// // // //     console.log('card body');
// // // //     e.stopPropagation();
// // // // },true);

// // // // card.addEventListener('click',function(e){
// // // //     console.log('card');
// // // //     e.stopPropagation();
// // // // },true);

// // // // container.addEventListener('click',function(e){
// // // //     console.log('container');
// // // //     e.stopPropagation();
// // // // },true);

// // // // // const deleteItems = document.querySelectorAll('.fa-times');
// // // // // deleteItems.forEach(function(item){
// // // // //     item.addEventListener('click',function)
// // // // //     console.log(e.target);
// // // // // });

// // // // const ul = document.querySelector('ul');

// // // // ul.addEventListener('click',function(e){
// // // //     if(e.target.className==='fas fa-times'){
// // // //         e.target.parentElement.parentElement.remove();
// // // //         e.preventDefault();
// // // //     }
// // // // })

// // // Local and session storage
// // set Item

// // const firstName = localStorage.setItem
// // ('firstName','Sadık');
// // const lastName = localStorage.setItem
// // ('lastName','Turan');

// // console.log(localStorage);

// // get Item

// const firstName = localStorage.setItem
// ('firstName','Sadık');
// const lastName = localStorage.setItem
// ('lastName','Turan');

// let hobies = ['sinema','araba','gezmek'];

// val = localStorage.getItem('firstName');
// val = localStorage.getItem('lastName');

// // set array to storage

// localStorage.setItem('hobies',JSON.stringify
// (hobies));
// val = JSON.parse(localStorage.getItem
//     ('hobies'));


// // remove item
// localStorage.removeItem('firstName');
// localStorage.removeItem('lastName');

// // clear 

// localStorage.clear();

// console.log(val);
// console.log(localStorage);

// // const city = sessionStorage.setItem('citt',
// // 'Kocaeli');

// // const country = sessionStorage.setItem
// // ('country','Turkey');

// // console.log(sessionStorage);
// // // // map uygulaması nedir

// // //  var numbers = [15, 24, 53, 8, 16, 2, 35];
// // // // var addedNumbers = numbers.map(function(number) {
// // // //   return number += 8;
// // // // });
// // // // console.log(addedNumbers);

// // // var addedNumbers2 = numbers.map((number) => { return number + 8; });
// // //  console.log(addedNumbers2);
// // // var addedNumbers2 = numbers.map(number => number + 8); console.log(addedNumbers2);
// // // yukarıdaki ifadede number tek parametre olduğu için de parantez olmadan da kullana bildik
// /* var numbers = [15, 24, 53, 8, 16, 2, 35];
// var addedNumbers = numbers.map(function(deneme) {
//       return deneme += 8;
//     });
// console.log(addedNumbers);
//  */

//  //degişiklik
//  // git son değişiklik
