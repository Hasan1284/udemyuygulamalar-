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

Object.defineProperty(person, 'fullName', {
    
    get function(){
        return `${this.firstName}
         ${this.lastName}`
    },
    set function(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}
Object.defineProperty(person, 'age', {
    value : 50,

    writable : false

    })


person.Fullname = 'elif aslı'
console.log(person.fullName);
console.log(person);
// person.setFullname('elif aslı');
// console.log(person.fullName());