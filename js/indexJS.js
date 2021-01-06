//Create a random number between 1 - 6
function randomNumber(){
    
    var number = Math.random(); // Generates numbers between 0.xxx to 0.xxx9
    number = number * 6;
    number = Math.floor(number) + 1;

    alert("Random number between 1 to 6 is: " + number);
}

function loveCalculator(){

    var name1 = prompt("What's your name?");
    var name2 = prompt("What's their name?");

    var n = Math.random();
    n = n * 100;
    n = Math.floor(n);

    /**
     * === is equal to
     * !== is NOT equal to
     * >   is greater than
     * <   is lesser than
     * >=  is greater or equal to
     * <=  is lesser or equal to
     */
    if (n > 80){

        alert ("Yout love score is " + n + " %. You love each other no doubt.")

    }else{

        alert ("Yout love score is " + n + " %. You need to do extra work there.")

    }


}