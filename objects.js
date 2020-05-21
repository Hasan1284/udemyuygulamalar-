// // //objeckts
// // let val;

// // let num = 10;
// // val = num;

// // object literals
// // let yigit = {
// //     name: 'yigit',
// //     yearOfBirth: 2010,
// //     job: 'stdudent'
// // }
// // val = yigit






// // // array

// //  let numbers = [10,20,30];

// //  val = numbers;
 
// //  console.log(val);
// // console.log(typeof val);


// // let yigit = {
//     //     name: 'yigit',
//     //     yearOfBirth: 2010,
//     //     job: 'stdudent'
//     // }
    
//     // console.log(yigit);
    
//     // function constructure

//     // function Person(name,yearOfBirth,job){
//     //     this.name = name;
//     //     this.yearOfBirth = yearOfBirth;
//     //     this.job = job;
//     //     this.calculateAge = function(){
//     //         return 2018 - this.yearOfBirth;
//     //     }

//     //     // console.log(this);
//     // }

//     // asağıdaki ile yukarıda ki yazım tarzı da aynı işi görüyor

//     let Person = function(name,yearOfBirth,job){
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//         this.calculateAge = function(){
//             return 2018 - this.yearOfBirth;
//     }

//     let yigit = new Person('yigit',2010,'student');
//     let emel = new Person('emel',1980,'teacher');

//     console.log(yigit.name);
//     console.log(yigit.yearOfBirth);
//     console.log(yigit.job);
//     console.log(yigit.calculateAge());

// objects ProtoType
let Person = function(name,yearOfBirth,job){
            this.name = name;
            this.yearOfBirth = yearOfBirth;
            this.job = job;


        //     this.calculateAge = function(){
        //         return 2018 - this.yearOfBirth;
        // }
    }

Person.prototype.calculateAge = function(){
             return 2018 - this.yearOfBirth;
     }
Person.prototype.getName = function(){
             return this.name;
     }

Person.prototype.lastName= 'Turan';

let emel = new Person('emel',1989,'teacher');
console.log(emel.calculateAge());
console.log(emel.getName());
console.log(emel);
console.log(emel.hasOwnProperty('name'));
console.log(emel.hasOwnProperty('lastName'));
console.log(emel.lastName);