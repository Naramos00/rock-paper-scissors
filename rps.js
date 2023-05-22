function playRound(playerSelection, computerSelection){
    playerSelection = capitalize(playerSelection);

    if(playerSelection === "Rock" && computerSelection === "Scissors"){
        comsole.log("You Win! Rock beats Scissors");
    }
    else if(playerSelection === "Rock" && computerSelection === "Paper"){
        console.log("You Lose! Paper beats Rock");
    }
    else if(playerSelection === "Paper" && computerSelection === "Rock"){
        console.log("You Win! Paper beats Rock");
    }
    else if(playerSelection === "Paper" && computerSelection === "Scissors"){
        console.log("You Lose! Scissors beats Paper");
    }
    else if(playerSelection === "Scissors" && computerSelection === "Paper"){
        console.log("You Win! Scissors beats Paper");
    }
    else if(playerSelection === "Scissors" && computerSelection === "Rock"){
        console.log("You Lose! Rock beats Scissors");
    }
    else{
        console.log("Its a Tie!");
    }

    return 0;
}
/*
function game(){

}*/
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

let playerChoice = prompt("Rock, Paper or Scissors!");
console.log(computerChoice());
