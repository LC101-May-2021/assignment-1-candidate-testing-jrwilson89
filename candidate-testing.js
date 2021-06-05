const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = [
"True or false: 5 kilometer == 5000 meters?",
"(5 + 3)/2 * 10 = ?",
'Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?',
"Who was the first American woman in space?",
"What is the minimum crew size for the ISS?"
];

let correctAnswers = ["true", "40", "Trajectory", "Sally Ride", "3"];
let candidateAnswers = [];
let numCorrect = 0;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName=input.question("Enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //


 for (let i=0; i< questions.length; i++) {
  let answer=input.question(questions[i] + "\nYour answer: ");
  candidateAnswers.push(answer);
 
 if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
  //     console.log("Correct!");
  //  } else {
  //    console.log("Sorry, wrong answer.");
   }


  console.log("Correct Answer: " + correctAnswers[i] + "\n");
 }
  
}


function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  // let score=0;
  let grade = (numCorrect / questions.length) * 100;

  // for (let i=0; i<candidateAnswers.length; i++){
  //   if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
  //     score+=1;
  //  }
  // }
  // grade=score/5 * 100;


    for (let i=0; i<questions.length; i++) {
      if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
        numCorrect ++;
      }
      console.log(`${i+1}) ${questions[i]}`);
      console.log(`Your Answer: ${candidateAnswers[i].toLowerCase()}`);
      console.log(`Correct Answer: ${correctAnswers[i].toLowerCase()}`);
      console.log('\n');
  }

  
  // let grade = (numCorrect / questions.length) * 100;
  console.log(`>>> Overall Grade: ${grade}% (${numCorrect} of ${questions.length} correct) <<<`);
  if (grade >= 80) {
    console.log(`>>> Status: PASSED <<<`);
  } else {
    console.log(`>>> Status: FAILED <<<`);


  }
  // console.log(`>>> Overall Grade: ${grade}%  (${score} of 5 responses corret) <<<`)

  // if (grade >= 80) {
  //   console.log(">>> Status: PASSED <<<");
  // } else {
  //   console.log(">>> Status: FAILED <<<")
  // }


  // return grade;
}
//console.log(gradeQuiz);

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Hello " + candidateName + "!\n");
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