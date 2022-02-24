// the Data 
const questionData = [
   {
      question: "What's 3+10 ?",
      Answer1: "310",
      Answer2: "30",
      Answer3: "13",
      correctAnswer: "Answer3"
   },
   {
      question: "is HTML a ... ?",
      Answer1: "Programing Language",
      Answer2: "Scripting Language ",
      Answer3: "Styling Language",
      correctAnswer: "Answer2"
   },
   {
      question: "what's the most used Languages in the last year ?",
      Answer1: "Python",
      Answer2: "Java",
      Answer3: "C",
      correctAnswer: "Answer1"
   },
   {
      question: "How is the Popular Javascript Framework ?",
      Answer1: "Angular",
      Answer2: "Vue.js",
      Answer3: "React.js",
      correctAnswer: "Answer3"
   },
   {
      question: "When Javascript Lunched ? ",
      Answer1: "2019",
      Answer2: "1995",
      Answer3: "none of the above",
      correctAnswer: "Answer3"
   },
];


const quiz = document.getElementById("quiz")
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const question_text = document.getElementById("questionel");
const subButton = document.getElementById("sub")

let score = 0;
let currentQuestion = 0;

function loadQuiz(){
   // load the questions and the answers 
   const currentQuiz = questionData[currentQuestion]
   // console.log(currentQuiz)
   question_text.innerHTML = `${currentQuiz.question}`
   a_text.innerHTML = `<input onclick="cd(a_text)" id="Answer1" type="radio" name="Answer" class="answerEL"> ${currentQuiz.Answer1}` 
   b_text.innerHTML = `<input id="Answer2" onclick="cd(b_text)" name="Answer" class="answerEL" type="radio"> ${currentQuiz.Answer2}`
   c_text.innerHTML = `<input id="Answer3" type="radio" onclick="cd(c_text)" name="Answer" class="answerEL"> ${currentQuiz.Answer3}`
}
loadQuiz()

function getSelected(){
   // get the selected answer form the interface
   const answerEls = document.querySelectorAll(".answerEL")
   let answer = undefined
   answerEls.forEach(answerEl => {
      if(answerEl.checked){
         answer = answerEl.id
      }
   })
   return answer;

}


subButton.addEventListener("click", () => {
   // Submit the answer and go to the next page after restoring the user answer
   reset()
   const currentQuiz = questionData[currentQuestion]
   let answer = getSelected()
   console.log(answer)
   console.log(currentQuiz.correctAnswer)
   if(answer) {
      if(answer == currentQuiz.correctAnswer) {
         score++;

      }else {
      }
      currentQuestion ++;
      if(currentQuestion < questionData.length){
         loadQuiz()
      }else {
         quiz.innerHTML = `<h1 class="scoreText">Your Score is : </h1>
         <div class="score">${score}/5</div>
         <button onclick = "refresh()">Play Again</button>`
      }
      
   }else {
      console.log("non selected")
   }

   

})

function refresh() {
   // refresh the page after ending the quiz
   location.reload()
}

const li = document.getElementById("ele");

function cd(el){
   // Adding Focus Effect
   const answerEls = document.querySelectorAll(".answerELE")
   answerEls.forEach(answerEl =>{
      if(answerEl.classList.contains("clicked")){
         answerEl.classList.remove("clicked")
      }
      
   })
   el.classList.toggle("clicked")
}

function reset(){
   // rest the Fucus Effect
   const answerEls = document.querySelectorAll(".answerELE")
   answerEls.forEach(answerEl =>{
      if(answerEl.classList.contains("clicked")){
         answerEl.classList.remove("clicked")
      }
      
   })
}
