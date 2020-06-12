// quiz uygulamaları

 function Question(text,choices,answer){
     this.text = text;
     this.choices = choices;
     this.answer = answer;
 }

// // question prototype
 Question.prototype.checkAnswer = function(answer){
     return this.answer === answer
 }

// // quiz consructor

 function Quiz(questions){
     this.questions = questions;
     this.score = 0;
     this.questionIndex = 0
 }

// // quiz prototype

 Quiz.prototype.getQuestions = function(){
     return this.questions[this.questionIndex];
 }

// // Quzi is finish
     Quiz.prototype.isFinish = function(){
         return this.questions.length === 
         this.questionIndex;
     }

// //quiz guess 


    Quiz.prototype.guess = function(answer){
         var question = this.getQuestions();

         if(question.checkAnswer(answer)){
            this.score++;
         }
         this.questionIndex++;
     }

 var q1 = new Question ('whats the best progrrammizng',
 ['C#','javascript','phyton','aspnet'],'javascript');

 var q2 = new Question ('whats the most popular progrrammizng',
 ['C#','javascript','phyton','aspnet'],'javascript');

 var q3 = new Question ('whats the best modern progrrammizng',
 ['C#','javascript','phyton','aspnet'],'javascript');

 var questions = [q1,q2,q3];

// // start quiz

 var quiz = new Quiz(questions);

 console.log(quiz.isFinish());

 console.log(quiz.getQuestions());
 quiz.guess('javascript');

 console.log(quiz.getQuestions());
 quiz.guess('javascript');

 console.log(quiz.getQuestions());
 quiz.guess('javascript');



 console.log(quiz.score);
 console.log(quiz.isFinish());


 console.log(quiz.isFinish());
 console.log(quiz.getQuestion());
 quiz.guess('javascript');

 console.log(q1.checkAnswer('C#'));
 console.log(q1.checkAnswer('javascript'));

//start quiz

var quiz = new quiz(questions);

loadQuestion();

function loadQuestion(){
    if(quiz.isFinish()){
        showScore();

    }else{

        var question = quiz.getQuestion();
        var choices =question.choices;
        document.querySelector('#question')
        .textContent = quiz.getQuestion();
        
        for(var i=0; i<choices.length;i++){
            var element = 
            document.querySelector('#choice'+i);
            element.innerHTML = choices[i];

            guess('btn'+i,choices[i]);
        }

       showProgress();


    }

   

}

function guess(id,guess){
    var btn = document.getElementById(id);
    btn.onclick = function(){
        quiz.guess(guess);
        loadQuestion()
    }


}

function showScore(){
    var html = `<h2>Score</h2><h4>${quiz.score}
    </h4>`;

    document.querySelector('.card-body').innerHTML 
    = html;

}

function showProgress(){
var questionNumber = quiz.questions.length;
document.querySelector('#progress').innerHTML
= 'Question' + questionNumber + 'of' +
 totalQuestion;

}




















z
