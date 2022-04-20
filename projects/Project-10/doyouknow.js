const quizData = [
  {
    question: "What is snow called in Finnish?",
    a: "Vesi",
    b: "Mehu",
    c: "Limonaadi",
    d: "Lumi",
    correct: "d",
  },

  {
    question: "What is big, bright and yellow during the Finnish summer?",
    a: "Appelsiini",
    b: "Aurinko",
    c: "Kurpitsa",
    d: "Auto",
    correct: "b",
  },

  {
    question: "What liquid is used for cleaning, washing and drinking?",
    a: "Öljy",
    b: "Olut",
    c: "Viini",
    d: "Vesi",
    correct: "d",
  },

  {
    question: "How many people live in Finland?",
    a: "5,5 miljoonaa",
    b: "2,5 miljoonaa",
    c: "3,5 miljoonaa",
    d: "7,5 miljoonaa",
    correct: "a",
  },

  {
    question: "What are the colors of the Finnish national flag?",
    a: "sininen ja musta",
    b: "valkoinen ja punainen",
    c: "valkoinen ja sininen",
    d: "sininen ja keltainen",
    correct: "c",
  },

  {
    question: "Who is the Finnish President?",
    a: "Sanna Marin",
    b: "Pekka Haavisto",
    c: "Urho Kekkonen",
    d: "Sauli Niinistö",
    correct: "d",
  },

  {
    question: "What is the Capital of Finland?",
    a: "Helsinki",
    b: "Espoo",
    c: "Vantaa",
    d: "Tampere",
    correct: "a",
  },

  {
    question: "How many seasons (vuodenaika) are in Finland?",
    a: "Kaksi",
    b: "Kolme",
    c: "Neljä ",
    d: "Viisi",
    correct: "c",
  },

  {
    question: "How do you say 'Good Morning' in Finnish ?",
    a: "Hyvää iltaa",
    b: "Hyvää yötä",
    c: "Hyvää päivää ",
    d: "Hyvää huomenta",
    correct: "d",
  },

  {
    question: "What is a delicious, yellow and curved fruit ?",
    a: "sitruuna",
    b: "banaani",
    c: "tomaatti",
    d: "paprika",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
<h2> You answered ${score}
/ ${quizData.length} questions correctly.</h2>

<button onclick="location.reload()
">Reload</button>
`;
    }
  }
});
