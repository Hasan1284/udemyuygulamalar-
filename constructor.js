// // // string
// // var str1 = 'hasan';
// // var str2 = new String('hasan');

// // console.log(str1);
// // console.log(typeof str1);
// // console.log(str2);
// // console.log(typeof str2);

// // if(str1 === 'sadık'){
// //     console.log('yes');
// // }else{
// //     console.log('no');
// // }

// // if(str2 == 'sadık'){
// //     console.log('yes');
// // }else{
// //     console.log('no');
// // }

// // String.prototype.repeat = function(n){
// //     return new Array(n+1).join(this);
// // }

// // console.log('sadık'.repeat(4));

// // // number

// // var num1 = 10;
// // var num2 = new Number(10);

// // // boolean

// // var bool1 = true;
// // var bool2 = new Boolean(true);

// // // Objeckt
// // var obj1 = {
// //     name = 'hasan'
// // }

// // var obj2 = new Object({
// //     name : 'hasan'
// // });

// // // Array

// // var arr1 = ['ali','veli','hasan','hüseyin'];
// // var arr2 = new Array('ali','veli','hasan','hüseyin');

// // Array.prototype.remove = Array.prototype.remove || 
// // function(member){
// //     var index = this.indexOf(member);
// //     if(index> -1){
// //         this.splice(index,1);
// //     }

// //     return this;
// // }

// // console.log(arr1.remove('veli'));

// // //inheritance
// // // Person constructor
// // function Person (name){
// //     this.name = name;
// // }

// // Person.prototype.Introduce = function(){
// //     console.log('hello my name is '+ this.name);

// // }

// // // Teacher Constructor

// // function Teacher(name,branch){
// //     Person.call(this,name);
// //     this.branch = branch;
// // }

// // Teacher.prototype = Object.create(Person.prototype);
// // Teacher.prototype.constructor = Teacher;
// // Teacher.prototype.teach = function(){
// //     console.log('I teach'+this.branch);
// // };

// // // Student Constructor

// // function Student(name,number){
// //     Person.call(this,name);
// //     this.number = number;
    
// // }

// // Student.prototype = Object.create(Person.prototype);
// // Student.prototype.constructor = Student;
// // Student.prototype.study = function(){
// //     console.log('my student number is' + this.number + 'Ive already studied hard');
// // };

// // // Headmaster Constructor

// // function Headmaster(name,branch){
// //     Teacher.call(this,name,branch)
// // }

// // Headmaster.prototype = Object.create
// // (Teacher.prototype);
// // Headmaster.prototype.constructor = Headmaster;
// // Headmaster.prototype.shareTask = function(){
// //     console.log('Ive already shared all the work');
// // };



// // // let p1 = new Person('hasan');
// // // p1.Introoduce();

// // // let t1 = new Teacher('veli','math');
// // // t1.Introduce();

// // // let s1 = new Student('hasan1','100');
// // // s1.Introduce();

// // // let h1 = new Headmaster('ahmet','math');
// // // h1.Introduce(); // Person
// // // h1.teach();     // Teacher
// // // h1.shareTask(); // Headmaster

// // // Primitive Objects

// // var a = 10;
// // var b = a;

// // console.log(a);
// // console.log(b);

// // var obj1 = {
// //     name : 'ada',
// //     age : 10
// // }

// // var obj2 = obj1;
// // obj1.age = 12;

// // console.log(obj1.age);
// // console.log(obj2.age);

// var num = 50;
// var account = {
//     name : 'elif',
//     accountNumber : '1234567'
// }

// function update(a,b){
//     a = 100;
//     b.accountNumber = '222222';
// }

// update(num,account);

// var products = [
//     {name : 'product name', price : 1000},
//     {name : 'product name', price : 1000},
//     {name : 'product name', price : 1000},
//     {name : 'product name', price : 1000},
//     {name : 'product name', price : 1000},
//     {name : 'product name', price : 1000},
// ]

// function filterProducts(prd){

// }

// filterProducts(products);