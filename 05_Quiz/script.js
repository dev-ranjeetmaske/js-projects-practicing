document.addEventListener("DOMContentLoaded", () => {
  const startbtn = document.getElementById("start-btn");
  const restartbtn = document.getElementById("restart-btn");
  const nextbtn = document.getElementById("next-btn");
  const questioncontainer = document.getElementById("question-container");
  const questiontext = document.getElementById("question-text");
  const choiceslist = document.getElementById("choices-list");
  const resultcontainer = document.getElementById("result-container");
  const scoretext = document.getElementById("score");

  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
  ];

  const currentQuestionIndex = 0;
  const score = 0;

  startbtn.addEventListener("click", () => {
    questioncontainer.classList.remove("hidden");
    questiontext.textContent = questions[currentQuestionIndex].question;
  

  });
});
