// will render the question container for a given question
const renderQuestion = (question) => {
  const questionContainer = document.createElement("div");
  questionContainer.setAttribute("class", "question-container");

  const questionDiv = document.createElement("div");
  questionDiv.setAttribute("class", "question");
  questionDiv.textContent = "What is the question?";

  const ul = document.createElement("ul");
  ul.setAttribute("class", "answers");

  const li1 = document.createElement("li");
  li1.textContent = "Answer 1";

  const li2 = document.createElement("li");
  li2.textContent = "Answer 2";

  const li3 = document.createElement("li");
  li3.textContent = "Answer 3";

  const li4 = document.createElement("li");
  li4.textContent = "Answer 4";

  ul.append(li1, li2, li3, li4);

  questionContainer.append(questionDiv, ul);

  const main = document.getElementById("quiz-app");
  const startQuizContainer = document.getElementById("start-quiz-container");

  startQuizContainer.remove();

  main.append(questionContainer);
};

// function called when you click on start quiz button
const startQuiz = () => {
  console.log("button clicked");

  renderQuestion();
};

// add event listener for click event on start quiz button
const startQuizButton = document.getElementById("start-quiz-btn");
startQuizButton.addEventListener("click", startQuiz);
