const questionBank = [
    {
        question: "Cila eshte formula e Ka per nje acid te dobet HA?",
        answers: [
            "[H3O+][A-] / [HA]",
            "[HA] / [H3O+][A-]",
            "[A-] / [HA]",
            "[H3O+] / [HA]"
        ],
        correct: 0
    },

    {
        question: "Cila eshte formula e Kb per nje baze te dobet B?",
        answers: [
            "[B] / [BH+][OH-]",
            "[BH+][OH-] / [B]",
            "[OH-] / [B]",
            "[BH+] / [OH-]"
        ],
        correct: 1
    },

    {
        question: "Nje vlere me e madhe e Ka tregon:",
        answers: [
            "Acid me te dobet",
            "Acid me te forte",
            "Baze me te forte",
            "Tretesire neutrale"
        ],
        correct: 1
    },

    {
        question: "Nje vlere me e madhe e Kb tregon:",
        answers: [
            "Baze me te forte",
            "Baze me te dobet",
            "Acid me te forte",
            "Tretesire neutrale"
        ],
        correct: 0
    },

    {
        question: "Cili nga keto eshte acid i dobet?",
        answers: [
            "HCl",
            "HNO3",
            "CH3COOH",
            "HClO4"
        ],
        correct: 2
    },

    {
        question: "Cila nga keto eshte baze e dobet?",
        answers: [
            "NaOH",
            "KOH",
            "NH3",
            "Ba(OH)2"
        ],
        correct: 2
    },

    {
        question: "Cili eshte reaksioni i nje acidi te dobet HA me uje?",
        answers: [
            "HA + H2O = H3O+ + A-",
            "HA = H2 + A",
            "HA + OH- = H2O",
            "HA = H+ + OH-"
        ],
        correct: 0
    },

    {
        question: "Cili eshte reaksioni i NH3 me uje?",
        answers: [
            "NH3 + H2O = NH4+ + OH-",
            "NH3 = NH2- + H+",
            "NH3 + OH- = NH4+",
            "NH3 = N2 + H2"
        ],
        correct: 0
    },

    {
        question: "Cili acid eshte me i forte?",
        answers: [
            "Ka = 10^-3",
            "Ka = 10^-6",
            "Ka = 10^-8",
            "Ka = 10^-10"
        ],
        correct: 0
    },

    {
        question: "Cila baze eshte me e forte?",
        answers: [
            "Kb = 10^-2",
            "Kb = 10^-5",
            "Kb = 10^-8",
            "Kb = 10^-10"
        ],
        correct: 0
    },

    {
        question: "Nese H3O+ = 0.001 M, A- = 0.001 M dhe HA = 0.1 M, sa eshte Ka?",
        answers: [
            "10^-2",
            "10^-5",
            "10^-3",
            "10^-6"
        ],
        correct: 1
    },

    {
        question: "Nese BH+ = 0.001 M, OH- = 0.001 M dhe B = 0.1 M, sa eshte Kb?",
        answers: [
            "10^-2",
            "10^-5",
            "10^-3",
            "10^-6"
        ],
        correct: 1
    },

    {
        question: "Cila eshte lidhja midis Ka dhe Kb?",
        answers: [
            "Ka * Kb = Kw",
            "Ka + Kb = Kw",
            "Ka = Kb",
            "Ka / Kb = Kw"
        ],
        correct: 0
    },

    {
        question: "Ne 25 grade Celsius, sa eshte Kw?",
        answers: [
            "10^-7",
            "10^-14",
            "10^-3",
            "10^-1"
        ],
        correct: 1
    },

    {
        question: "Nese Ka = 10^-5, sa eshte pKa?",
        answers: [
            "5",
            "-5",
            "10",
            "1"
        ],
        correct: 0
    },

    {
        question: "Nese Kb = 10^-3, sa eshte pKb?",
        answers: [
            "3",
            "-3",
            "7",
            "10"
        ],
        correct: 0
    },

    {
        question: "Nese Ka zvogelohet, forca e acidit:",
        answers: [
            "Rritet",
            "Zvogelohet",
            "Mbetet e njejte",
            "Behet baze"
        ],
        correct: 1
    },

    {
        question: "Nese Kb rritet, forca e bazes:",
        answers: [
            "Rritet",
            "Zvogelohet",
            "Behet acid",
            "Nuk ndryshon"
        ],
        correct: 0
    },

    {
        question: "Cila madhesi tregon forcen e nje acidi te dobet?",
        answers: [
            "Ka",
            "Kb",
            "Kw",
            "Masa molare"
        ],
        correct: 0
    },

    {
        question: "Cila madhesi tregon forcen e nje baze te dobet?",
        answers: [
            "Ka",
            "Kb",
            "Kw",
            "Masa molare"
        ],
        correct: 1
    },

    {
        question: "Nese H3O+ = 0.01 M, A- = 0.01 M dhe HA = 1 M, sa eshte Ka?",
        answers: [
            "10^-2",
            "10^-3",
            "10^-4",
            "10^-5"
        ],
        correct: 2
    },

    {
        question: "Nese BH+ = 0.01 M, OH- = 0.01 M dhe B = 1 M, sa eshte Kb?",
        answers: [
            "10^-2",
            "10^-3",
            "10^-4",
            "10^-5"
        ],
        correct: 2
    },

    {
        question: "Nese Ka = 10^-4 dhe nje acid tjeter ka Ka = 10^-7, cili eshte me i forte?",
        answers: [
            "Ka = 10^-7",
            "Ka = 10^-4",
            "Jane njesoj",
            "Nuk dihet"
        ],
        correct: 1
    },

    {
        question: "Nese Kb = 10^-4 dhe nje baze tjeter ka Kb = 10^-8, cila eshte me e forte?",
        answers: [
            "Kb = 10^-8",
            "Kb = 10^-4",
            "Jane njesoj",
            "Nuk dihet"
        ],
        correct: 1
    },

    {
        question: "Cila eshte formula per pKa?",
        answers: [
            "pKa = log(Ka)",
            "pKa = -log(Ka)",
            "pKa = Ka / 10",
            "pKa = 10 * Ka"
        ],
        correct: 1
    },

    {
        question: "Cila eshte formula per pKb?",
        answers: [
            "pKb = -log(Kb)",
            "pKb = log(Kb)",
            "pKb = Kb / 10",
            "pKb = 10 * Kb"
        ],
        correct: 0
    },

    {
        question: "Nese pKa zvogelohet, forca e acidit:",
        answers: [
            "Zvogelohet",
            "Rritet",
            "Mbetet e njejte",
            "Behet neutral"
        ],
        correct: 1
    },

    {
        question: "Nese pKb zvogelohet, forca e bazes:",
        answers: [
            "Rritet",
            "Zvogelohet",
            "Mbetet e njejte",
            "Behet acid"
        ],
        correct: 0
    },

    {
        question: "Nese Ka = 10^-5, sa eshte Kb per bazen e konjuguar ne 25 grade Celsius?",
        answers: [
            "10^-5",
            "10^-9",
            "10^-14",
            "10^-19"
        ],
        correct: 1
    },

    {
        question: "Nese Ka * Kb = 10^-14 dhe Ka = 10^-6, sa eshte Kb?",
        answers: [
            "10^-8",
            "10^-9",
            "10^-10",
            "10^-12"
        ],
        correct: 2
    }
];

