// The questions had been copied from https://kupidonia.com/
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

    // Variables for buttons to add event listeners
    const nextBtn = document.getElementById('next-btn');
    const startBtn = document.getElementById('start-btn');
    const restartBtn = document.getElementById('restrart-btn');
    const infoBtn = document.getElementById('info-btn');
    const soundBtn = document.getElementById('sound-btn');
    const okBtn = document.getElementById('ok-btn');

    // Event listeners to access globally from the function to play sounds
    startBtn.addEventListener('click', checkClickedButton);
    infoBtn.addEventListener('click', checkClickedButton);
    nextBtn.addEventListener('click', checkClickedButton);
    restartBtn.addEventListener('click', checkClickedButton);
    okBtn.addEventListener('click', checkClickedButton);
    soundBtn.addEventListener('click', playPauseAudio);

    /**
     * Check which button had been clicked
     */
    function checkClickedButton(event) {
        const clickedButton = event.target;

        if (clickedButton === startBtn) {
            playBtnAudio();
            checkUserInput();
        } else if (clickedButton === infoBtn) {
            playBtnAudio();
            showInfo();
        } else if (clickedButton === nextBtn) {
            playBtnAudio();
            checkHasAnswered();
        } else if (clickedButton === restartBtn || clickedButton === okBtn) {
            playBtnAudio();
            restartGame();
        }
    }
});


// Global variables to access from more than 1 functions
const welcomeContainer = document.getElementById('start');
const infoContainer = document.getElementById('info');
const timerSymbol = document.getElementById('timer-symbol');
const finishedGame = document.getElementById('finished-game');
const questionContainer = document.getElementById('questions');
const scoreRow = document.getElementById('score-holder');
const textContainer = document.getElementById('text-container');
const finishText = document.getElementById('finish-text');

//Audio to reach from 2 functions. Downloded from https://freesound.org/
const welcomeAudioPath = 'assets/sounds/welcome-sound.mp3';
const welcomeAudio = new Audio(welcomeAudioPath);

//Array of answers box, to import answers according the question
const options = Array.from(document.querySelectorAll('.answer'));

//to always start from the first question
let currentQuestionIndex = 0;
let currentQuestion = {};

//Variables for the timer, can not be declared local
let countdown;
const countDown = document.getElementById('timer');

/**
 * Add event listener to all answer-boxes to check the answer and change the background color
 */
for (let option of options) {
    option.addEventListener('click', checkAnswer);
}

// Game functions

/*
Most of the functions had been inspired from https://www.youtube.com/watch?v=riDzcEQbX6k and UDEMY course 
JavaScript - The Complete Guide 2023 (Beginner + Advanced)
Help how to add sounds is from https://www.youtube.com/watch?v=hn7MhPt24L4
*/

/**
 * Play or pause audio of the game
 */
function playPauseAudio() {
    // The audio is downloded from https://freesound.org/
    const soundBtn = document.getElementById('sound-btn');
    if (welcomeAudio.paused) {
        welcomeAudio.play();
        soundBtn.innerHTML = `SOUND <i class="fa-solid fa-volume-high"></i>`;
    } else {
        welcomeAudio.pause();
        soundBtn.innerHTML = `SOUND <i class="fa-solid fa-volume-xmark"></i>`;
    }
}

/**
 * Play sound when a btn is clicked
 */
function playBtnAudio() {
    // The audio is downloded from https://freesound.org/
    const btnAudioPath = 'assets/sounds/button-audio.mp3';
    const btnAudio = new Audio(btnAudioPath);
    if (!welcomeAudio.paused) {
        btnAudio.play();
    }
}

/**
 * Play lost sound
 */
function playLostSound() {
    // The audio is downloded from https://freesound.org/
    const lostAudioPath = 'assets/sounds/lost-sound.mp3';
    const lostAudio = new Audio(lostAudioPath);
    if (!welcomeAudio.paused) {
        lostAudio.play();
    } else {
        lostAudio.pause();
    }
}

/**
 * Play won sound
 */
function playWonSound() {
    // The audio is downloded from https://freesound.org/
    const wonAudioPath = 'assets/sounds/win-audio.mp3';
    const wonAudio = new Audio(wonAudioPath);
    if (!welcomeAudio.paused) {
        wonAudio.play();
    } else {
        wonAudio.pause();
    }
}

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

