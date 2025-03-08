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

const basicQuestions = [
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
    question: "How do you select an element with the ID 'header' in CSS?",
    options: [".header", "#header", "header", "*header"],
    answer: "#header",
  },
  {
    question: "Which HTML tag is used to define a paragraph?",
    options: ["<div>", "<span>", "<p>", "<section>"],
    answer: "<p>",
  },
  {
    question:
      "Which of the following is a valid way to apply CSS to an HTML document?",
    options: [
      "Inline styles",
      "Internal styles",
      "External styles",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question: "What does the HTML `<title>` tag do?",
    options: [
      "Defines the title of the document",
      "Displays a tooltip on hover",
      "Creates a header",
      "Changes the font size",
    ],
    answer: "Defines the title of the document",
  },
  {
    question: "Which symbol is used to select a class in CSS?",
    options: ["#", ".", "*", "&"],
    answer: ".",
  },
  {
    question: "Which unit is NOT relative in CSS?",
    options: ["em", "rem", "px", "%"],
    answer: "px",
  },
];

const intermediateQuestions = [
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<css>", "<style>", "<script>", "<link>"],
    answer: "<style>",
  },
  {
    question: "What does the CSS property 'display: flex;' do?",
    options: [
      "Makes the element invisible",
      "Creates a grid layout",
      "Enables a flexible box layout",
      "Adds a border to the element",
    ],
    answer: "Enables a flexible box layout",
  },
  {
    question: "What will 'console.log(2 + '2');' output in JavaScript?",
    options: ["4", "22", "NaN", "Error"],
    answer: "22",
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
  {
    question: "What does the CSS property 'position: absolute;' do?",
    options: [
      "Positions the element relative to its normal position",
      "Positions the element relative to the viewport",
      "Positions the element relative to its nearest positioned ancestor",
      "Positions the element fixed on the page",
    ],
    answer: "Positions the element relative to its nearest positioned ancestor",
  },
  {
    question: "Which property is used to make text bold in CSS?",
    options: ["font-weight", "bold", "text-bold", "font-style"],
    answer: "font-weight",
  },
  {
    question:
      "Which JavaScript keyword is used to declare a constant variable?",
    options: ["var", "let", "const", "static"],
    answer: "const",
  },
  {
    question: "Which of the following is NOT a valid JavaScript data type?",
    options: ["String", "Number", "Boolean", "Character"],
    answer: "Character",
  },
  {
    question:
      "Which CSS property is used to set the background color of an element?",
    options: ["color", "background", "background-color", "bgcolor"],
    answer: "background-color",
  },
  {
    question: "What does the JavaScript '===‘ operator do?",
    options: [
      "Checks for value equality",
      "Checks for value and type equality",
      "Assigns a value",
      "Checks if a value is greater",
    ],
    answer: "Checks for value and type equality",
  },
];

const advancedQuestions = [
  {
    question: "What is the purpose of the HTML <canvas> element?",
    options: [
      "To display images",
      "To create animations and graphics",
      "To embed videos",
      "To create forms",
    ],
    answer: "To create animations and graphics",
  },
  {
    question: "Which CSS selector has the highest specificity?",
    options: [".class", "#id", "tag", "*"],
    answer: "#id",
  },
  {
    question: "What does 'event.preventDefault()' do in JavaScript?",
    options: [
      "Stops the event from bubbling up",
      "Prevents the default action of the event",
      "Removes the event listener",
      "Triggers the event immediately",
    ],
    answer: "Prevents the default action of the event",
  },
  {
    question: "What is the output of 'console.log(typeof []);' in JavaScript?",
    options: ["array", "object", "undefined", "null"],
    answer: "object",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["class", "id", "style", "font"],
    answer: "style",
  },
  {
    question: "Which HTML5 tag is used for playing video files?",
    options: ["<media>", "<video>", "<source>", "<play>"],
    answer: "<video>",
  },
  {
    question: "What does the CSS property 'overflow: hidden;' do?",
    options: [
      "Hides content that overflows the container",
      "Wraps overflowing content to a new line",
      "Automatically resizes the container",
      "Allows scrolling within the container",
    ],
    answer: "Hides content that overflows the container",
  },
  {
    question:
      "Which method is used to remove the last element from an array in JavaScript?",
    options: [
      "array.pop()",
      "array.shift()",
      "array.splice()",
      "array.remove()",
    ],
    answer: "array.pop()",
  },
  {
    question: "What does 'async' do when used in JavaScript functions?",
    options: [
      "Pauses the execution of the function",
      "Makes the function run asynchronously",
      "Runs the function multiple times",
      "Delays function execution",
    ],
    answer: "Makes the function run asynchronously",
  },
  {
    question: "Which HTTP status code represents a successful request?",
    options: ["200", "404", "500", "302"],
    answer: "200",
  },
];

const insaneQuestions = [
  {
    question:
      "What does the following JavaScript code output: 'console.log(0.1 + 0.2 === 0.3);'?",
    options: ["true", "false", "NaN", "Error"],
    answer: "false",
  },
  {
    question: "What is the purpose of the CSS 'z-index' property?",
    options: [
      "To control the horizontal positioning of an element",
      "To control the vertical positioning of an element",
      "To control the stacking order of elements",
      "To control the opacity of an element",
    ],
    answer: "To control the stacking order of elements",
  },
  {
    question:
      "What is the output of 'console.log(1 + '1' - 1);' in JavaScript?",
    options: ["10", "11", "0", "NaN"],
    answer: "10",
  },
  {
    question:
      "Which of the following is NOT a JavaScript framework or library?",
    options: ["React", "Angular", "Vue", "Laravel"],
    answer: "Laravel",
  },
  {
    question: "What does the 'debounce' function do in JavaScript?",
    options: [
      "Delays the execution of a function until a certain time has passed",
      "Executes a function immediately and only once",
      "Prevents a function from being called more than once",
      "Executes a function at regular intervals",
    ],
    answer:
      "Delays the execution of a function until a certain time has passed",
  },
  {
    question: "What is the purpose of the JavaScript 'closure'?",
    options: [
      "To close an open function",
      "To create a function with private variables",
      "To execute a function immediately",
      "To delete a function",
    ],
    answer: "To create a function with private variables",
  },
  {
    question:
      "What will be the output of `console.log([] + []);` in JavaScript?",
    options: ["0", "undefined", "empty string", "Error"],
    answer: "empty string",
  },
  {
    question:
      "Which of the following is a valid way to deep clone an object in JavaScript?",
    options: [
      "Object.assign({}, obj)",
      "JSON.parse(JSON.stringify(obj))",
      "obj.clone()",
      "obj.copy()",
    ],
    answer: "JSON.parse(JSON.stringify(obj))",
  },
  {
    question: "Which CSS property allows an element to be resized by the user?",
    options: ["resize", "overflow", "scale", "transform"],
    answer: "resize",
  },
  {
    question: "What does 'Object.freeze(obj)' do in JavaScript?",
    options: [
      "Prevents new properties from being added",
      "Prevents modification of existing properties",
      "Prevents deletion of properties",
      "All of the above",
    ],
    answer: "All of the above",
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
