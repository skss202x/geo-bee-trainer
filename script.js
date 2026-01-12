const countries = [
  { country: "France", capital: "Paris" },
  { country: "Japan", capital: "Tokyo" },
  { country: "Brazil", capital: "Brasília" },
  { country: "Nigeria", capital: "Abuja" },
  { country: "Kazakhstan", capital: "Astana" }
];

let current;

function newQuestion() {
  current = countries[Math.floor(Math.random() * countries.length)];
  document.getElementById("question").textContent =
    "What is the capital of " + current.country + "?";
  document.getElementById("feedback").textContent = "";
  document.getElementById("answer").value = "";
}

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.trim();

  if (userAnswer.toLowerCase() === current.capital.toLowerCase()) {
    document.getElementById("feedback").textContent = "✅ Correct!";
  } else {
    document.getElementById("feedback").textContent =
      "❌ Incorrect. The capital is " + current.capital + ".";
  }

  setTimeout(newQuestion, 1500);
}

newQuestion();

