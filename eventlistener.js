// // // // event listeners
// // // const btn = document.querySelector('#btnDeleteAll');

// // // btn.addEventListener('click',function(){
// // //     console.log('btn clicked');
// // // });

// // // yada farklı bir şekilde aynı şekilde yazılabilir

// // const btn = document.querySelector('#btnDeleteAll');
// // const btn2 = document.querySelector('#btnAddNewTask');

// // btn.addEventListener('click',btnClick);
// // btn.addEventListener('click',btnClick2);
// // btn2.addEventListener('click',btnClick);

// // function btnClick(){
// //     console.log('btn clicked')
// // }
// // function btnClick2(){
// //     console.log('btn clicked')
// // }

// const btn = document.querySelector('#btnDeleteAll');
// const btn2 = document.querySelector('#btnAddNewTask');


// // btn.addEventListener('click',function(e){
// //          console.log('btn clicked');

// //          e.preventDefault
// //      });

// btn.addEventListener('click',function(e){
    
//     let val;

//     val = e;

//     val = e.target;
//     val = e.type;
//     val = e.target.id;
//     val = e.target.classList;
    
//     console.log(val);

//     e.preventDefault
//      });

//mause events
const btn = document.querySelector('#btnDeleteAll');
const ul = document.querySelector('#task-list');


// // click
// btn.addEventListener.('click',eventHandler);
// ul.addEventListener.('click',eventHandler);
//ul.addEventListener.('dblclick',eventHandler);
// mause up down
// btn.addEventListener.('mausedown',eventHandler);
// btn.addEventListener.('mauseup',eventHandler);

//ul.addEventListener.('mauseenter',eventHandler);
//ul.addEventListener.('mauseleave',eventHandler);
//ul.addEventListener.('mauseover',eventHandler);
//ul.addEventListener.('mauseout',eventHandler);

const h5 = document.querySelector('h5');

//ul.addEventListener.('mausemove',eventHandler);



// function eventHandler(event){
//     console.log(`event type : ${e.type}`);
// }
function eventHandler(event){
    console.log(`event type : ${e.type}`);

    h5.textContent = `Mouse X : ${event.offsetX}
    Mouse Y : ${event.offsetY}`;
}
