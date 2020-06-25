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
