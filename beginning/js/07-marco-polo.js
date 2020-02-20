
//variable declaration 
let numbers=1;

//while up to 100 to multiple 3 and 5, 3 and 5 for displaying marco and or polo!
while(numbers<=100){
    
    if (numbers%3==0 && numbers%5==0){
            window.console.log(numbers+" Marco! Polo!") ; //if it finds a number which multiples 3 and 5, Marco! Polo!
        }

    else if (numbers%3==0){
        window.console.log(numbers+" Marco!"); //if it finds a number that is would only multiple 3, Marco! 
       
    }
    
    else if (numbers%5==0) {
    window.console.log(numbers+" Polo!"); //if it finds a number that is would only multiple 5, Polo!
    }

    else {
        window.console.log(numbers); //if none can multiple 3 and or 5, just displays numbers
    }

    numbers++;

 
}// it end while
