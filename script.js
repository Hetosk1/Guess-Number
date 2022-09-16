'use strict';

const secretNumber = Math.floor(Math.random()*20)+1;

let score = 20;

let highscore = 0;

document.querySelector('.check').addEventListener('click',function(){
    const guessNumber = Number(document.querySelector('.guess').value);    
    console.log(guessNumber);

    if (!guessNumber) {
        document.querySelector('.message').textContent = "No Value Entered";
    } else if (guessNumber === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = "🎉 Correct Guess";
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = "30rem";
        document.querySelector('.guess').disabled = true;
        document.querySelector('.check').disabled = true;
        if (score > highscore ) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    } else if (guessNumber > secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = "The guess is Higher";
            score = score - 1;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = "💥 you lost the game";
        }
    } else if (guessNumber < secretNumber) {
        if (score > 0){
            document.querySelector('.message').textContent = "The guess is Lower";
            score = score - 1;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "💥 you lost the game";
        }
    }

});

document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = "Start Guessing...";
    document.querySelector('.score').textContent = 20;
    score = 20;
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('.number').textContent = "?";
});
