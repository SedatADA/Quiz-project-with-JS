const quizData = [
  {
    question:
      "5 tane makine yaklaşık 5 dakika içerisinde 5 düğme üretir. Buna göre 100 tane makine 100 tane düğmeyi kaç dakikada üretir...",
    a: "20",
    b: "15",
    c: "5",
    d: "25",
    e: "3",
    correct: "c",
  },
  {
    question:
      "Bir tane akvaryum içerisinde 10 tane balık bulunuyor. Bu balıkların 2 tanesi boğulur. Kalanlardan 4 tanesi yüzüyor ve 3 tanesi de ölür. Akvaryum içerisinde kaç balık kalır.",
    a: "8",
    b: "10",
    c: "4",
    d: "2",
    e: "0",
    correct: "b",
  },
  {
    question: "En Yakışıklı Atrist Nerde Yaşar..",
    a: "Amerika",
    b: "Yeni Zelanda",
    c: "İsveç",
    d: "Brezilya",
    e: "Dünyada",
    correct: "e",
  },
  {
    question: "En Parlak Siyasetçi Kimdir...",
    a: "Mesut Parlak",
    b: "Veli Canlı",
    c: "Kemal Sunal",
    d: "Kemal Tahir",
    e: "Murat Yalçın",
    correct: "a",
  },
  {
    question: "En aktif Facebook Kullanıcısı. Kimdir...",
    a: "Ali Şahin",
    b: "Veli Canlı",
    c: "Kemal Sunal",
    d: "Kemal Tahir",
    e: "Murat Yalçın",
    correct: "b",
  },
];
//Sabit veriler
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  deselectedAnswers();
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  e_text.innerText = currentQuizData.e;
}
function deselectedAnswers() {
  answerEls.forEach((answerEls) => (answerEls.checked = false));
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
  //console.log(answer);
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h2> Test Tamamlandı,${score * 20} puan aldınız.🌞</h2>
      <button class="submit" onClick ="location.reload()">Tekrar Dene 🔃</button>`;
    }
  }
});