let quizQuestions = [];
let currentQuestion = 0;
let score = 0;
let selectedAnswer = -1;
let timeLeft = 15 * 60;
let timer = null;

const startButton = document.getElementById("startBtn");
const nextButton = document.getElementById("nextBtn");
const restartButton = document.getElementById("restartBtn");

const startScreen = document.querySelector(".start-screen");
const quizScreen = document.querySelector(".quiz-screen");
const resultScreen = document.querySelector(".result-screen");

const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("question");
const answersContainer = document.getElementById("answers");

const timerText = document.getElementById("timer");
const progressBar = document.getElementById("progressBar");

const scoreText = document.getElementById("score");
const resultText = document.getElementById("resultMessage");

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

function startQuiz() {
    quizQuestions = shuffle(questionBank.slice()).slice(0, 20);

    currentQuestion = 0;
    score = 0;
    selectedAnswer = -1;
    timeLeft = 15 * 60;

    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    resultScreen.classList.add("hidden");

    clearInterval(timer);

    updateTimer();
    showQuestion();

    timer = setInterval(function() {
        timeLeft--;

        updateTimer();

        if (timeLeft <= 0) {
            clearInterval(timer);
            finishQuiz();
        }
    }, 1000);
}

function showQuestion() {
    const current = quizQuestions[currentQuestion];

    selectedAnswer = -1;

    questionNumber.textContent =
        "Pyetja " + (currentQuestion + 1) + " / 20";

    questionText.textContent = current.question;

    progressBar.style.width =
        ((currentQuestion + 1) / 20 * 100) + "%";

    answersContainer.innerHTML = "";

    for (let i = 0; i < current.answers.length; i++) {
        const button = document.createElement("button");

        button.className = "answer";

        button.textContent =
            String.fromCharCode(65 + i) + ") " + current.answers[i];

        button.addEventListener("click", function() {
            const allButtons =
                document.querySelectorAll(".answer");

            for (let j = 0; j < allButtons.length; j++) {
                allButtons[j].classList.remove("selected");
            }

            button.classList.add("selected");

            selectedAnswer = i;
        });

        answersContainer.appendChild(button);
    }

    if (currentQuestion === 19) {
        nextButton.textContent = "Perfundo Quiz-in";
    } else {
        nextButton.textContent = "Vazhdo →";
    }
}

function nextQuestion() {
    if (selectedAnswer === -1) {
        alert("Zgjidh nje pergjigje!");
        return;
    }

    if (selectedAnswer === quizQuestions[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < 20) {
        showQuestion();
    } else {
        finishQuiz();
    }
}

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timerText.textContent =
        "Koha: " +
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");
}

function finishQuiz() {
    clearInterval(timer);

    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    const percentage =
        Math.round((score / 20) * 100);

    scoreText.textContent =
        score + " / 20";

    if (percentage >= 90) {
        resultText.textContent =
            "Shkelqyeshem! E ke kuptuar shume mire temen.";
    } else if (percentage >= 70) {
        resultText.textContent =
            "Shume mire! Ke njohuri te mira per Ka dhe Kb.";
    } else if (percentage >= 50) {
        resultText.textContent =
            "Mire! Perseriti edhe pak formulat dhe llogaritjet.";
    } else {
        resultText.textContent =
            "Vazhdo te praktikosh Ka dhe Kb.";
    }
}

function restartQuiz() {
    clearInterval(timer);

    quizScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");

    timeLeft = 15 * 60;

    timerText.textContent = "Koha: 15:00";

    progressBar.style.width = "5%";
}

startButton.addEventListener("click", startQuiz);

nextButton.addEventListener("click", nextQuestion);

restartButton.addEventListener("click", restartQuiz);