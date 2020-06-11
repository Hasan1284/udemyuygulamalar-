// quiz uygulamaları

function Question(text,choices,answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

// question prototype
Question.prototype.checkAnswer = function(answer){
    return this.answer === answer
}

var q1 = new Question ('whats the best progrrammizng',
['C#','javascript','phyton','aspnet'],'javascript');

var q2 = new Question ('whats the most popular progrrammizng',
['C#','javascript','phyton','aspnet'],'javascript');

var q3 = new Question ('whats the best modern progrrammizng',
['C#','javascript','phyton','aspnet'],'javascript');

console.log(q1.checkAnswer('C#'));
console.log(q1.checkAnswer('javascript'));
