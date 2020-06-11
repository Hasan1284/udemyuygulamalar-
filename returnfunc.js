// // return functions

// function Question(hobby){

//     switch(hobby){
        
//         case 'car':
//             return function(name){
//                 console.log(name +' do you have a car ?');
//             }
            
//             break;
            
//             case 'book':
//                 return function(name){
//                     console.log(name +
//                         ' what is you favorite book ?');
//                 }
                
//             break;
            
//             case 'software':
//                         return function(name,type){
//                             console.log(name +
//                                 ' are you interested  ' +type+ '?');
//                         }
                        
//             break;
                        
//             default :
//                         return function(name){
//                             console.log(name +' how are you ?');
//                         }
        
            
//     }
// }

// var carQuestion = Question('car');

// carQuestion('hasan');
// carQuestion('huseyin');

// var softwareQuestion = Question('software');

// softwareQuestion('hasan','nodejs');

// getter and setter

// const person = {
//     firstName : 'hasan',
//     lastName : 'aslan',
//     getfullName : function(){
//         return `${this.firstName} ${this.lastName}`
//     },
//     setFullname : function(value){
//         const parts = value.split(' ');
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// }

// person.firstName = 'hasan';

// console.log(person.getfullName());
// const person = {
//     firstName : 'hasan',
//     lastName : 'aslan',
//     get fullName (){
//         return `${this.firstName} ${this.lastName}`
//     },
//     set Fullname(value){
//         const parts = value.split(' ');
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// }

// Object.defineProperty(person, 'fullName', {
    
//     get function(){
//         return `${this.firstName}
//          ${this.lastName}`
//     },
//     set function(value){
//         const parts = value.split(' ');
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// }
// Object.defineProperty(person, 'age', {
//     value : 50,

//     writable : false

//     })


// person.Fullname = 'elif aslı'
// console.log(person.fullName);
// console.log(person);
// // person.setFullname('elif aslı');
// // console.log(person.fullName());

// call apply and bind

// var welcome = function(a,b){
//     console.log('welcome' +this.name+ '.Areyou interested in'+a+ ' and'+b);
// }

// var yigit = {name:'Yiğit'};
// var ada = {name : 'Ada'};

// welcome.call(yigit,'asp.net','angular');
// welcome.call(ada);

// welcome.apply(yigit,['asp.net','angular']);
// welcome.apply(ada);

// welcomeYigit = welcome.bind(yigit);
// welcomeYigit();

// // call apply bind ile ilgili örnek

// var num = {
//     min : 0,
//     max : 100,
//     checkNumericRange : function(value){
//         if(typeof value !== 'number')
//             return false;
//     }else{
//         return value>=this.min && value<max;
//     }
// }

// console.log(num.checkNumericRange(20));
// console.log(num.checkNumericRange(-20));

// var num1 = {min : 50, max : 60};
// console.log(num.checkNumericRange.call(num1,65));
// console.log(num.checkNumericRange.apply(num1,[52]));
// var checkNumer = num.checkNumericRange.bind(num1);

// console.log(checkNumer(56));

    
// Error Handling

//referance error
// type error
//syntaxerror
//URIError
//error

var user = {
    name: 'hasan aslan'
}
try{
    //console.log(myFunction());
    console.log(user.name);
    if(!user.email){
        // throw new SyntaxError('user has no email');
        throw new Error('user has no email');
    };
    console.log(user.email);
}
catch(e){
    console.log(e);
    console.log(e.message);
    console.log(e.name);
    console.log(e instanceof ReferenceError);
    console.log(e instanceof TypeError);
    console.log(typeof e);

}
finally{
    console.log('finally block');
}
//errr

document.getElementById('myBtn')addEventListener('click',function(e){
    var name = document.getElementById('name');
    var age = document.getElementById('age');
    var errors = document.getElementById('errors');
try{
    if(name.nodeValue.length === 0){
        throw new Error('name is required');
    }

    if(name.nodeValue.length>20){
        throw new Error('name is too long');
    }
    catch(err){
        errors.innerHTML = err.message;
    }s
    finally{
        name.value = '';
        name.value = '';
    }
}

})