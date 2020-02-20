// variable declaration - coinFlip for random numbers, question asks a user which heads or tails, and the result from the question to choice
let coinFlip = Math.floor(Math.random() * 2);
let question = prompt("Heads or Tails?");
let choice = question;
    
//if the result is less than 1, it is heads then if choice matches heads that you win or lost
    if (coinFlip<1) {
        if (choice==="heads"){
            window.alert("The flip was heads and you chose heads...you win!");
        }
        else {
            window.alert("he flip was heads but you chose tails...you lose!");
        }
    }//end - if

//if the result is greater than 1, it is tails then if choice matches tails that you win or lost
    else {
        if (choice==="tails"){
            window.alert("The flip was tails and you chose tails...you win!");
        }
        else {
            window.alert("The flip was tails but you chose heads...you lose!");
        }

    }//end - else




