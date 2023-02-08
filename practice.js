// // var nums = [4, 5, 7, 6, 8, 2, 4, 1, 15];
// // console.log(nums);

// // var smartphone = { brand: "iPhone", model: "13" };
// // console.log(smartphone[brand])

// function movie(){

//     return "Din-The day";
  
//     return "Poran";
  
//     return "Hawa";
  
//   }
  
//   console.log(movie());

// let name = 'blackpink is the best color in the world';
// console.log(name.indexOf('color'))

// console.log(name.startsWith('is'))
// console.log(name.endsWith('world'))
// console.log(name.split(' '))

// let shortname = name.toLowercase();

// let name1 = ('Blackpink');

// let shortname1 = name1.toLowerCase();

// let allLowercase = name.toLowerCase().includes(shortname1.toLowerCase());

// console.log(allLowercase);


// let num1 = 5
// let num2 = 7
// // console.log(num1, num2)

// [ num1, num2 ] = [ num2, num1 ];
//  console.log(num1, num2)

// let fibo = [0, 1]

// for(let i = 2; i <= 20; i++){
//     fibo[i]= fibo[i-1] + fibo[i-2]
// }
// console.log(fibo)

// Math.m

// Duplicate Value

// const names = ['abul', 'babul', 'kabul', 'cabul', 'dabul', 'cabul', 'mobidul', 'abul', 'babul', 'robiul'  ]

// function removeDuplicate (names){
//     const unique = [];
//     for(let i = 0; i < names.length; i++){
//         const name = names[i];
//         if(unique.includes(name) == false){
//             unique.push(name);
//         }
//     }
//     return unique;
// }

// let uniqueNames = removeDuplicate(names);
// console.log(uniqueNames);



// function removeDuplicate(names){
//     const unique = [];
//     for(let i = 0; i < names.length; i++){
//         const name = names[i];
//         if(unique.includes(name) == false){
//             unique.push(name);
//         }
//     }
//     return unique;
// }

// const uniqueNames = removeDuplicate(names);
// console.log(uniqueNames)

// Show the output from 1-50



// for (let i = 1; i <= 50; i++){

//     if(i % 3 == 0 && i % 5 == 0){
//         console.log('foobar')
//     }

//     else if( i % 3 == 0){
//         console.log('foo')
//     }
//     else if(i % 5 == 0){
//         console.log('bar')
//     }

//     else{
//         console.log(i)
//     }
// }


// wood calculator

// fixed item 
// 1. chair = 3;
// 2.table = 5;
// 3.bed = 10;

// function woodCalculator(chairQuantity, tableQuantity, bedQuantity){

//     const perchairWood = 3;
//     const pertablewood = 5;
//     const perbedWood = 10;

//     const chairWood = perchairWood * chairQuantity;
//     const tableWood = pertablewood * tableQuantity;
//     const bedWood = perbedWood * bedQuantity;
    
//     const totalWood = chairWood + tableWood + bedWood;
//     return totalWood;
// }

// const totalWood = woodCalculator(9, 5, 3);

// console.log("Total wood needed: ", totalWood)

// let sum=0; 
// for( let i = 0; i<=3;i++){ 
// sum = sum + i; 
// }




// Problem 1: Let’s play a mind game

// Description: Here I multiply that number by 3, then add 10, then divide by 2, then subtract 5, and return the output.

function mindGame(number) {

    let result = (number * 3) + 10;
    let divideResult = (result / 2);
    let output = divideResult - 5;
    return output;

}
const inputNumber1 = 5;
let finalResult = mindGame(inputNumber1);

console.log(finalResult);




// Problem 2: Finding even or odd

// Description: Here, The output should be given based on the total number of characters in the String. Output will be 'even' or 'odd'. Now I write the code in the description.

function evenOdd(name){

    let inputName1 = name.length;
    if(inputName1 % 2 == 0){
        return 'even';
    }

   else if(inputName1 % 2 == 1){
    return 'odd';
   }

   else{
    return "Enter your String: "
   }
 
}

const inputName = 'Batch7';
const output = evenOdd(inputName);
console.log(output);





// Problem 3: Is Less or Greater than seven

// Description: Here,I need to find the difference between the input value and 7. If this difference is smaller than 7, I must return the subtraction. Otherwise I must return double of the input. Means twice the number you took as input.I write the code in the description.


function isLGSeven(giveValidNum){

    let num1 = giveValidNum - 7;

    if(num1 < 7){
        return num1;
    }
    else if(num1 >= 7){

        let output = 2 * giveValidNum;
        return output;
    }
    else{
        return "Enter a valid number: "
    }
}

const number = 6;
const myNumber = isLGSeven(number);
console.log(myNumber);





// Problem 4: Finding Bad data

// Description: I take an array as input. Any number of numbers will be in the array. Numbers can be negative numbers (less than zero) and positive numbers (greater than or equal to zero). If any number is negative I will call it "Bad Data". If a number is positive, I will call it "Good Data". I write the code in the description.


function findingBadData(array){
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            count++;
        }
    }
    return count;

}


let inputNumber =  [ -4, -9, -5, -33, -55 ];
let totalResult = findingBadData(inputNumber);
console.log(totalResult);







// Problem 5: Convert your gems into diamond

// Description: Here, I have to figure out how many diamonds I will get in total by combining the gems of all my friends. If the number of total diamond is over 1000, then I will get as many diamonds as are left by subtracting 2000 from the total diamond. I write the code in the description.


function gemsToDiamond(g1, g2, g3) {
    const totalDiamond = (g1 * 21) + (g2 * 32) + (g3 * 43);
    
    if(totalDiamond < 1000){
       
        return totalDiamond;
    }
    else if(totalDiamond > 2000){
        let outputDiamond = totalDiamond - 2000;
        return outputDiamond;
    }
    else{
        return "Enter the invalid Number";
    }
  }

  let firstFriendDiamond = 100;
  let secondFriendDiamond = 5;
  let thirdFriendDiamond = 1;
  
  const num1 = gemsToDiamond(firstFriendDiamond, secondFriendDiamond, 
     thirdFriendDiamond);

  console.log(num1);

  