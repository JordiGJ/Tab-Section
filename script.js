// grab elements
const buttons = document.querySelectorAll("button");
const texts = document.querySelectorAll(".text");

// set an id to each text div
texts.forEach((text, index) => text.setAttribute("id", `Step ${index + 1}`));

// functions
function handleClick(e) {
  const targetText = e.target.textContent;
  const target = e.target;
  // hide or show selected tab text
  texts.forEach((text) => {
    if (text.id === targetText) {
      text.classList.remove("hidden");
    } else {
      text.classList.add("hidden");
    }
  });
  // add or remove the selected class to buttons if selected
  buttons.forEach((btn) => {
    if (btn.textContent === targetText) {
      btn.classList.add("selected");
    } else {
      btn.classList.remove("selected");
    }
  });
}

// eventListeners
buttons.forEach((btn) => btn.addEventListener("click", handleClick));
