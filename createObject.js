// object create

let personProto = {
    calculateAge: function(){
        return 2020-this.yearOfBirth;
    }
}

console.log(personProto);

let yigit = Object.create(personProto);

yigit.name = 'yigit';
yigit.yearOfBirth = 2010;
yigit.job = 'student';

let emel = Object.create(personProto,{
    name : {value: 'emel'},
    yearOfBirth : {value : 1989},
    job : {value : 'teacher'}
});