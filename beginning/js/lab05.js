/*eslint-env browser*/

//declaration variables
var miles;
var gallons;
var mpg;
var again = "y";

//do - while for calculating miles per gallon if a user enters appropiate numbers.
do {
    miles = parseFloat(window.prompt("Enter miles driven"));
    gallons = parseFloat(window.prompt("Enter size of tank in gallons"));
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons;
        window.document.write("Miles per gallon: " + parseInt(mpg, 10));
    } else {
        window.alert("One or both entries are invalid");
    }

    again = window.prompt("Repeat entries? (y/n)", "y"); //if yes, it will back to ask and calculate again.
    
    
    if (again==="n"){                                 //if a user enters n, it will stop while
        again="n";
        }
    else if (again==="y"){                              //if a user enters y, it will do again as while
        again="y";
    }
    else {
    window.alert("Invalid input. Please enter only y or n"); //if a user enters a number or other than y and n, it will display error and aks to enter n or y
        while(!isNaN(again) || again!=="y" && again!=="n"){
        
        again = window.prompt("Sorry only enter (y/n)!");
        }
    }


} while (again === "y"); //it ends while