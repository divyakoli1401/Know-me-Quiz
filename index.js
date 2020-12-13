var readlineSync = require("readline-sync");
var userName = readlineSync.question("What's Your Name? ");
console.log("Welcome "+userName+" To HOW WELL DO YOU KNOW DIVYA?");
console.log("Please answer in small letters")
var score = 0;

function gamePlay(question,answer){
  userAnswer = readlineSync.question(question);
  if(userAnswer == answer){
    console.log("Right Answer!");
    score = score + 1;
  }else{
    console.log("Wrong Answer :(");
  }
  console.log("Your Score is "+ score);
  console.log("-----------------------")
}

questions = [{
  question: "Do I Like Dogs? ",
  answer: "yes"
},{
  question: "Do I Like Winters? ",
  answer: "yes"
},{
  question: "Am I a Coffee Perosn or Tea Person? ",
  answer: "tea"
},{
  question:"Am I a Beach Person or Mountain Person? ",
  answer: "mountain"
},{
  question:"Who is my favorite superhero? Ironman or Thor? ",
  answer: "thor"
},{
  question:"How many siblings do I have? ",
  answer: 2
}
]

for(var i = 0; i < questions.length; i++){
  gamePlay(questions[i].question,questions[i].answer);
}

console.log("Yay Your Final Score is "+ score + "!!!");
console.log("Thank You For Playing "+ userName)