const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
// let correctAnswer = "Sally Ride";
let correctAnswer = ["Sally Ride", "True", "40", "Trajectory", "3"];
let candidateAnswer = "";
// let questions = "Who was the first American woman in space? ";
let questions = ["Who was the first American woman in space? ","True or false: 5 kilometers = 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers;
let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName=input.question("Enter your name: ");
// console.log(candidateName);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

// console.log(questions);
  // candidateAnswer=input.question(questions);
 for (let i=0; i<5; i++) {
  //  let quiz = [questions[i]];
  candidateAnswer[i]=input.question(questions[i]);
 }
//  console.log(quiz);
// console.log(candidateAnswer);

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
 
 /*if (candidateAnswer === correctAnswer) {
    console.log("Correct!");
  } else {
    console.log ("Sorry, that was incorrect.");
  }*/
  //for (let i=0; i<5; i++) {
    //let quizAns = [correctAnswer [i]];
  
  while (i<5) {
    
  }
  
  if (candidateAnswer === correctAnswer) {
    console.log("Correct!");
  } else {
    console.log ("Sorry, that was incorrect.");
  }



  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Hello " + candidateName + "!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};