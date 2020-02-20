/*eslint-env browser*/

//GLOBAL VARIABLES
var futureValue;
var investment;
var rate;
var years;
var i;

//COLLECT VALUES FROM USER
do{
    investment = parseFloat(window.prompt("Enter investment amount as xxxx.xx")); 
    if (isNaN(investment)){                                                         //if not number, error as invalid
        window.alert("entried is invalid. Only Numbers please");
    }
    else{
        investment = investment;                                                    //if appropiate numbers, it goes to calculate etc
    } 

}while(isNaN(investment));                                                          //it will repeat if same error by not number

do{
    rate = parseFloat(window.prompt("Enter interest rate as xx.x"));
    if (isNaN(rate)){
        window.alert("entried is invalid. Only Numbers please");                    //if not number, error as invalid
    }
    else{
        rate = rate;                                                                // if appropiate numbers, it goes to calculate etc
    } 
        do {
            if (rate < 0 || rate>6){
            window.alert("Must enter an interest rate between 0% and 6%");          //if a number is over 6%, it requires to enter again as 0 - 6% (0 - 6)
            rate = parseFloat(window.prompt("Enter interest rate as xx.x"));
            }
            else {
                rate=rate;                                                          // if appropiate numbers, it goes to calculate etc
            }
        } while (rate>6);                     

}while(isNaN(rate));

do{
    years = parseInt(window.prompt("Enter number of years"), 10);                   
    if (isNaN(years)){                                                              //if not number, error as invalid
        window.alert("entried is invalid. Only Numbers please");
    }
    else{
        years = years;                                                              // if appropiate numbers, it goes to calculate etc
    } 
    do {
        if (years < 0 || years>30){                                                 //if a number is over 30, it requires to enter again as 0 - 30
        window.alert("Must enter a number of years between 0 and 30");
        years = parseInt(window.prompt("Enter number of years"), 10);
        }
        else {
            years=years;                                                            // if appropiate numbers, it goes to calculate etc
        }
    } while (years>30);

}while(isNaN(years));


//CALCULATE FUTURE VALUE
futureValue = investment;
for (i = 1; i <= years; i += 1) {
    futureValue = futureValue + (futureValue * rate / 100);
}

//DISPLAY RESULT
window.document.write("Investment amount: $" + investment + "<br>");
window.document.write("Interest rate: " + rate + "%<br>");
window.document.write("Years: " + years + "<br>");
window.document.write("Future value: $" + parseInt(futureValue, 10));