// Write an arrow function to check whether a number is Odd or Even.
// Return "Even" if the number is even.
// Return "Odd" if the number is odd.

// Example:
// checkOddEven(8) ? "Even"
// checkOddEven(5) ? "Odd"

const checkOddEven = (num) => {
    if(num % 2 === 0){
        console.log(`Even`);
    }else{
        console.log(`Odd`);
    }

};

module.exports = checkOddEven;
