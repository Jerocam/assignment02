
//declaration i for loop
let i;

//declaration coinFlip for random numbers
let coinFlip;

//for loop until 10 times and results a number 1 or 2 from random
for (i=0; i<10; i++){

   coinFlip= Math.floor(Math.random()*2);

    //if the result is 1 from random, it will display Tails 
    if (coinFlip==1){
        window.console.log("Tails");
    }

    //if the result is 0 from random, it will display Heads
    else {
        window.console.log("Heads");
    }

}//it ends for loop
