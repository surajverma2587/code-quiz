const main = document.getElementById("high-scores-container");

const renderHighScores = () => {
  const highscores = getFromLocalStorage();

  const ul = document.createElement("ul");
  ul.setAttribute("class", "highscores");

  const renderListItem = (each) => {
    const li = document.createElement("li");
    li.textContent = `${each.user} - ${each.score}`;

    ul.append(li);
  };

  highscores.forEach(renderListItem);

  main.append(ul);
};

window.addEventListener("load", renderHighScores);
