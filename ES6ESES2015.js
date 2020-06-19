// Array in ES6

const boxes = document.querySelectorAll('.box');
//ES5
let boxesES5 = Array.prototype.slice.call(boxes);

boxesES5.forEach(Function(box){
    box.style.backgroundColor='green';

});

// ES6

Array.from(boxes).forEach(box=>
    box.style.backroundColor='green');
//ES5
    for (let i=0; i<boxesES5.lenght;i++){
        if (boxesES5[i].className=='box blue'){
            continue;
        }
boxesES5[i].textContent = "Iam changed";
boxesES5[i].style.backgroundColor = "blue";

    }

    // ES6v
     var boxesES6 = Array.from(boxes);

     for (let box of boxesES6){
         if(box.className=='box blue'){
             continue;
         }
         box.textContent='Iam changed';
         box.style.backgroundColor='blue';

     }

     //from 

     let arr = Array.from('Modern Javascript');
      const products = [
          {name: 'Samsung S8',price : 3000},
          {name: 'Samsung S7',price : 2000},
          {name: 'Samsung S6',price : 1000},
      ]

      console.log(Array.from(pruducts,prd => prd));
      console.log(Array.from(pruducts,prd => prd.name));
      console.log(Array.from(pruducts,price => prd.price));
      console.log(Array.from(pruducts,price => prd.price));
      console.log(Array.from(pruducts,prd =>
         prd.name=='Samsung S8'));
      console.log(products.find(prd => prd.name=='Samnsung S8'));
      console.log(products.filter(prd => prd.name=='Samnsung S8'));
      console.log(products.findIndex(prd => prd.price==2000));

      let numbers = ['a','b','c'];

      let entries = numbers.entries();

      for (let i of entries){
          console.log(i);
      }

      let keys = numbers.keys();
      
      for (let i of keys){
          console.log(i);
      }
      
      let values = numbers.values();
          
        for (let i of values){
              console.log(i);
          }

