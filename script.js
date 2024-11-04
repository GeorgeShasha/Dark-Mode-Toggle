const inputEl = document.getElementById("dark-mode");
const bodyEl = document.querySelector("body");
const circleEl = document.querySelector(".circle");

inputEl.checked = JSON.parse(localStorage.getItem("dark-mode"));

const updateTheme = () => {
  if (inputEl.checked) {
    bodyEl.style.background = "black";
  } else {
    bodyEl.style.background = "white";
  }
};

const updateLocalStorage = () => {
  localStorage.setItem("dark-mode", JSON.stringify(inputEl.checked));
};

inputEl.addEventListener("input", () => {
  updateTheme();
  updateLocalStorage();
});

updateTheme();
