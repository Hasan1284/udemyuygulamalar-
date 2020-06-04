// // object create

// let personProto = {
//     calculateAge: function(){
//         return 2020-this.yearOfBirth;
//     }
// }

// console.log(personProto);

// let yigit = Object.create(personProto);

// yigit.name = 'yigit';
// yigit.yearOfBirth = 2010;
// yigit.job = 'student';

// let emel = Object.create(personProto,{
//     name : {value: 'emel'},
//     yearOfBirth : {value : 1989},
//     job : {value : 'teacher'}
// });

// Prototypal inheritance

let Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){
    return 2018 - this.yearOfBirth;
}

let Teacher = function(name,yearOfBirth,job,
    subject){
        Person.call(this,name,yearOfBirth,job)
        this.subject = subject;

}


// Inherit the Person prototype methods
Teacher.prototype = Object.create
(Person.prototype);

// set Teacher costructur
Teacher.prototype.constructor = Teacher;
Teacher.prototype.greeting = function(){
    return 'hello my name is '+this.name;
}

let emel = new Teacher('emel',1989,'teacher',
'math');
console.log(Teacher.prototype.constructor);

console.log(emel);
