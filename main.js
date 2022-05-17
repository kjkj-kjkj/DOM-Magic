
function roundUp(x) {
    return Math.ceil(x);
}

function CalculateMagic(a, b) {
    // add your code here
    
    let number = a + b + b;
    number = number + 90; // add 90 to previous answer
    number = number / 10; // divide by 10

    // check if number is a multiple of 5 - there should be no remainder 
    if (number % 5 === 0){
        number = number - 8; // subtract 8
    }

    else {
        number = number + 9; // add 9 
    }

    number = number * number; // square number
                              // number = number ** 2; alternative to square the number 

    let G = number / 3; // divide number by 3 

    return roundUp (G);
    
    // remember to call roundUp() with your result before returning
    // return roundUp(g);
}