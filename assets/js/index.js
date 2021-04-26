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

const main = document.getElementById("quiz-app");

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
      renderForm();
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

  const startQuizContainer = document.getElementById("start-quiz-container");

  if (startQuizContainer) {
    startQuizContainer.remove();
  }

  main.append(questionContainer);

  ul.addEventListener("click", renderNextQuestion);
};

// will render the form on quiz completion
const renderForm = () => {
  const formContainer = document.createElement("div");
  formContainer.setAttribute("class", "form-container");

  const h2 = document.createElement("h2");
  h2.textContent = "All Done!!";

  const scoreDiv = document.createElement("div");
  scoreDiv.setAttribute("class", "score");
  scoreDiv.textContent = "Your score is 25";

  const form = document.createElement("form");
  form.setAttribute("class", "score-form");

  const label = document.createElement("label");
  label.textContent = "Enter Initials: ";

  const input = document.createElement("input");
  input.setAttribute("type", "text");

  const button = document.createElement("button");
  button.setAttribute("class", "btn");
  button.textContent = "Submit";

  form.append(label, input, button);
  formContainer.append(h2, scoreDiv, form);

  main.append(formContainer);
};

// function called when you click on start quiz button
const startQuiz = () => {
  renderQuestion(questions[currentQuestionIndex]);
};

// add event listener for click event on start quiz button
const startQuizButton = document.getElementById("start-quiz-btn");
startQuizButton.addEventListener("click", startQuiz);
