function playRound(playerSelection, computerSelection){
    let winLoseMsg;
    if(playerSelection === "Rock" && computerSelection === "Scissors"){
        winLoseMsg = "You Win! Rock beats Scissors";
    }
    else if(playerSelection === "Rock" && computerSelection === "Paper"){
        winLoseMsg = "You Lose! Paper beats Rock";
    }
    else if(playerSelection === "Paper" && computerSelection === "Rock"){
        winLoseMsg = "You Win! Paper beats Rock";
    }
    else if(playerSelection === "Paper" && computerSelection === "Scissors"){
        winLoseMsg = "You Lose! Scissors beats Paper";
    }
    else if(playerSelection === "Scissors" && computerSelection === "Paper"){
        winLoseMsg = "You Win! Scissors beats Paper";;
    }
    else if(playerSelection === "Scissors" && computerSelection === "Rock"){
        winLoseMsg = "You Lose! Rock beats Scissors";;
    }
    else{
        winLoseMsg = "Its a Tie!";
    }

    const divResult = document.querySelector('.results-container');
    const oldResult = document.querySelector('.results-msg');
    const newResult = document.createElement('div');
    newResult.textContent = winLoseMsg;
    divResult.replaceChild(newResult,oldResult);
    newResult.classList.add('results-msg');

    return 0;


}

/*function game(){
    let count = 0;
    let possibleWin1 = "You Win! Paper beats Rock";
    let possibleWin2 = "You Win! Rock beats Scissors";
    let possibleWin3 = "You Win! Scissors beats Paper";

    for(i = 1; i <=5; ++i){
        let playerChoice = prompt("Rock, Paper, or Scissors!");
        let outCome = (playRound(playerChoice, computerChoice()));
    
        if(outCome == possibleWin1 || outCome == possibleWin2 || outCome == possibleWin3){
            count++;
        }
        if(outCome === "Its a Tie!"){
            i-=1;
        }

        console.log(outCome);
    }

    if(count >= 3){
        console.log("You Win the game!");
    }
    else{
        console.log("You Lost the game!");
    }

    return 0;
}
*/

function capitalize(word1){
    word1 = word1.toLowerCase();
    let letter1 = word1.charAt(0);
    letter1 = letter1.toUpperCase();
    word1 = word1.replace(word1.at(0), letter1);

    return word1;
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

//game();
const rpsBtns = document.querySelectorAll('.button-choice');

rpsBtns.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, computerChoice());
    })
}

);

