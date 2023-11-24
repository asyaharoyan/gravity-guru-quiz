//The questions and answers had been taken from kupidonia.com
const questions = [
    {
        question: "Which of the following is an example of a vector quantity?",
        option1: "Time",
        option2: "Temperature",
        option3: "Velocity",
        option4: "Work",
        answer: 3
    },
    {
        question: "An object is moving with a constant speed in a circular path. Which of the following statements is true?",
        option1: "The velocity of the object is constant.",
        option2: "The acceleration of the object is constant.",
        option3: "The direction of the velocity of the object is constantly changing.",
        option4: "None of them is true",
        answer: 3
    },
    {
        question: "Which of the following statements is true about Newton's First Law of Motion?",
        option1: "An object at rest will stay at rest unless acted upon by a force",
        option2: "The acceleration of an object is directly proportional to the net force acting on it",
        option3: "Every action has an equal and opposite reaction",
        option4: "Newton is not a physisist",
        answer: 1
    },
    {
        question: "A ball is thrown horizontally from the top of a cliff with an initial velocity of 10 m/s. If the cliff is 50 meters high, how long will it take for the ball to hit the ground?",
        option1: "1.4 s",
        option2: "2.0 s",
        option3: "5.0 s",
        option4: "1.8 s",
        answer: 2
    },
    {
        question: "Which of the following is an example of kinetic energy?",
        option1: "A stretched spring",
        option2: "A moving car",
        option3: "A raised weight",
        option4: "None",
        answer: 2
    },
    {
        question: "A car accelerates uniformly from rest to a speed of 25 m/s in 10 seconds. What is the car's acceleration?",
        option1: "2.5 m/s^2",
        option2: "10 m/s^2",
        option3: "25 m/s^2",
        option4: "13 m/s^2",
        answer: 1
    },
    {
        question: "Which of the following statements is true about electric charge?",
        option1: "Like charges attract each other",
        option2: "Opposite charges repel each other",
        option3: "Neutral objects can be charged by contact with a charged object",
        option4: "Charges can not attract or repel",
        answer: 3
    },
    {
        question: "A 5 kg object is suspended by a string from the ceiling of an elevator. If the elevator is accelerating upwards at a rate of 3 m/s^2, what is the tension in the string?",
        option1: "20 N",
        option2: "35 N",
        option3: "45 N",
        option4: "50 N",
        answer: 4
    },
    {
        question: "Which of the following is the SI unit for measuring electric current?",
        option1: "Joule",
        option2: "Watt",
        option3: "Ampere",
        option4: "N",
        answer: 3
    },
    {
        question: "Which physicist developed the laws of motion and the law of universal gravitation?",
        option1: "Benjamin Franklin",
        option2: "Albert Einstein",
        option3: "Stephen Hawking",
        option4: "Isaac Newton",
        answer: 4
    },
    {
        question: "Which of the following is an example of projectile motion?",
        option1: "A car driving down a straight road",
        option2: "A baseball being thrown from pitcher to catcher",
        option3: "A person walking in a circle",
        option4: "None of them",
        answer: 2
    },
    {
        question: "A block with a mass of 2 kg is placed on a horizontal surface with a coefficient of friction of 0.4. A force of 10 N is applied to the block. What is the acceleration of the block?",
        option1: "2.0 m/s^2",
        option2: "3.0 m/s^2",
        option3: "4.0 m/s^2",
        option4: "5.0 m/s^2",
        answer: 2
    },
    {
        question: "Which of the following is NOT an example of a vector quantity?",
        option1: "Acceleration",
        option2: "Magnetic induction",
        option3: "Force",
        option4: "Mass",
        answer: 4
    },
    {
        question: "Which of the following is an example of Newton's First Law of Motion?",
        option1: "A soccer ball comes to rest after being kicked across the field.",
        option2: "A car speeds up when the gas pedal is pressed.",
        option3: "An object at rest remains at rest unless acted upon by an external force.",
        option4: "None of them",
        answer: 3
    },
    {
        question: "A ray of light travels from air to glass at an angle of incidence of 30 degrees. If the refractive index of glass is 1.5, what is the angle of refraction?",
        option1: "19.5 degrees",
        option2: "30 degrees",
        option3: "45 degrees",
        option4: "48 degrees",
        answer: 1
    },
    {
        question: "Which of the following is an example of potential energy?",
        option1: "A ball rolling down a hill",
        option2: "A stretched rubber band",
        option3: "A moving car",
        option4: "A person walking",
        answer: 2
    },
    {
        question: "A ball is thrown straight up into the air. At the highest point of its trajectory, which of the following statements is true?",
        option1: "The velocity of the ball is zero.",
        option2: "The acceleration of the ball is zero.",
        option3: "The force acting on the ball is zero.",
        option4: "The force acting on the ball is equal to the balls weight.",
        answer: 1
    },
    {
        question: "Which of the following is true about the law of conservation of energy?",
        option1: "Energy cannot be created or destroyed, only transformed from one form to another.",
        option2: "The total energy of a system remains constant if no external work is done on the system.",
        option3: "Both a and b are correct.",
        option4: "Both a and b are incorrect.",
        answer: 3
    },
    {
        question: "Which physicist developed the theory of general relativity?",
        option1: "Isaac Newton",
        option2: "Albert Einstein",
        option3: "Galileo Galilei",
        option4: "Thomas Edison",
        answer: 2
    },
    {
        question: "Which of the following is an example of a non-contact force?",
        option1: "Magnetic force",
        option2: "Friction",
        option3: "Gravity",
        option4: "Tension",
        answer: 1
    }
];

