
let playerCount = 0;
let computerCount = 0;

const rpsBtns = document.querySelectorAll('.button-choice');

rpsBtns.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, computerChoice());
    })
}

);


function playRound(playerSelection, computerSelection){

    const playerScore = document.querySelector('#playerScore');
    const computerScore = document.querySelector('#compScore');


    let winLoseMsg;
    if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")) {
        winLoseMsg = `You Win! ${playerSelection} beats ${computerSelection}`;
        ++playerCount;
        playerScore.textContent = playerCount;

        if(playerCount === 5){
            winLoseMsg = "You win! Skynet is no more."
            document.querySelectorAll('.button-choice').forEach(e => e.disabled = true);
            playAgain();
        }
    }
    else if (playerSelection === computerSelection){
        winLoseMsg = `It's a tie. You both chose ${playerSelection}.`
    }
    else{
        winLoseMsg = `You Lose! ${computerSelection} beats ${playerSelection}`
        ++computerCount;
        computerScore.textContent = computerCount;

        if(computerCount === 5){
            winLoseMsg = "You Lost! Skynet has won."
            document.querySelectorAll('.button-choice').forEach(e => e.disabled = true);
            playAgain();
        }
    }

    const divResult = document.querySelector('.results-container');
    const oldResult = document.querySelector('.results-msg');
    const newResult = document.createElement('div');
    newResult.textContent = winLoseMsg;
    divResult.replaceChild(newResult,oldResult);
    newResult.classList.add('results-msg');

    return 0;
}

function computerChoice(){
    let choice = Math.floor(Math.random() * (3)) + 1;
    let rpsChoice;
    if(choice === 1){
        rpsChoice = "Rock";
    }
    else if(choice === 2){
        rpsChoice = "Paper";
    }
    else{
        rpsChoice = "Scissors"
    }

    return rpsChoice;
}


function playAgain(){
    const playDiv = document.getElementById('play-again');
    const playBtn = document.createElement('button');
    playBtn.textContent = "Play again?";
    playBtn.setAttribute('id', 'redo');

    playDiv.appendChild(playBtn);

    playerCount = 0;
    computerCount = 0;

    const redoGame = document.getElementById('redo');
    const playerScore = document.getElementById('playerScore');
    const computerScore = document.getElementById('compScore');

    redoGame.addEventListener('click', () => {
        playDiv.removeChild(playBtn)
        document.querySelectorAll('.button-choice').forEach(e => e.disabled = false);
        const originalMsg = document.querySelector('.results-msg');
        originalMsg.textContent = "Do not let Skynet win!";

        playerScore.textContent = playerCount;
        computerScore.textContent = computerCount;
    });



}





//learned how to disable buttons 
//used arrow functions
//used an even listner

