
    //variable declaration i for loop
    let i=0;

    //variable declaration coinFlip for random numbers
    let coinFlip;

    //for loop until 10 times and results a number 1 or 2 from random
    do {

       coinFlip= Math.floor(Math.random()*2);

       //if the result is 1 from random, it will display Tails 
    if (coinFlip===1){
        window.console.log("Tails");
    }
    
    //if the result is 0 from random, it will display Heads
    else {
        window.console.log("Heads");
    }
       i++;
       
    }while (coinFlip===0); //it ends while when coinflip becomes tails     


    
