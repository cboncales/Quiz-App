const questions = [
  {
    question: "What is the correct HTML element for the largest heading?",
    options: ["<h6>", "<heading>", "<h1>", "<head>"],
    answer: "<h1>",
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["<link>", "<a>", "<href>", "<hyperlink>"],
    answer: "<a>",
  },
  {
    question: "What does the <br> tag do in HTML?",
    options: [
      "Creates a bold text",
      "Inserts a line break",
      "Adds a horizontal rule",
      "Defines a paragraph",
    ],
    answer: "Inserts a line break",
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    options: ["font-color", "text-color", "color", "background-color"],
    answer: "color",
  },
  {
    question: "How do you select an element with the ID header in CSS?",
    options: [".header", "#header", "header", "*header"],
    answer: "#header",
  },
  {
    question:
      "Which CSS property is used to control the space between the content and the border of an element?",
    options: ["margin", "padding", "spacing", "border-space"],
    answer: "padding",
  },
  {
    question:
      "Which of the following is the correct way to declare a variable in JavaScript?",
    options: ["variable x = 10;", "let x = 10;", "x = 10;", "int x = 10;"],
    answer: "let x = 10;",
  },
  {
    question: "What will console.log(typeof 42); output?",
    options: ["string", "number", "boolean", "object"],
    answer: "number",
  },
  {
    question: "How do you write an if statement in JavaScript?",
    options: [
      "if x == 10 then {}",
      "if (x = 10) {}",
      "if (x == 10) {}",
      "if x = 10 {}",
    ],
    answer: "if (x == 10) {}",
  },
  {
    question:
      "Which method is used to add an element to the end of an array in JavaScript?",
    options: [
      "array.push()",
      "array.pop()",
      "array.shift()",
      "array.unshift()",
    ],
    answer: "array.push()",
  },
];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

let timer;
const timeLimit = 10; // Set time limit per question
let timeLeft = timeLimit;

function startTimer() {
  clearInterval(timer); // Clear any existing timer
  timeLeft = timeLimit; // Reset timer for each question

  document.getElementById("timer").textContent = `Time Left: ${timeLeft}s`;

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = `Time Left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      handleTimeout(); // Move to next question if time runs out
    }
  }, 1000);
}

function handleTimeout() {
  alert("Time's up! Moving to next question.");

  if (selectedAnswer === null) {
    // If no answer was selected, score remains 0
    document.getElementById("next-btn").classList.remove("hidden");
  }
  nextQuestion();
}

function startQuiz() {
  const username = document.getElementById("username").value.trim();

  if (username === "") {
    alert("Please enter your name before starting the quiz.");
    return;
  }
  localStorage.setItem("currentUser", username);

  document.getElementById("welcome-screen").classList.add("hidden");
  document.getElementById("question-screen").classList.remove("hidden");
  loadQuestion();
}

function loadQuestion() {
  const questionData = questions[currentQuestionIndex];
  document.getElementById("question-text").textContent = questionData.question;
  document.getElementById("question-number").textContent =
    currentQuestionIndex + 1;
  document.getElementById("options").innerHTML = "";
  selectedAnswer = null; // Reset selection

  questionData.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add(
      "w-full",
      "bg-gray-200",
      "p-2",
      "rounded",
      "hover:bg-gray-300",
      "answer-option"
    );
    button.onclick = () => selectAnswer(button, option, questionData.answer);
    document.getElementById("options").appendChild(button);
  });

  document.getElementById("next-btn").classList.add("hidden");

  updateProgress();
  startTimer();
}

function updateProgress() {
  const progress = (currentQuestionIndex / questions.length) * 100;
  document.getElementById("progress").style.width = `${progress}%`;
}

function selectAnswer(button, option, correct) {
  selectedAnswer = option; // Update selected answer

  document.querySelectorAll(".answer-option").forEach((btn) => {
    btn.classList.remove("bg-blue-400", "text-white"); // Reset styling
    btn.classList.add("bg-gray-200");
  });

  button.classList.add("bg-blue-400", "text-white"); // Highlight selection

  document.getElementById("next-btn").classList.remove("hidden"); // Show Next button
}

function checkAnswer(selected, correct) {
  if (selected === correct) {
    score++;
  }
  document.getElementById("next-btn").classList.remove("hidden");
}

function nextQuestion() {
  clearInterval(timer); // Stop the timer

  if (selectedAnswer === questions[currentQuestionIndex].answer) {
    score++; // Only add score if correct answer is selected
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  document.getElementById("question-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");
  document.getElementById("score").textContent = `${score}`;

  const username = localStorage.getItem("currentUser") || "Anonymous";
  saveScore(username, score);
  loadLeaderboard();
}

function restartQuiz() {
  currentQuestionIndex = 0; // Reset the question index
  score = 0; // Reset the score
  selectedAnswer = null; // Reset the selected answer

  // Hide the result screen and show the question screen
  document.getElementById("result-screen").classList.add("hidden");
  document.getElementById("question-screen").classList.remove("hidden");

  loadQuestion(); // Load the first question
}

function exitQuiz() {
  // Reset quiz state
  currentQuestionIndex = 0;
  score = 0;
  selectedAnswer = null;

  // Clear the current user from localStorage
  localStorage.removeItem("currentUser");

  // Hide the result screen and show the welcome screen
  document.getElementById("result-screen").classList.add("hidden");
  document.getElementById("welcome-screen").classList.remove("hidden");

  // Optional: Clear the username input field
  document.getElementById("username").value = "";
}

function saveScore(name, score) {
  let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
  leaderboard.push({ name, score });
  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
}

function loadLeaderboard() {
  const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
  const tbody = document.getElementById("leaderboard-body");
  tbody.innerHTML = "";

  leaderboard
    .sort((a, b) => b.score - a.score) // Sort by highest score
    .forEach((entry, index) => {
      const row = `<tr>
                    <td class="p-2 border text-sm font-light">${index + 1}</td>
                    <td class="p-2 border text-sm font-light">${entry.name}</td>
                    <td class="p-2 border text-sm font-light">${entry.score}</td>
                </tr>`;
      tbody.innerHTML += row;
    });
}

function clearScores() {
  if (confirm("Are you sure you want to clear the leaderboard?")) {
    localStorage.removeItem("leaderboard");
    loadLeaderboard();
  }
}

//   document.addEventListener("DOMContentLoaded", loadLeaderboard);