/**
 * Showing information about the game
 */
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
        timerOn(30);
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
        // When the user answers all 20 questions, the game finishes
        playWonSound();
        finishedGame.classList.remove('hide');
        questionContainer.classList.remove('next-question');
        textContainer.classList.add('visible');
        finishText.innerHTML = `
        Well done! You successfully finished the quiz! <i class="fa-regular fa-face-laugh-wink"></i>
        `;
        return;
    }
}

/**
 * Check if the user did not answer a question, throw an alert
 */
function checkHasAnswered() {
    let hasAnswered;
    if (hasAnswered === false) {
        alert('Please answer the question!');
    } else {
        showNextQuestion();
    }
}

/**
 * Check if the answer is right or wrong, change the score accordingly
 */
function checkAnswer(event) {
    questionContainer.classList.remove('next-question');
    // Checking if the question has answered or if the current question is undefined(to avoid errors)
    if (hasAnswered || !currentQuestion || hasAnswered === true) {
        return; // Exit the function if the user has already answered
    }
    //Added event to chen the answer on click event and change the background color
    const clickedAnswer = parseInt(event.target.dataset.number, 10);
    if (clickedAnswer === currentQuestion.answer) {
        event.target.style.backgroundColor = 'rgba(38, 212, 154, .7)';
        changeRightAnswersScore();
    } else {
        event.target.style.backgroundColor = 'rgba(237, 52, 52, .7)';
        changeWrongAnswersScore();
    }
    hasAnswered = true;
    clearInterval(countdown);
}

/**
 * Change the right answers' score
 */
function changeRightAnswersScore() {
    let correctScore = parseInt(document.getElementById('correct').innerText);
    document.getElementById('correct').innerText = ++correctScore;
}

/**
 * Change the wrong answers score
 */
function changeWrongAnswersScore() {
    let incorrectScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++incorrectScore;

    if (incorrectScore === 5) {
        gameOver();
        return;
    }
}

/**
 * Throws the user to the last page when the time is up.
 */
function gameOver() {
    playLostSound();
    // Reset all the color changes and hide/show containers accordingly
    countDown.classList.remove('time-counter-red');
    timerSymbol.classList.remove('time-counter-red');
    textContainer.classList.add('visible');
    finishedGame.classList.remove('hide');
    finishText.innerHTML = `Sorry, the game is over <i class="fa-regular fa-face-frown"></i>! Try again!`;
    hasAnswered = true;
    //Exit the function
    return;
}

/**
 * Restart the game if the user wants to play again
 */
function restartGame() {
    // Reset all the color changes and hide/show containers accordingly to restart the game
    infoContainer.classList.remove('visible');
    questionContainer.classList.add('hide');
    scoreRow.classList.add('hide');
    scoreRow.style.display = ('none');
    finishedGame.classList.add('hide');
    welcomeContainer.classList.remove('hide');
    document.getElementById('name-input').focus();
    //Make sure that the first question will always be the same
    currentQuestionIndex = 0;

    // Reset all the scores if the user starts over
    document.getElementById('incorrect').innerText = '0';
    document.getElementById('correct').innerText = '0';
    // Add new options with every question
    options.forEach(option => {
        const number = option.dataset['number'];
        option.innerText = currentQuestion['option' + number];
        //Reset the background color from green/red to the initial color
        option.style.backgroundColor = 'initial';
    });
    clearInterval(countdown);
    hasAnswered = false;
}

/**
 * Timer for the game. The game finishes if the user does not answer during 30 seconds
 */
function timerOn(seconds) {
    countdown = setInterval(() => {
        countDown.innerHTML = `${seconds}`;
        seconds--;

        if (seconds < 0) {
            //Start counting from 30 every time the game finishes
            clearInterval(countdown);
            gameOver();
            //exit the function to not keep bringing the restart button 
            return;
        } else if (seconds === 4) {
            //Change the color of the timer to warn the user that the time is finishing
            countDown.classList.add('time-counter-red');
            timerSymbol.classList.add('time-counter-red');
        }
    }, 1000);
    return countdown;
}
