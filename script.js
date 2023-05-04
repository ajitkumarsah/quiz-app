const quizDB = [
  {
    question: "01: I hate?",
    a: "Ajit",
    b: "You",
    c: "My love",
    d: "my babu",
    ans: "ans1",
  },
  {
    question: "02: Who loves you the most?",
    a: "Sunil",
    b: "Parents",
    c: "Ajit",
    d: "Self",
    ans: "ans2",
  },
  {
    question: "03: Your love favoraite color?",
    a: "White",
    b: "Black",
    c: "Brown",
    d: "Blue",
    ans: "ans2",
  },
  {
    question: "04: Your love Favoraite food?",
    a: "Biryani",
    b: "Pani puri",
    c: "Paneer",
    d: "Mutoon",
    ans: "ans4",
  },
  {
    question: "05: your love nickname?",
    a: "Roni",
    b: "Ronei",
    c: "Rony",
    d: "Ronie",
    ans: "ans3",
  },
  {
    question: "06: your love loves whom?",
    a: "Money",
    b: "Animal",
    c: "You",
    d: "Food",
    ans: "ans3",
  },
];

const answers = document.querySelectorAll(".answer");

const showscore = document.getElementById("showscore");

const question = document.querySelector(".question");
const option1 = document.querySelector("#question1");
const option2 = document.querySelector("#question2");
const option3 = document.querySelector("#question3");
const option4 = document.querySelector("#question4");
const submit = document.querySelector("#submit");

const op1 = document.getElementById("option1");
const op2 = document.getElementById("option2");
const op3 = document.getElementById("option3");
const op4 = document.getElementById("option4");

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  const questionList = quizDB[questionCount];
  question.innerHTML = questionList.question;
  op1.innerHTML = questionList.a;
  op2.innerText = questionList.b;
  op3.innerText = questionList.c;
  op4.innerText = questionList.d;
};

loadQuestion();

const getCheckAnswer = () => {
  let answer;

  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
};

const fetchQns = () => {
  let answer = getCheckAnswer();

  if (answer == quizDB[questionCount].ans) {
    score++;
  }

  questionCount++;

  if (questionCount == quizDB.length) {
    showscore.innerHTML = `<h1>Hurry! You scored ${score} from ${quizDB.length}</h1>`;
  }

  loadQuestion();
};

showscore.innerHTML = `<h1>Your score ${score} / ${quizDB.length}</h1>`;
