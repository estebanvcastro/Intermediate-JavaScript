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