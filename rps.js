function playRound(playerSelection, computerSelection){
    playerSelection = capitalize(playerSelection);
    let winLoseMsg;
    if(playerSelection === "Rock" && computerSelection === "Scissors"){
        return winLoseMsg = "You Win! Rock beats Scissors";
    }
    else if(playerSelection === "Rock" && computerSelection === "Paper"){
        return winLoseMsg = "You Lose! Paper beats Rock";
    }
    else if(playerSelection === "Paper" && computerSelection === "Rock"){
        return winLoseMsg = "You Win! Paper beats Rock";
    }
    else if(playerSelection === "Paper" && computerSelection === "Scissors"){
        return winLoseMsg = "You Lose! Scissors beats Paper";
    }
    else if(playerSelection === "Scissors" && computerSelection === "Paper"){
        return winLoseMsg = "You Win! Scissors beats Paper";
    }
    else if(playerSelection === "Scissors" && computerSelection === "Rock"){
        return winLoseMsg = "You Lose! Rock beats Scissors";
    }
    else{
        return winLoseMsg = "Its a Tie!";
    }

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