// Inside this function, the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('name-input');
    nameInput.focus();
});

// Global variables to control the click events
const startBtn = document.getElementById('start-btn');
const infoBtn = document.getElementById('info-btn');
const soundBtn = document.getElementById('sound-btn');
const okBtn = document.getElementById('ok-btn');


// Global variables to access from more than 1 functions
const welcomeContainer = document.getElementById('start');
const infoContainer = document.getElementById('info');

//Event listeners for the buttons
startBtn.addEventListener('click', startGame);
infoBtn.addEventListener('click', showInfo);
okBtn.addEventListener('click', restartGame);

//Array of answers box, to import answers according the question
const options = Array.from(document.querySelectorAll('.answer'));

//to always start from the first question
let currentQuestionIndex = 0;
let currentQuestion = {};

/**
 * Add event listener to all answer-boxes to check the answer and change the background color
 */
for (let option of options) {
    option.addEventListener('click', checkAnswer);
}


// Functions of the game 

/**
 * Checking if the input is empty, does not start the game.
 */
function checkUserInput() {
    const nameInput = document.getElementById('name-input');
    if (nameInput) {
        if (nameInput.value.trim() === '') {
            alert('Please enter your name');
        } else {
            startGame();
        }
    }
}

function showInfo() {
    infoContainer.classList.add('visible');
}

/**
 * Starting the game
 */
function startGame() {
    options.forEach(option => {
        const number = option.dataset['number'];
        option.innerText = currentQuestion['option' + number];
        option.style.backgroundColor = 'initial';   //reset the background color from green/red to the initial color         
    });

    hasAnswered = false;
    welcomeContainer.classList.add('hide');
    document.getElementById('name-input').value = '';
    showNextQuestion();
}

/**
 * To continue with the next questions as the user clicks next
 */
function showNextQuestion() {
    //to be able to change the array separatly
    let availableQuestions = [...questions];
    const questionHolder = document.getElementById('question-holder');
    // Animate the question every time it loads
    questionContainer.classList.add('next-question');
    hasAnswered = false;

    if (currentQuestionIndex < availableQuestions.length) {
        questionContainer.classList.remove('hide');
        scoreRow.classList.remove('hide');
        // to make space between the numbers
        scoreRow.style.display = ('flex');

        currentQuestion = availableQuestions[currentQuestionIndex];
        // Add current question in the question holder
        questionHolder.innerText = currentQuestion.question;
        // Changes the answer options according the question
        options.forEach(option => {
            const number = option.dataset['number'];
            option.innerText = currentQuestion['option' + number];
            // Reset the background color from green/red to the initial color
            option.style.backgroundColor = 'initial';
        });
        currentQuestionIndex++;
    } else {
        // When the user answers all 20 questions, finishes the game

        finishedGame.classList.remove('hide');
        questionContainer.classList.remove('next-question');
        textContainer.classList.add('visible');
        finishText.innerHTML = `Well done! You successfully finished the quiz! <i class="fa-regular fa-face-laugh-wink"></i>`;
        return;
    }
}

/**
 * Check if the user did not answer a question, throw an alert
 */
function checkHasAnswered() {

}

/**
 * Check if the answer is right or wrong, change the score accordingly
 */
function checkAnswer() {

}

/**
 * Change the right answers' score
 */
function changeRightAnswersScore() {

}

/**
 * Change the wrong answers score
 */
function changeWrongAnswersScore() {

}

/**
 * Throws the user to the last page when the time is up.
 */
function gameOver() {

}

/**
 * Restart the game if the user wants to play again
 */
function restartGame() {

}



/**
 * Timer for the game. The game finishes if the user does not answer during 30 seconds
 */
function timerOn() {
}

