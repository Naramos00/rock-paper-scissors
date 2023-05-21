/*function playRound(playerSelection, computerSelection){

}

function game(){

}*/

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

console.log(computerChoice());
