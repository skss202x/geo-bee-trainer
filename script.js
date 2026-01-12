const questions = [
  {
    question:
      "Most of this country’s population is concentrated along one river, and it controls a major canal linking two seas.",
    choices: ["Egypt", "Turkey", "Pakistan", "Morocco"],
    answer: "Egypt",
    explanation:
      "Egypt’s population is concentrated along the Nile River, and the Suez Canal connects the Mediterranean and Red Seas."
  },
  {
    question:
      "This country developed a major port due to access to a deep natural harbor and is a key hub for European trade.",
    choices: ["Spain", "Netherlands", "Italy", "Portugal"],
    answer: "Netherlands",
    explanation:
      "The Port of Rotterdam is one of the largest in the world and a major European trade hub."
  },
  {
    question:
      "This country’s economy relies heavily on rice cultivation and maritime trade routes across the Pacific.",
    choices: ["Philippines", "Japan", "Indonesia", "South Korea"],
    answer: "Japan",
    explanation:
      "Japan grows rice, has limited natural resources, and relies heavily on Pacific shipping routes."
  },
  {
    question:
      "This country is known for cattle ranching on fertile plains and exporting agricultural goods.",
    choices: ["Chile", "Argentina", "Uruguay", "Paraguay"],
    answer: "Argentina",
    explanation:
      "Argentina’s Pampas region supports large-scale cattle ranching and agricultural exports."
  }
];

let current;

function newQuestion() {
  current = questions[Math.floor(Math.random() * questions.length)];

  document.getElementById("question").textContent = current.question;

  const choicesList = document.getElementById("choices");
  choicesList.innerHTML = "";

  current.choices.forEach(choice => {
    const li = document.createElement("li");
    li.textContent = choice;
    choicesList.appendChild(li);
  });

  document.getElementById("feedback").textContent = "";
}

function showAnswer() {
  document.getElementById("feedback").textContent =
    "✅ Answer: " + current.answer + "\n" +
    "Why: " + current.explanation;

  setTimeout(newQuestion, 4000);
}

newQuestion();
