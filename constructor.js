// string
var str1 = 'hasan';
var str2 = new String('hasan');

console.log(str1);
console.log(typeof str1);
console.log(str2);
console.log(typeof str2);

if(str1 === 'sadık'){
    console.log('yes');
}else{
    console.log('no');
}

if(str2 == 'sadık'){
    console.log('yes');
}else{
    console.log('no');
}

String.prototype.repeat = function(n){
    return new Array(n+1).join(this);
}

console.log('sadık'.repeat(4));

// number

var num1 = 10;
var num2 = new Number(10);

// boolean

var bool1 = true;
var bool2 = new Boolean(true);

// Objeckt
var obj1 = {
    name = 'hasan'
}

var obj2 = new Object({
    name : 'hasan'
});

// Array

var arr1 = ['ali','veli','hasan','hüseyin'];
var arr2 = new Array('ali','veli','hasan','hüseyin');

Array.prototype.remove = Array.prototype.remove || 
function(member){
    var index = this.indexOf(member);
    if(index> -1){
        this.splice(index,1);
    }

    return this;
}

console.log(arr1.remove('veli'));