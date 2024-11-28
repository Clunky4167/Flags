// script.js

let currentQuestion = 0;
let score = 0;

const questions = [
    {
        flag: "flag1.png",
        correctAnswer: "USA",
        options: ["USA", "Italia", "Canada"]
    },
    {
        flag: "flag2.png",
        correctAnswer: "Italia",
        options: ["USA", "Italia", "Canada"]
    },
    {
        flag: "flag3.png",
        correctAnswer: "Canada",
        options: ["USA", "Italia", "Canada"]
    }
];

function loadQuestion() {
    const question = questions[currentQuestion];
    
    // Aggiorna l'immagine della bandiera
    document.getElementById('flag-img').src = question.flag;
    
    // Aggiorna le opzioni di risposta
    const buttons = document.querySelectorAll('.choices button');
    buttons.forEach((button, index) => {
        button.textContent = question.options[index];
    });

    // Pulisce il risultato precedente
    document.getElementById('result').textContent = "";
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestion].correctAnswer;

    if (selectedAnswer === correctAnswer) {
        document.getElementById('result').textContent = "Risposta corretta!";
        score++;
    } else {
        document.getElementById('result').textContent = `Risposta sbagliata! La risposta corretta è: ${correctAnswer}`;
    }

    // Disabilita i pulsanti dopo la risposta
    const buttons = document.querySelectorAll('.choices button');
    buttons.forEach(button => {
        button.disabled = true;
    });

    // Aggiorna il punteggio
    document.getElementById('score').textContent = `Punteggio: ${score}`;
}

function nextQuestion() {
    currentQuestion++;

    // Se ci sono ancora domande
    if (currentQuestion < questions.length) {
        loadQuestion();
        
        // Riabilita i pulsanti
        const buttons = document.querySelectorAll('.choices button');
        buttons.forEach(button => {
            button.disabled = false;
        });

    } else {
        document.getElementById('result').textContent = "Quiz completato!";
        document.getElementById('next-question').style.display = "none";  // Nasconde il pulsante "Prossima domanda"
    }
}

// Carica la prima domanda
loadQuestion();
