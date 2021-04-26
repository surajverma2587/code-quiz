const questions = [
  {
    title: "What is the question 1?",
    options: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
  },
  {
    title: "What is the question 2?",
    options: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
  },
  {
    title: "What is the question 3?",
    options: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
  },
  {
    title: "What is the question 4?",
    options: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
  },
  {
    title: "What is the question 5?",
    options: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
  },
];

let currentQuestionIndex = 0;

const renderNextQuestion = (event) => {
  const target = event.target;

  if (target.matches("li")) {
    currentQuestionIndex++;

    const questionContainer = document.getElementById("question-container");
    questionContainer.remove();

    if (currentQuestionIndex < questions.length) {
      const nextQuestion = questions[currentQuestionIndex];

      renderQuestion(nextQuestion);
    } else {
      console.log("render form here");
    }
  }
};

// will render the question container for a given question
const renderQuestion = (question) => {
  const questionContainer = document.createElement("div");
  questionContainer.setAttribute("class", "question-container");
  questionContainer.setAttribute("id", "question-container");

  const questionDiv = document.createElement("div");
  questionDiv.setAttribute("class", "question");
  questionDiv.textContent = question.title;

  const ul = document.createElement("ul");
  ul.setAttribute("class", "answers");

  const li1 = document.createElement("li");
  li1.textContent = question.options[0];

  const li2 = document.createElement("li");
  li2.textContent = question.options[1];

  const li3 = document.createElement("li");
  li3.textContent = question.options[2];

  const li4 = document.createElement("li");
  li4.textContent = question.options[3];

  ul.append(li1, li2, li3, li4);

  questionContainer.append(questionDiv, ul);

  const main = document.getElementById("quiz-app");
  const startQuizContainer = document.getElementById("start-quiz-container");

  if (startQuizContainer) {
    startQuizContainer.remove();
  }

  main.append(questionContainer);

  ul.addEventListener("click", renderNextQuestion);
};

// function called when you click on start quiz button
const startQuiz = () => {
  console.log("button clicked");

  renderQuestion(questions[currentQuestionIndex]);
};

// add event listener for click event on start quiz button
const startQuizButton = document.getElementById("start-quiz-btn");
startQuizButton.addEventListener("click", startQuiz);
