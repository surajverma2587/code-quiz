const questions = [
  {
    title: "What is the closest star to Earth?",
    options: ["Sun", "Mars", "Moon", "Venus"],
    answer: "Sun",
  },
  {
    title: "What is the largest ocean?",
    options: ["Pacific", "Indian", "Atlantic", "Arctic"],
    answer: "Pacific",
  },
  {
    title: "What is the most important muscle in the body?",
    options: ["Triceps", "Biceps", "Heart", "Eyes"],
    answer: "Heart",
  },
  {
    title: "How many inches in a foot?",
    options: ["10", "12", "6", "0"],
    answer: "12",
  },
  {
    title: "What is the most important animal on Earth?",
    options: ["Dogs", "Cats", "Bees", "Humans"],
    answer: "Bees",
  },
];

let currentQuestionIndex = 0;

const main = document.getElementById("quiz-app");

const renderNextQuestion = (event) => {
  const target = event.target;
  const currentTarget = event.currentTarget;

  if (target.matches("li")) {
    const option = target.getAttribute("data-option");
    const answer = currentTarget.getAttribute("data-answer");

    if (option === answer) {
      currentQuestionIndex++;

      const questionContainer = document.getElementById("question-container");
      questionContainer.remove();

      if (currentQuestionIndex < questions.length) {
        const nextQuestion = questions[currentQuestionIndex];

        renderQuestion(nextQuestion);
      } else {
        renderForm();
      }
    } else {
      console.log("handle wrong response");
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
  ul.setAttribute("data-answer", question.answer);

  const li1 = document.createElement("li");
  li1.setAttribute("data-option", question.options[0]);
  li1.textContent = question.options[0];

  const li2 = document.createElement("li");
  li2.setAttribute("data-option", question.options[1]);
  li2.textContent = question.options[1];

  const li3 = document.createElement("li");
  li3.setAttribute("data-option", question.options[2]);
  li3.textContent = question.options[2];

  const li4 = document.createElement("li");
  li4.setAttribute("data-option", question.options[3]);
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
