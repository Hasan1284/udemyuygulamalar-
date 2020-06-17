//destructuring
var a,b,rest;

[a,b] = [10,20];
console.log(a);
console.log(b);

[a,b,...rest] = [10,20,30,40,50,60];

console.log(a);
console.log(b);
console.log(rest);

({a,b} = {a:10, b:20}); 
console.log(a);
console.log(b);

({a,b,...rest} = {a:10,b:20,c:30,d:40}); 

console.log(a);
console.log(b);
console.log(rest);
//destructuring assaigment

//ES6
const arrConfig = ['localhost','8080','900'];
var port = arrConfig[1];
var timeout = arrConfig[2];

console.log(server,port,timeout);

//ES6

const[server,port,timeout] = arrConfig;

console.log(server,port,timeout);




//array destructuring



//objeckt destructuring

const objConfig = {
    server : 'localhost',
    port : '8080',
    timeout : 900
}

var server = objConfig.server;
var port = objConfig.port;
var timeout = objConfig.timeout;
console.log(server,port,timeout);



const {server,port,timeout} = arrConfig;

console.log(server,port,timeout);

let {timeout : t} = objConfig;
console.log(t);

let {server,port,timeout=900} = objConfig;
console.log(server,port,timeout);

const days = ['monday','tuaesday','wenesday','thursday','friday'];

const [wed,fri] = days;
const [,,wed,,,fri] = days;







