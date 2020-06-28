// // maps //key value 
// let val;
// const numbers = new Map();


// number.set(1,'one');
// number.set('2','two');
// number.set(3,'three');
// number.set('four','four');


// val = numbers;
// val = numbers.get(1);
// val = numbers.get('2');
// val = numbers.get('four');
// val = numbers.size;
// val = numbers.has(1);
// val = numbers.has('four');

// console.log(val);

// for (var [key,value] of numbers) {
//     console.log(key + ' = '+value);
// for (var [key,value] of numbers.entries) {
//     console.log(key + ' = '+value);
// }
// for (var key of numbers.keys) {
//     console.log(key);
// }
// for (var value of numbers.values) {
//     console.log(value);
// }
// // set methodu(cpllection)

// let val;
// var mySet = new Set();

// mySet.add(1);
// mySet.add(2);
// mySet.add();
// mySet.add('iki');
// mySet.add({a:1,b:2});

// var obj = {a:1,b:2};

// mySet.add(obj);

// val = mySet.has(1);
// val = mySet.has(3);
// val = mySet.hasobj;

// val = mySet.size;
// mySet.delete(1);


// console.log(val);
// console.log(mySet);

// for(let item of mySet){
//     console.log(item);
// }
// for(let item of mySet.values){
//     console.log(item);
// }

// for(let item of mySet.keys){
//     console.log(item);
// }
// for(let [key.value] of mySet.entries){
//     console.log(key,value);
// }

// console.log(Array.from(mySet));

// let mySet2 = new Set([1,2,3,4]);

// //intersect

// var intersect = new Set(Array.from(mySet).filter
// (x>=mySet2.has(x)));
// console.log(intersect);

// console.log(mySet2); 
// // differerance

// var difference = new Set([...mySet].filter
//     (x=>!mySet2.has(x)));

//     console.log(difference);

// classes

//ES5

// 

class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    static distance(a,b){
        const dx = a.x - b.x;
        const dx = a.y - b.y;
        return Math.hypot(dx,dy);
    }
}

const d1 = new Point(10,10);
const d2 = new Point(20,20);

console.log(Point.distance(d1,d2));

// sub classes

//ES5
function PersonES5(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

PersonES5.prototype.sayHi = function(){
    return `Hello I'am ${this.firstName} 
    ${this.lastName}`
}

function CustomerE5(firstName,lastName,phone,username){
    PersonES5.call(this,firstName,lastName);
    this.phone = phone;
    this.username = username;
}

CustomerES5.prototype = Object.create(PersonES5.prototype);
('sena','hasan','1234567','senaaslan');

console.log(customer.sayHi());

//Es6

class PersonES6{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHi(){
        return `hello I am ${this.firstName} ${this.lastName}`
    }
}

class CustomerES6 extends PersonES6{
    constructor(firstName,lastName,phone,username){
        super(firstName,lastName){
            this.phone = phone;
            this.username = username;

        }
    }
}

let customer1 = new CustomerES6('volkan','yükselen','123444','volkany')