const questions = [
  {
    question:
      "This country lies mostly in the Southern Hemisphere, is known for exporting agricultural goods, and has a major port along the Río de la Plata.",
    choices: ["Chile", "Brazil", "Argentina", "Uruguay"],
    answer: "Argentina",
    explanation:
      "Argentina lies mostly in the Southern Hemisphere, exports beef and grain, and Buenos Aires is a major port on the Río de la Plata."
  },
  {
    question:
      "This country is landlocked, lies in Central Asia, and has a capital city that was formerly known as Astana.",
    choices: ["Uzbekistan", "Kazakhstan", "Turkmenistan", "Kyrgyzstan"],
    answer: "Kazakhstan",
    explanation:
      "Kazakhstan is landlocked in Central Asia, and its capital has been named Astana and Nur-Sultan."
  },
  {
    question:
      "This country has a Mediterranean climate, lies between Europe and Asia, and is divided by straits connecting two seas.",
    choices: ["Greece", "Italy", "Turkey", "Spain"],
    answer: "Turkey",
    explanation:
      "Turkey lies in both Europe and Asia and is divided by the Bosporus and Dardanelles straits."
  },
  {
    question:
      "Most of this country’s population lives along one river, and its economy depends heavily on hydroelectric power generated there.",
    choices: ["Egypt", "Ethiopia", "Sudan", "Uganda"],
    answer: "Egypt",
    explanation:
      "Egypt’s population is concentrated along the Nile River, which also supports hydroelectric power."
  },
  {
    question:
      "This country has a tropical climate, is composed of thousands of islands, and lies along major maritime trade routes.",
    choices: ["Philippines", "Indonesia", "Japan", "Malaysia"],
    answer: "Indonesia",
    explanation:
      "Indonesia is an archipelago with a tropical climate and sits along key global shipping routes."
  },
  {
    question:
      "This country lies between 30° and 40° north latitude, has dry summers and wet winters, and borders the Aegean Sea.",
    choices: ["Italy", "Greece", "Turkey", "Cyprus"],
    answer: "Greece",
    explanation:
      "Greece has a Mediterranean climate and borders the Aegean Sea between Greece and Turkey."
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
    "✅ Answer: " + current.answer + "\n\n" +
    "Why: " + current.explanation;

  setTimeout(newQuestion, 5000);
}

newQuestion();
