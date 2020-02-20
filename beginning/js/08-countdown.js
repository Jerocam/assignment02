//variable declaration - down for while
let down=0;
//variable declaration - prompt for a user to enter a number
let qnumb = prompt("Enter a number to count down");

//do-while, it counts down numbers to 0 from numbers entered by a user
do {
        while(down<=qnumb){
        window.console.log(qnumb);
        qnumb--;}
 
}while (qnumb===0); //it ends while

