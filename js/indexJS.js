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
     * &&  AND
     * ||  OR 
     * !   NOT 
     */
    if (n > 80){

        alert ("Your love score is " + n + " %. You love each other no doubt.")

    }
    if (n > 30 && n <= 80){
        alert ("Your love score is " + n + " %.")
    }
    else{

        alert ("Your love score is " + n + " %. You need to do extra work there.")

    }


}

/*Collections: Working with arrays*/

function validateGuestArray (){

    /*This algorithm validates a specific name into a guest list*/

    var guestList = ["Usher", "Palm","Drake","50 Cent", "Snoop Dog"]

    var guest = prompt ("What is the guest name?");
    
    if (guestList.includes(guest)){
        alert ("Welcome to the party " + guest);
    }else{
        alert ("Guest has not been found.");
    }
}



function addToArray(){

    var output = [];

    //Add items to the array
    output.push(1);
    output.push(2);
    output.push(3);

    alert (output);
}

//Job application example
//This algorithm increase the value of the array by 1 every time the function is executed
var out = [];
var count = 1;

function fizzBuzz(){

    if (count % 3 === 0 && count % 5 === 0 ){
        out.push("Fizz Buzz");
    }
       
    if (count % 3 === 0 ){
        out.push("Fizz");
    }else if (count % 5 === 0 ){
        out.push("Bizz");
    }else{
        out.push(count);
    }
    count++;
    alert (out);
}

/*Who's buying lunch? Code Challenge: 133*/

/*function whosPaying (names){
    
    var randomIndex = Math.floor(Math.random() * names.length);

    var randomName = names [randomIndex];

    return randomName + " is going to buy lunch today!";

}*/

/*While Loop: Solution to the 99 bottles Challenge, 135

function beer(){
    var numberOfBottles = 99;

    while(numberOfBottles >= 0 ){

        var bottleWord = "bottles";

        if (numberOfBottles === 1){
            bottleWord = "bottle";
        }

        prompt (numberOfBottles + " " + bottleWord + " of beer on the wall");
        prompt (numberOfBottles + " " + bottleWord + " of beer,");
        prompt ("Take one down, pass it around,");
        numberOfBottles--
        prompt (numberOfBottles + " " + bottleWord + " of beer on the wall"); 

    }

}*/

/*Fibonacci Code Challenge*/
function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        var fibonacci = [];
        if (n == 1 ){
            fibonacci = [0];
        }else if (n === 2){

            fibonacci = [0,1];

        }else{
            fibonacci = [0,1];

           for (var i = 2; i < n; i++){
               fibonacci.push (fibonacci[fibonacci.length-2] + fibonacci[fibonacci.length-1]);
           }
        }
        
        alert (fibonacci);
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    