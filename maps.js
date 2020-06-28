// maps //key value 
let val;
const numbers = new Map();


number.set(1,'one');
number.set('2','two');
number.set(3,'three');
number.set('four','four');


val = numbers;
val = numbers.get(1);
val = numbers.get('2');
val = numbers.get('four');
val = numbers.size;
val = numbers.has(1);
val = numbers.has('four');

console.log(val);

for (var [key,value] of numbers) {
    console.log(key + ' = '+value);
for (var [key,value] of numbers.entries) {
    console.log(key + ' = '+value);
}
for (var key of numbers.keys) {
    console.log(key);
}
for (var value of numbers.values) {
    console.log(value);
}
// set methodu(cpllection)

let val;
var mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add();
mySet.add('iki');
mySet.add({a:1,b:2});

var obj = {a:1,b:2};

mySet.add(obj);

val = mySet.has(1);
val = mySet.has(3);
val = mySet.hasobj;

val = mySet.size;
mySet.delete(1);


console.log(val);
console.log(mySet);

for(let item of mySet){
    console.log(item);
}
for(let item of mySet.values){
    console.log(item);
}

for(let item of mySet.keys){
    console.log(item);
}
for(let [key.value] of mySet.entries){
    console.log(key,value);
}

console.log(Array.from(mySet));

let mySet2 = new Set([1,2,3,4]);

//intersect

var intersect = new Set(Array.from(mySet).filter
(x>=mySet2.has(x)));
console.log(intersect);

console.log(mySet2); 
// differerance

var difference = new Set([...mySet].filter
    (x=>!mySet2.has(x)));

    console.log(difference);
