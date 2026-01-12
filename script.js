// Stage 6 - Nationals-level 60-question set
const questions = [ 

  {
    question: "This country lies mostly in the Southern Hemisphere, has the Pampas plains, and Buenos Aires is its main port.",
    answer: "Argentina",
    explanation: "Argentina is in South America, with the Pampas region and Buenos Aires as its major port."
  },
  {
    question: "This landlocked Central Asian country’s capital was formerly called Astana.",
    answer: "Kazakhstan",
    explanation: "Kazakhstan is landlocked in Central Asia; its capital was Astana, later called Nur-Sultan."
  },
  {
    question: "This country spans two continents and is divided by the Bosporus Strait.",
    answer: "Turkey",
    explanation: "Turkey lies in Europe and Asia; the Bosporus separates its continents."
  },
  {
    question: "Most of this country’s population lives along the Nile River, which also supports hydroelectric power.",
    answer: "Egypt",
    explanation: "Egypt’s population is concentrated along the Nile, and the river supports dams like Aswan High Dam."
  },
  {
    question: "An archipelagic nation along major Southeast Asian trade routes with thousands of islands and a tropical climate.",
    answer: "Indonesia",
    explanation: "Indonesia consists of thousands of islands, is tropical, and sits along key global shipping routes."
  },
  {
    question: "This country is north of the Mediterranean, east of the Iberian Peninsula, and its capital is Madrid.",
    answer: "Spain",
    explanation: "Spain is on the Iberian Peninsula; Madrid is its capital."
  },
  {
    question: "This country has a Mediterranean climate, borders the Aegean Sea, and has thousands of islands off its coast.",
    answer: "Greece",
    explanation: "Greece has a Mediterranean climate, borders the Aegean Sea, and contains many islands."
  },
  {
    question: "This landlocked African country is completely surrounded by South Africa.",
    answer: "Lesotho",
    explanation: "Lesotho is entirely surrounded by South Africa."
  },
  {
    question: "This river flows through Baghdad and is historically associated with Mesopotamia.",
    answer: "Tigris",
    explanation: "The Tigris flows through Baghdad and was central to ancient Mesopotamia."
  },
  {
    question: "This country has three capitals: Pretoria, Bloemfontein, and Cape Town.",
    answer: "South Africa",
    explanation: "South Africa divides its government across three capitals for executive, judicial, and legislative branches."
  },
  {
    question: "A landlocked Central African country with a namesake river that flows into the Congo River.",
    answer: "Central African Republic",
    explanation: "The Central African Republic is landlocked and contains part of the Ubangi River, a Congo tributary."
  },
  {
    question: "This country’s former name was Swaziland and lies northeast of South Africa.",
    answer: "Eswatini",
    explanation: "Eswatini, formerly Swaziland, is a small landlocked country northeast of South Africa."
  },
  {
    question: "This Asian country’s capital is Thimphu, and it is nestled in the eastern Himalayas.",
    answer: "Bhutan",
    explanation: "Bhutan is in the Himalayas; Thimphu is the capital."
  },
  {
    question: "This river forms part of the border between the United States and Mexico.",
    answer: "Rio Grande",
    explanation: "The Rio Grande serves as part of the US-Mexico border."
  },
  {
    question: "This country has the world’s largest oil reserves, located mostly in the Orinoco Belt.",
    answer: "Venezuela",
    explanation: "Venezuela holds the largest proven oil reserves, largely in the Orinoco region."
  },
  {
    question: "This Central Asian country borders Kazakhstan and Uzbekistan and was historically known as Khwarazm.",
    answer: "Turkmenistan",
    explanation: "Turkmenistan borders Kazakhstan and Uzbekistan; Khwarazm was a historical region here."
  },
  {
    question: "This African country lies on the Horn of Africa and its capital is Mogadishu.",
    answer: "Somalia",
    explanation: "Somalia is on the Horn of Africa; Mogadishu is its capital."
  },
  {
    question: "A country with the highest waterfall in the world, Angel Falls, located in South America.",
    answer: "Venezuela",
    explanation: "Angel Falls, the world’s tallest waterfall, is in Venezuela’s Canaima National Park."
  },
  {
    question: "This country’s capital is Helsinki and it borders both Russia and Sweden.",
    answer: "Finland",
    explanation: "Finland borders Russia and Sweden; Helsinki is the capital."
  },
  {
    question: "This river flows through Paris and is historically important for trade and navigation.",
    answer: "Seine",
    explanation: "The Seine flows through Paris and has been a key trade route for centuries."
  },
  {
    question: "This landlocked country lies in the Andes and has La Paz as one of its capitals.",
    answer: "Bolivia",
    explanation: "Bolivia is landlocked, and La Paz serves as its administrative capital."
  },
  {
    question: "This Southeast Asian country was formerly known as Burma and has Naypyidaw as its capital.",
    answer: "Myanmar",
    explanation: "Myanmar, formerly Burma, has Naypyidaw as the capital city."
  },
  {
    question: "This country is the largest in Africa by land area and its capital is Algiers.",
    answer: "Algeria",
    explanation: "Algeria is Africa’s largest country; Algiers is the capital."
  },
  {
    question: "This country is entirely in Central America and has San José as its capital.",
    answer: "Costa Rica",
    explanation: "Costa Rica is in Central America with San José as its capital."
  },
  {
    question: "This country’s capital is Baghdad and it lies between the Tigris and Euphrates rivers.",
    answer: "Iraq",
    explanation: "Iraq is located between the Tigris and Euphrates; Baghdad is the capital."
  },
  {
    question: "This island nation is located southeast of India and was formerly called Ceylon.",
    answer: "Sri Lanka",
    explanation: "Sri Lanka, formerly Ceylon, lies southeast of India."
  },
  {
    question: "This country has most of the Kalahari Desert and is home to the Okavango Delta.",
    answer: "Botswana",
    explanation: "Botswana contains most of the Kalahari and the Okavango Delta."
  },
  {
    question: "This European capital lies along the Danube and borders Austria.",
    answer: "Bratislava",
    explanation: "Bratislava, Slovakia’s capital, lies along the Danube River and borders Austria."
  },
  {
    question: "This country’s capital is Kathmandu and it lies along the southern slopes of the Himalayas.",
    answer: "Nepal",
    explanation: "Nepal is in the Himalayas; Kathmandu is the capital."
  },
  {
    question: "This country is known for its fjords, and its capital is Oslo.",
    answer: "Norway",
    explanation: "Norway is famous for fjords; Oslo is the capital."
  },
  {
    question: "This desert spans parts of northern China and southern Mongolia.",
    answer: "Gobi",
    explanation: "The Gobi Desert covers northern China and southern Mongolia."
  },
  {
    question: "This country’s largest city is Lagos, though the capital is Abuja.",
    answer: "Nigeria",
    explanation: "Nigeria’s capital is Abuja; Lagos is its largest city."
  },
  {
    question: "This island country lies just south of India and has Colombo as a major city.",
    answer: "Sri Lanka",
    explanation: "Sri Lanka lies south of India; Colombo is a major city."
  },
  {
    question: "This African country’s capital is Addis Ababa and it hosts the African Union headquarters.",
    answer: "Ethiopia",
    explanation: "Addis Ababa is Ethiopia’s capital and hosts the African Union."
  },
  {
    question: "This country has the Caspian Sea to its east and was part of the Soviet Union until 1991.",
    answer: "Kazakhstan",
    explanation: "Kazakhstan borders the Caspian Sea and gained independence after the USSR dissolved."
  },
  {
    question: "This European country is divided into Flanders, Wallonia, and Brussels.",
    answer: "Belgium",
    explanation: "Belgium has Flanders (Dutch-speaking), Wallonia (French-speaking), and the Brussels region."
  },
  {
    question: "This river flows from Lake Victoria through Uganda and South Sudan into Sudan, forming the White Nile.",
    answer: "Nile",
    explanation: "The White Nile originates in Lake Victoria and passes through several countries to Sudan."
  },
  {
    question: "This country has two capitals, one administrative and one judicial, and is located in southern Africa.",
    answer: "South Africa",
    explanation: "South Africa has Pretoria (administrative) and Bloemfontein (judicial)."
  },
  {
    question: "This country has a Mediterranean coastline, and its cities include Tripoli and Benghazi.",
    answer: "Libya",
    explanation: "Libya borders the Mediterranean; Tripoli and Benghazi are major cities."
  },
  {
    question: "This country’s capital is Vienna and it lies along the Danube in central Europe.",
    answer: "Austria",
    explanation: "Austria’s capital is Vienna, located on the Danube River."
  },
  {
    question: "This country occupies the island of Borneo along with Malaysia and Brunei.",
    answer: "Indonesia",
    explanation: "Indonesia occupies much of Borneo; Malaysia and Brunei occupy the north."
  },
  {
    question: "This country has the city of Marrakesh and is west of Algeria.",
    answer: "Morocco",
    explanation: "Morocco lies west of Algeria; Marrakesh is a major city."
  },
  {
    question: "This country has a tropical rainforest covering its northern region and a capital city called Bangkok.",
    answer: "Thailand",
    explanation: "Thailand has tropical rainforest regions; Bangkok is the capital."
  },
  {
    question: "This country’s capital is Riyadh and it is the largest country in the Arabian Peninsula.",
    answer: "Saudi Arabia",
    explanation: "Saudi Arabia is the largest Arabian Peninsula country; Riyadh is the capital."
  },
  {
    question: "This European country lies east of France, south of the North Sea, and has Amsterdam as its capital.",
    answer: "Netherlands",
    explanation: "The Netherlands is east of France; Amsterdam is the capital."
  },
  {
    question: "This country contains the world’s largest rainforest and the Amazon River basin.",
    answer: "Brazil",
    explanation: "Brazil contains the majority of the Amazon Rainforest and river basin."
  },
  {
    question: "This island nation lies northwest of Madagascar and is known for its unique wildlife, including lemurs.",
    answer: "Madagascar",
    explanation: "Madagascar lies off Africa’s southeastern coast; lemurs are native."
  },
  {
    question: "This country’s capital is Tehran and it has the Zagros Mountains running along its west.",
    answer: "Iran",
    explanation: "Iran has Tehran as capital and the Zagros Mountains in the west."
  },
  {
    question: "This country is landlocked, lies between France and Germany, and its capital is Luxembourg City.",
    answer: "Luxembourg",
    explanation: "Luxembourg is landlocked between France and Germany; capital is Luxembourg City."
  },
  {
    question: "This river flows through northern India and Bangladesh and is considered sacred by Hindus.",
    answer: "Ganges",
    explanation: "The Ganges flows through India and Bangladesh; sacred in Hinduism."
  },
  {
    question: "This country occupies most of the Iberian Peninsula along with Portugal.",
    answer: "Spain",
    explanation: "Spain occupies the majority of the Iberian Peninsula; Portugal occupies the west coast."
  },
  {
    question: "This country has its capital at Sucre (constitutional) and La Paz (administrative).",
    answer: "Bolivia",
    explanation: "Bolivia has two capitals: Sucre and La Paz."
  }
];




// Track current question index
let currentQuestionIndex = 0;

// Select DOM elements
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const showBtn = document.getElementById('show-answer');
const nextBtn = document.getElementById('next-question');

// Function to display a question
function displayQuestion() {
  // Clear previous answer
  answerEl.style.display = 'none';
  answerEl.innerHTML = '';

  // Show current question
  const q = questions[currentQuestionIndex];
  questionEl.innerText = `Q${currentQuestionIndex + 1}: ${q.question}`;
}

// Function to show answer
function showAnswer() {
  const q = questions[currentQuestionIndex];
  answerEl.style.display = 'block';
  answerEl.innerHTML = `<strong>Answer:</strong> ${q.answer}<br><em>${q.explanation}</em>`;
}

// Function to go to next question
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex >= questions.length) {
    currentQuestionIndex = 0; // loop back to start
    alert("You've reached the end of the 60-question set! Starting over.");
  }
  displayQuestion();
}

// Button listeners
showBtn.addEventListener('click', showAnswer);
nextBtn.addEventListener('click', nextQuestion);

// Initialize first question
displayQuestion();
